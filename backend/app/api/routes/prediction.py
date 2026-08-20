from fastapi import APIRouter, HTTPException
from app.schemas.prediction import PredictionRequest, PredictionResponse
from app.services.preprocessing import prepare_data
from app.services.inference import inference
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/health")
async def health_check():
    """Check if the API is running and model is loaded."""
    if inference.model is None:
        logger.error("Health check: Model not loaded")
        return {"status": "error", "message": "Model not loaded"}
    logger.info("Health check: OK")
    return {"status": "ok", "message": "API is ready"}

@router.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    """
    Predict house price based on input features.
    """
    if inference.model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        logger.info(f"Prediction request: {request.model_dump()}")
        
        # Convert request to DataFrame
        df = prepare_data(request.model_dump())
        
        # Make prediction
        price = inference.predict(df)
        
        return PredictionResponse(predicted_price=price)
    
    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Prediction error: {str(e)}")