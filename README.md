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
🛠️ Tech StackFrontend: React, TypeScript, Vite, Tailwind CSSBackend: FastAPI, Python 3.11, Pydantic, UvicornML: scikit-learn, pandas, numpy, joblibDeployment: Docker, GitHub Actions📂 Project Structurebackend/ – FastAPI server, API routes, and request validation schemasfrontend/ – React client application with interactive form componentsnotebooks/ – Jupyter notebook for data cleaning, EDA, model training, and evaluationmodels/ – Exported house_price_pipeline.pkl and locations.json artifactsscreenshots/ – Application interface screenshots📊 Dataset & Download InstructionsDataset: House Price by Juhi Bhojani (Kaggle)File: house_prices.csv (~187,000 real estate listings)Download Steps:Download house_prices.csv from Kaggle.Place the file inside notebooks/data/house_prices.csv.Run the notebook notebooks/house_price_prediction.ipynb to train and generate models/house_price_pipeline.pkl and models/locations.json.⚙️ Environment VariablesBackend (backend/.env)VariableDefault ValueDescriptionMODEL_PATH../models/house_price_pipeline.pklPath to exported joblib pipelineLOCATIONS_PATH../models/locations.jsonPath to JSON locations mappingPORT8000Port for FastAPI serverFrontend (frontend/.env)VariableDefault ValueDescriptionVITE_API_BASE_URLhttp://localhost:8000Backend API base URL🚀 Setup StepsPrerequisitesPython 3.11+Node.js (v18+) & npm1. Backend SetupBashcd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
API docs available at http://localhost:8000/docs.2. Frontend SetupBashcd frontend
npm install
npm run dev
Frontend client accessible at http://localhost:5173.📡 API Reference & ExamplePOST /predictPredict property price in INR.Example curl Request:Bashcurl -X 'POST' \
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
Example Response:JSON{
  "predicted_price_inr": 8540120.50,
  "formatted_price": "85.40 Lac INR"
}
📈 Model MetricsMetricRandom Forest (Winning Model)Linear Regression (Baseline)MAE (INR)1,094,216.6651,117,316.95RMSE (INR)4,281,775.008,774,376,000.00$R^2$ Score0.92880.73335-Fold CV $R^2$0.9242 (±0.0008)N/A🖼️ App ScreenshotsPrediction Input FormModel Output & Price Prediction
