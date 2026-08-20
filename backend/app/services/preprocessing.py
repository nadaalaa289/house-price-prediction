import pandas as pd
import json
import os

# Load locations
LOCATIONS_PATH = os.path.join(os.path.dirname(__file__), "../../../models/locations.json")

try:
    with open(LOCATIONS_PATH, "r") as f:
        KNOWN_LOCATIONS = set(json.load(f))
    print(f"✅ Loaded {len(KNOWN_LOCATIONS)} known locations")
except FileNotFoundError:
    KNOWN_LOCATIONS = set()
    print("⚠️ locations.json not found! Using empty location set.")

def prepare_data(request_data: dict) -> pd.DataFrame:
    """
    Convert the incoming request to a pandas DataFrame
    that matches the training data format.
    """
    location = request_data.get("location", "other")
    
    if location not in KNOWN_LOCATIONS:
        location = "other"
    
    df = pd.DataFrame([{
        "location": location,
        "carpet_area_sqft": float(request_data.get("carpet_area_sqft", 0)),
        "floor_num": int(request_data.get("floor_num", 0)),
        "bathroom_num": int(request_data.get("bathroom", 0)),      # ← bathroom → bathroom_num
        "balcony_num": int(request_data.get("balcony", 0)),        # ← balcony → balcony_num
        "Transaction": request_data.get("transaction", "Resale"),
        "Furnishing": request_data.get("furnishing", "Unfurnished"),
        "facing": request_data.get("facing", "Unknown"),
        "Ownership": request_data.get("ownership", "Unknown")
    }])
    
    return df