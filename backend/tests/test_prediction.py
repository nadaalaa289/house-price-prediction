import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"

def test_predict_happy_path():
    response = client.post("/api/v1/predict", json={
        "location": "thane",
        "carpet_area_sqft": 500.0,
        "floor_num": 10,
        "bathroom": 1,
        "balcony": 2,
        "transaction": "Resale",
        "furnishing": "Unfurnished",
        "facing": "East",
        "ownership": "Freehold"
    })
    assert response.status_code == 200
    assert "predicted_price" in response.json()
    assert response.json()["status"] == "success"

def test_predict_invalid_input():
    response = client.post("/api/v1/predict", json={
        "location": "thane",
        "carpet_area_sqft": -100,  # Invalid: negative area
        "floor_num": 10,
        "bathroom": 1,
        "balcony": 2,
        "transaction": "Resale",
        "furnishing": "Unfurnished",
        "facing": "East",
        "ownership": "Freehold"
    })
    assert response.status_code == 422  # Validation error