# ✅ **بالظبط! الكلام صح حسب مشروعك!**

أنا بصيت على الـ README اللي إنتِ حطيتها، وهي متوافقة جداً مع مشروعك، بس في حاجات بسيطة محتاجة تتعدل عشان تبقى دقيقة 100%:


```markdown
# 🏠 House Price Prediction — End-to-End ML Web App

An end-to-end Machine Learning web application for predicting Indian real estate prices based on property features, location, and structural attributes.

---

## 📌 Overview
This repository contains a full-stack ML solution featuring a **FastAPI** REST backend and a **React + TypeScript** frontend. The core model is a **Random Forest Regressor** trained inside a scikit-learn preprocessing pipeline, capable of serving real-time price estimates based on user inputs.

---

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

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Backend:** FastAPI, Python 3.11, Pydantic, Uvicorn
* **ML:** scikit-learn, pandas, numpy, joblib
* **Deployment:** GitHub

---

## 📂 Project Structure

* `backend/` – FastAPI server, API routes, and request validation schemas
* `frontend/` – React client application with interactive form components
* `notebooks/` – Jupyter notebook for data cleaning, EDA, model training, and evaluation
* `models/` – Exported `house_price_pipeline.pkl` and `locations.json` artifacts
* `screenshots/` – Application interface screenshots

---

## 📊 Dataset & Download Instructions

* **Dataset**: [House Price by Juhi Bhojani (Kaggle)](https://www.kaggle.com/datasets/juhibhojani/house-price)
* **File**: `house_prices.csv` (~187,000 real estate listings)

### Download Steps:

1. Download `house_prices.csv` from Kaggle.
2. Place the file inside `data/house_prices.csv`.
3. Run the notebook `notebooks/house_price_model.ipynb` to train and generate `models/house_price_pipeline.pkl` and `models/locations.json`.

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

| Variable | Default Value | Description |
| --- | --- | --- |
| `MODEL_PATH` | `../models/house_price_pipeline.pkl` | Path to exported joblib pipeline |
| `PORT` | `8000` | Port for FastAPI server |

### Frontend (`frontend/.env`)

| Variable | Default Value | Description |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `http://localhost:8000` | Backend API base URL |

---

## 🚀 Setup Steps

### Prerequisites

* Python 3.11+
* Node.js (v18+) & npm

### 1. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

*API docs available at `http://localhost:8000/docs`.*

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

*Frontend client accessible at `http://localhost:5173`.*

---

## 📡 API Reference & Example

### `POST /api/v1/predict`

Predict property price in INR.

#### Example `curl` Request:

```bash
curl -X POST "http://localhost:8000/api/v1/predict" \
  -H "Content-Type: application/json" \
  -d '{
  "location": "thane",
  "carpet_area_sqft": 1200,
  "floor_num": 3,
  "bathroom": 2,
  "balcony": 1,
  "furnishing": "Semi-Furnished",
  "transaction": "Resale",
  "ownership": "Freehold",
  "facing": "East"
}'
```

#### Example Response:

```json
{
  "predicted_price": 15423000.0,
  "status": "success"
}
```

---

## 📈 Model Metrics

| Metric | Random Forest (Winning Model) | Linear Regression (Baseline) |
| --- | --- | --- |
| **MAE (INR)** | **1,094,216.66** | 51,117,316.95 |
| **RMSE (INR)** | **4,281,775.00** | 8,774,376,000.00 |
| **$R^2$ Score** | **0.9288** | 0.7333 |
| **5-Fold CV $R^2$** | **0.9242 (±0.0008)** | N/A |

---

## 🖼️ App Screenshots

| Prediction Input Form | Result Page |
|----------------------|-------------|
| ![Home](screenshots/home.png) | ![Result](screenshots/result.png) |



---

## 📌 **قولي "خلصت" بعد ما تعدلي الـ README**
