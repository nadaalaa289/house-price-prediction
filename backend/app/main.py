from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.api.routes import prediction
from app.core.config import settings
from app.services.inference import inference
import logging

# Configure logging
logging.basicConfig(level=settings.LOG_LEVEL)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Load model
    logger.info("Starting up...")
    inference._load_model()
    yield
    # Shutdown: Cleanup
    logger.info("Shutting down...")

app = FastAPI(
    title="House Price Prediction API",
    description="Predict house prices based on property features",
    version="1.0.0",
    lifespan=lifespan
)

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(prediction.router, prefix="/api/v1", tags=["Prediction"])

@app.get("/")
async def root():
    return {
        "message": "House Price Prediction API",
        "docs": "/docs",
        "status": "running"
    }