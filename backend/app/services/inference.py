import joblib
import os
import pandas as pd
from app.core.config import settings

class ModelInference:
    def __init__(self):
        self.model = None
        self.model_path = settings.MODEL_PATH
        self._load_model()
    
    def _load_model(self):
        """Load the model from disk."""
        try:
            self.model = joblib.load(self.model_path)
            print(f"✅ Model loaded successfully from {self.model_path}")
        except FileNotFoundError:
            print(f"❌ Model file not found: {self.model_path}")
            self.model = None
        except Exception as e:
            print(f"❌ Error loading model: {e}")
            self.model = None
    
    def predict(self, df: pd.DataFrame) -> float:
        """
        Make a prediction using the loaded model.
        """
        if self.model is None:
            raise ValueError("Model not loaded. Please check the model path.")
        
        prediction = self.model.predict(df)
        return float(prediction[0])

# Singleton instance
inference = ModelInference()