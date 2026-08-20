from pydantic_settings import BaseSettings
from pydantic import ConfigDict

class Settings(BaseSettings):
    model_config = ConfigDict(env_file=".env", env_file_encoding="utf-8")
    
    PORT: int = 8000
    MODEL_PATH: str = "./models/house_price_pipeline.pkl"
    LOG_LEVEL: str = "INFO"

settings = Settings()