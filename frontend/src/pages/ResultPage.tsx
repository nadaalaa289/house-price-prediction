import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { price, formData } = location.state || {};

    if (!price) {
        return (
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <h2>No prediction found</h2>
                <button onClick={() => navigate('/')}>
                    Go back to form
                </button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', textAlign: 'center' }}>
            <h2>🏠 Predicted Price</h2>
            
            <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#4CAF50',
                margin: '30px 0'
            }}>
                ₹{price.toLocaleString()}
            </div>

            <div style={{ 
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'left',
                marginBottom: '30px'
            }}>
                <h4>Property Details:</h4>
                <p><strong>Location:</strong> {formData?.location}</p>
                <p><strong>Area:</strong> {formData?.carpet_area_sqft} sqft</p>
                <p><strong>Floor:</strong> {formData?.floor_num}</p>
                <p><strong>Bathrooms:</strong> {formData?.bathroom}</p>
                <p><strong>Balconies:</strong> {formData?.balcony}</p>
                <p><strong>Furnishing:</strong> {formData?.furnishing}</p>
                <p><strong>Transaction:</strong> {formData?.transaction}</p>
                <p><strong>Ownership:</strong> {formData?.ownership}</p>
                <p><strong>Facing:</strong> {formData?.facing}</p>
            </div>

            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '12px 30px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Predict Another
            </button>
        </div>
    );
};

export default ResultPage;