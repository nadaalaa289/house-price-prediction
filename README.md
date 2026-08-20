Markdown
# 🏠 House Price Prediction

An end-to-end Machine Learning web application for predicting real estate property prices in India using FastAPI and React.

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Backend:** FastAPI, Python 3.11, Pydantic
* **Machine Learning:** scikit-learn, pandas, numpy, joblib
* **Deployment & Tooling:** Docker, GitHub

---

## 📂 Project Structure

```text
├── backend/          # FastAPI application & API endpoints
├── frontend/         # React client application (Vite)
├── notebooks/        # Jupyter notebooks for Data Cleaning, EDA & Training
└── models/           # Exported pipeline (.pkl) and locations.json
🚀 Run Locally
Prerequisites
Python 3.11+

Node.js (v18+) & npm

1. Train & Export Model (Optional)
If models/house_price_pipeline.pkl is not present, run the notebook inside notebooks/ to generate the model artifacts and location mappings.

2. Backend Setup
Bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
The API server will run at http://127.0.0.1:8000 (Interactive Swagger docs available at /docs).

3. Frontend Setup
Bash
cd frontend
npm install
npm run dev
The React client will be available at http://localhost:5173.
