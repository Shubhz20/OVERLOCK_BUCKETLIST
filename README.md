# SmartStock AI 📦✨

SmartStock AI is a full-stack AI-powered Inventory Demand Forecasting Web Application designed to look like a modern SaaS analytics platform.

## Features Included 🚀

- **CSV Data Upload**: Dynamic schema validation and data parsing for historical sales records.
- **Time Series Processing**: Automated frequency detection, decomposition, and plotting hooks.
- **Ensemble Forecasting Engine**: Automatically trains and evaluates Moving Average, Exponential Smoothing (Holt-Winters), and Meta Prophet models and selects the best one via RMSE.
- **SKU-Level Selectors**: Analyzes demand at the exact product level.
- **Restocking Recommendations**: Statistically significant safety stock calculation.
- **Smart Insights**: Rules-based NLP engine for real time business intelligence.
- **Multi-SKU Portfolio View**: Control tower overview across all products with ABC classification.

Live Demo: https://overlock-bucketlist.vercel.app/
Demo Video: https://www.loom.com/share/7b184df315a444c6818791ee3d9c512a
Presentation (PPT): https://docs.google.com/presentation/d/1wdpD4sp2Pk8F6DHxV_89BZjLjeNiu0Bj/edit?usp=drive_link&ouid=104570748730102143012&rtpof=true&sd=true
GitHub Repository: https://github.com/Puxhkar/OVERLOCK_BUCKETLIST

---

## 🏗️ Project Architecture

```text
SmartStock-AI/
├── frontend/                 # React frontend with Vite
│   ├── src/
│   │   ├── components/       # UI Components (Dashboard, UploadSection, etc.)
│   │   ├── App.jsx           # Main Container
│   │   ├── index.css         # Minimal Glassmorphism design system
│   │   └── main.jsx          # Entry Point
│   ├── package.json
│   └── vite.config.js
└── backend/                  # FastAPI Application
    ├── main.py               # REST API Endpoints
    ├── services.py           # Core ML and Business Logic
    ├── generate_data.py      # Utility script for example CSVs
    ├── requirements.txt      # pip packages
    └── data/                 # Data caching directory
```

---

## ⚙️ Environment Variables

The backend supports the following environment variables for configuration:

| Variable         | Default                                 | Description                          |
| ---------------- | --------------------------------------- | ------------------------------------ |
| `DB_PATH`        | `data/users.db`                         | Path to the SQLite database          |
| `SECRET_KEY`     | `supersecretkey_for_demo_purposes_only` | JWT signing secret (change in prod!) |
| `DATA_PATH`      | `data/uploaded_data.csv`                | Path where uploaded CSV is stored    |
| `SKU_STATE_PATH` | `data/skus.txt`                         | Path to the persisted SKU list       |

---

## 🛠️ Setup Instructions

### 1. Start the Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn pandas numpy statsmodels scikit-learn prophet python-multipart pydantic PyJWT bcrypt

# Run the backend server
uvicorn main:app --reload --port 8000
```

_Note: The API runs on `http://localhost:8000`_

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Testing the Application

1. Navigate to the `backend` folder and run `python generate_data.py`.
2. This creates `example_data.csv` inside the `backend` directory.
3. Open the UI at `http://localhost:5173`.
4. Drag and Drop the `example_data.csv` into the dashboard to simulate a SaaS workflow.

---

## 🐛 Troubleshooting

- **CORS errors**: Ensure the backend is running on port `8000` and the frontend on port `5173`.
- **Prophet install fails**: Try `pip install neuralprophet` as an alternative, or use `conda install -c conda-forge prophet`.
- **CSV not accepted**: Ensure your file has the columns `Date`, `SKU`, `Sales_Quantity`, `Current_Stock`.
