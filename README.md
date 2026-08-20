# 🏠 House Price Prediction

End-to-end ML web app for predicting house prices using FastAPI + React.

## 🛠️ Tech Stack
- **Frontend**: React, TypeScript, Vite
- **Backend**: FastAPI, Python 3.11
- **ML**: scikit-learn, pandas, numpy
- **Deployment**: Docker, GitHub

## 📂 Project Structure
- `backend/` – FastAPI server
- `frontend/` – React client
- `notebooks/` – Jupyter notebook for training
- `models/` – Exported `.pkl` model and locations

## 🚀 Run Locally
```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
npm run dev
