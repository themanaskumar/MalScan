# 🛡️ Malware Detection Web App

## 📚 Description

A machine-learning-based web application for detecting malicious URLs and PE (portable executable) files. Users can upload files or enter URLs to check for malware.

## 🚀 Features

- Detects malicious **URLs** and **PE files** using ML models
- Provides a **confidence score** for predictions
- Web-based interface built with **React**
- Backend powered by **Django**
- Uses **scikit-learn / TensorFlow** models
- API support for automated scanning

## 🏰️ Tech Stack

- **Frontend:** ReactJS
- **Backend:** Django
- **Machine Learning:** Python, NumPy, Pandas, Scikit-Learn, Tensorflow, LightGBM,
- **Database (if any):** MySQL

## 💂️ Project Structure

```
Malware-Detection-Web-App/
│── frontend/         # React frontend
│── backend/          # Flask/FastAPI backend
│── models/           # Machine learning models
│── dataset/          # Malware dataset
│── README.md         # Project documentation
│── requirements.txt  # Python dependencies
│── package.json      # Frontend dependencies
```

## 🔧 Installation & Setup

### Backend Setup

```bash
cd backend/malware_detection
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python manage.py runserver 8001  # Run the backend
```

### Frontend Setup

```bash
npm install
npm run dev  # Run the frontend
```

## 📊 Datasets

### 🔗 URL Detection

- **Source:** Kaggle
- **Format:** CSV
- **Link:** https://www.kaggle.com/datasets/samahsadiq/benign-and-malicious-urls

### 📂 PE File Detection

- **Source:**
- **Format:**
- **Link:**

## 🤖 Machine Learning Model

### 🔗 URL Detection

- **Algorithm Used:** Random Forest
- **Training Data:** Contains 6,32,508 URLs out of which 50% are malicious and 50% are benign
- **Evaluation Metrics:** Accuracy, Precision, Recall, F1-score

### 📂 PE File Detection

- **Algorithm Used:** LightGBM
- **Training Data:**
- **Evaluation Metrics:**

## 🛠️ Usage

1. Enter a **URL** to check for malware.
2. Upload a **PE file** to scan for malicious behavior.
3. Click **Test**, and the ML model will classify it as safe or malicious.
4. View the **confidence score** of the prediction.

## 🚀 Deployment

- **Local:** Run backend and frontend separately as described above.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Acknowledgments

- Kaggle
- [Libraries & Tools Used]

## 📞 Contact

For any issues or improvements, feel free to raise an issue or contact me at themanaskumar1@gmail.com.
