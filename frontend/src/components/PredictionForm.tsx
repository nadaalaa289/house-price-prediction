import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { predictPrice } from '../api/predictionClient';

// قائمة المواقع (هنضيفها يدوياً دلوقتي)
const LOCATIONS = ['thane', 'mumbai', 'pune', 'nashik', 'nagpur', 'other'];

const PredictionForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        location: 'thane',
        carpet_area_sqft: '',
        floor_num: '',
        bathroom: '',      // ← changed
        balcony: '',       // ← changed
        furnishing: 'Unfurnished',
        transaction: 'Resale',
        ownership: 'Freehold',
        facing: 'East'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [locations, setLocations] = useState<string[]>(LOCATIONS);

    // تحميل المواقع من الـ Backend
    useEffect(() => {
        const loadLocations = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/locations');
                if (response.ok) {
                    const data = await response.json();
                    setLocations(data);
                }
            } catch (error) {
                console.log('Using default locations');
            }
        };
        loadLocations();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Client-side validation
        const area = parseFloat(formData.carpet_area_sqft);
        if (area <= 0) {
            setError('Carpet area must be greater than 0');
            setLoading(false);
            return;
        }

        try {
            const result = await predictPrice({
                location: formData.location,
                carpet_area_sqft: parseFloat(formData.carpet_area_sqft),
                floor_num: parseInt(formData.floor_num),
                bathroom: parseInt(formData.bathroom),   // ← changed
                balcony: parseInt(formData.balcony),     // ← changed
                furnishing: formData.furnishing,
                transaction: formData.transaction,
                ownership: formData.ownership,
                facing: formData.facing
            });

            navigate('/result', {
                state: { 
                    price: result.predicted_price,
                    formData: formData
                }
            });
        } catch (err: any) {
            setError(err.response?.data?.detail || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>🏠 Predict House Price</h2>
            
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Location *</label>
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    >
                        {locations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Carpet Area (sqft) *</label>
                    <input
                        type="number"
                        name="carpet_area_sqft"
                        value={formData.carpet_area_sqft}
                        onChange={handleChange}
                        placeholder="e.g., 500"
                        style={{ width: '100%', padding: '8px' }}
                        required
                        min="1"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Floor Number *</label>
                    <input
                        type="number"
                        name="floor_num"
                        value={formData.floor_num}
                        onChange={handleChange}
                        placeholder="e.g., 10"
                        style={{ width: '100%', padding: '8px' }}
                        required
                        min="-1"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Bathrooms *</label>
                    <input
                        type="number"
                        name="bathroom"       // ← changed
                        value={formData.bathroom}
                        onChange={handleChange}
                        placeholder="e.g., 2"
                        style={{ width: '100%', padding: '8px' }}
                        required
                        min="0"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Balconies *</label>
                    <input
                        type="number"
                        name="balcony"        // ← changed
                        value={formData.balcony}
                        onChange={handleChange}
                        placeholder="e.g., 1"
                        style={{ width: '100%', padding: '8px' }}
                        required
                        min="0"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Furnishing *</label>
                    <select
                        name="furnishing"
                        value={formData.furnishing}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    >
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Semi-Furnished">Semi-Furnished</option>
                        <option value="Furnished">Furnished</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Transaction *</label>
                    <select
                        name="transaction"
                        value={formData.transaction}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    >
                        <option value="Resale">Resale</option>
                        <option value="New Property">New Property</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Ownership *</label>
                    <select
                        name="ownership"
                        value={formData.ownership}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    >
                        <option value="Freehold">Freehold</option>
                        <option value="Leasehold">Leasehold</option>
                        <option value="Co-operative Society">Co-operative Society</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Facing *</label>
                    <select
                        name="facing"
                        value={formData.facing}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    >
                        <option value="East">East</option>
                        <option value="West">West</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                    </select>
                </div>

                {error && (
                    <div style={{ color: 'red', marginBottom: '15px' }}>
                        ❌ {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Predicting...' : 'Predict Price'}
                </button>
            </form>
        </div>
    );
};

export default PredictionForm;