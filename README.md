
```markdown
# 🏠 House Price Prediction

End-to-end Machine Learning web application for predicting Indian real estate prices using FastAPI + React.

## 📌 Overview
An end-to-end full-stack ML application featuring a **FastAPI** REST backend and a **React + TypeScript** frontend. The core model is a **Random Forest Regressor** trained inside a scikit-learn preprocessing pipeline to deliver real-time house price predictions.

## 🏗️ Architecture Diagram
```text
+-------------------+        HTTP POST /predict        +-------------------+
|                   | -------------------------------> |                   |
|   React Frontend  |                                  |   FastAPI Server  |
| (TypeScript/Vite) | <------------------------------- |  (Python 3.11)    |
+-------------------+     JSON Response {price}        +-------------------+
                                                                 |
                                                       Loads joblib pipeline
                                                                 v
                                                       +-------------------+
                                                       |  Random Forest    |
                                                       |   ML Pipeline     |
                                                       +-------------------+

```

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript, Vite, Tailwind CSS
* **Backend**: FastAPI, Python 3.11, Pydantic, Uvicorn
* **ML**: scikit-learn, pandas, numpy, joblib
* **Deployment**: Docker, GitHub Actions

## 📂 Project Structure

* `backend/` – FastAPI server, routes, and schemas
* `frontend/` – React client application
* `notebooks/` – Jupyter notebook for data cleaning, EDA, and model training
* `models/` – Exported `house_price_pipeline.pkl` and `locations.json`
* `screenshots/` – Web app UI preview images

## 📊 Dataset & Download Instructions

* **Dataset**: [House Price by Juhi Bhojani (Kaggle)](https://www.kaggle.com/datasets/juhibhojani/house-price)
* **File**: `house_prices.csv` (~187,000 real estate listings)

1. Download `house_prices.csv` from Kaggle.
2. Place the file in `notebooks/data/house_prices.csv`.
3. Run `notebooks/house_price_prediction.ipynb` to generate model artifacts in `models/`.

## ⚙️ Environment Variables

### Backend (`backend/.env`)

| Variable | Default Value | Description |
| --- | --- | --- |
| `MODEL_PATH` | `../models/house_price_pipeline.pkl` | Path to exported joblib pipeline |
| `LOCATIONS_PATH` | `../models/locations.json` | Path to JSON locations mapping |
| `PORT` | `8000` | Port for FastAPI server |

### Frontend (`frontend/.env`)

| Variable | Default Value | Description |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `http://localhost:8000` | Backend API base URL |

## 🚀 Run Locally

### 1. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

```

*Swagger docs available at `http://localhost:8000/docs`.*

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev

```

*Frontend app running at `http://localhost:5173`.*

## 📡 API Reference & Example

### `POST /predict`

Predict property price in INR.

**Request (`curl`):**

```bash
curl -X 'POST' \
  'http://localhost:8000/predict' \
  -H 'Content-Type: application/json' \
  -d '{
  "carpet_area_sqft": 1200,
  "floor_num": 3,
  "bathroom": 2,
  "balcony": 1,
  "location_grouped": "mumbai",
  "Furnishing": "Semi-Furnished",
  "Transaction": "Resale",
  "Ownership": "Freehold",
  "facing": "East"
}'

```

**Response:**

```json
{
  "predicted_price_inr": 8540120.50,
  "formatted_price": "85.40 Lac INR"
}

```

## 📈 Model Metrics

| Metric | Random Forest (Winning Model) | Linear Regression (Baseline) |
| --- | --- | --- |
| **MAE (INR)** | **1,094,216.66** | 51,117,316.95 |
| **RMSE (INR)** | **4,281,775.00** | 8,774,376,000.00 |
| **$R^2$ Score** | **0.9288** | 0.7333 |
| **5-Fold CV $R^2$** | **0.9242 (±0.0008)** | N/A |

## 🖼️ App Screenshots

| Prediction Input Form | Model Output & Price Prediction |
| --- | --- |
|  |  |

```

```
