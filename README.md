# 🛡️ MalScan - Malware Detection Web App

## 📚 Description

MalScan is a machine learning-based web application for detecting malicious URLs. The application provides a user-friendly interface where users can enter URLs to check if they are safe or potentially malicious.

## 🚀 Features

- **URL Malware Detection**: Analyzes URLs using machine learning to determine if they are malicious
- **User Authentication**: Secure login and registration system
- **Dashboard**: View your scan history and statistics
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Analysis**: Get immediate results after submitting a URL

## 🏰️ Tech Stack

- **Frontend:** 
  - React.js (with Vite as build tool)
  - React Router for navigation
  - React Hook Form for form handling
  - CSS for styling

- **Backend:** 
  - Django REST Framework
  - SQLite database
  - Joblib for ML model serialization

- **Machine Learning:** 
  - Scikit-learn
  - Pandas for data manipulation

## 💂️ Project Structure

```
MalScan/
│── src/                  # React frontend source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   └── styles/           # CSS stylesheets
│
│── public/               # Static assets
│
│── backend/              # Django backend
│   └── malware_detection/
│       ├── url_detection/    # URL detection module
│       ├── Users/            # User authentication
│       └── malware_detection/ # Django project settings
│
│── package.json          # Frontend dependencies
│── vite.config.js        # Vite configuration
│── README.md             # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- pip (Python package manager)

### Backend Setup

```bash
# Navigate to the backend directory
cd backend/malware_detection

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install django djangorestframework django-cors-headers joblib pandas scikit-learn

# Run migrations
python manage.py migrate

# Start the Django server
python manage.py runserver 8001
```

### Frontend Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📊 Machine Learning Model

### 🔗 URL Detection

The URL detection model uses a machine learning classifier to determine if a URL is malicious or safe. The model extracts various features from the URL, including:

- URL length
- Number of digits in the URL
- Number of special characters
- Number of subdomains
- HTTPS presence
- Domain length
- Path length
- Presence of login/payment keywords
- Number of subdirectories

These features are then fed into a trained model to make predictions.

## 🛠️ Usage

1. **Register/Login**: Create an account or log in to access the application
2. **Enter a URL**: Navigate to the URL detection page and enter the URL you want to analyze
3. **View Results**: The system will analyze the URL and display whether it's safe or malicious
4. **Dashboard**: View your scan history and statistics on the dashboard

## 🚀 Deployment

### Local Development
- Backend: Run on port 8001 (`python manage.py runserver 8001`)
- Frontend: Run on default Vite port (`npm run dev`)

### Production
For production deployment:
1. Build the React frontend: `npm run build`
2. Configure Django for production settings
3. Deploy using a production web server like Nginx or Apache

## 📝 License

This project is licensed under the MIT License.

## 🙌 Acknowledgments

- React.js and Django communities for their excellent documentation
- Machine learning libraries and tools that made this project possible

## 📞 Contact

For any issues or improvements, feel free to raise an issue or contact me at themanaskumar1@gmail.com.
