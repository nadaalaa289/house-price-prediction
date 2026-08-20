from pydantic import BaseModel, Field

class PredictionRequest(BaseModel):
    location: str
    carpet_area_sqft: float
    floor_num: int
    bathroom: int       # ← يفضل استقبال bathroom عشان المستخدم يفهم
    balcony: int        # ← يفضل استقبال balcony عشان المستخدم يفهم
    furnishing: str
    transaction: str
    ownership: str
    facing: str

    model_config = {"extra": "allow"}

class PredictionResponse(BaseModel):
    predicted_price: float
    status: str = "success"