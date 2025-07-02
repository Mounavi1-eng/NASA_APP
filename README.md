# 🚀 NASA API Explorer

A full-stack web application built using **React** and **Node.js + Express**, integrated with [NASA’s Open APIs](https://api.nasa.gov/). This app allows users to explore two main datasets from NASA in a simple and intuitive way:

- 🖼️ **Astronomy Picture of the Day (APOD)**
- ☄️ **Near Earth Objects (NEO)**

---

## ✨ Features

- **APOD Page:**  
  Shows NASA’s astronomy picture of the day along with its title, description, and relevance.

- **NEO Page:**  
  Displays near-earth objects for a specific date, including their name, size, velocity, approach date, and whether they are potentially hazardous.

- **Modern Tech Stack:**  
  - Frontend: React + React Router + MUI  
  - Backend: Node.js + Express  
  - NASA APIs: APOD & NEO Feed

---

## 🛠️ Getting Started (Run Locally)

### 1. Clone the Repository

```bash
git clone https://github.com/Mounavi1-eng/NASA_APP.git
cd NASA_APP
```

### 2. Install Dependencies

#### 🔧 Backend

```bash
cd backend
npm install
```

#### 💻 Frontend

```bash
cd ../frontend
npm install
```

### 3. Set Up Environment Variable

In the `backend` folder, create a `.env` file and paste your NASA API key:

```env
NASA_API_KEY=your_nasa_api_key_here
```

Get your free NASA API key here: https://api.nasa.gov/

---

### 4. Run the Application

#### Start the Backend

```bash
cd backend
node server.js
```

Runs at: `http://localhost:5000`

#### Start the Frontend

```bash
cd ../frontend
npm start
```

Runs at: `http://localhost:3000`

---

## 📁 Folder Structure

```
nasa-api-explorer/
├── backend/                  # Node.js + Express backend
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── APODPage.js
│   │   │   ├── NEOPage.js
│   │   │   ├── AboutPage.js
│   │   │   └── HomePage.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   └── reportWebVitals.js
│   └── package.json
└── README.md

```

---

## 🚀 Deployment

You can deploy:
- Frontend on **Vercel**, **Netlify**, or **GitHub Pages**
- Backend on **Render**, **Railway**, or **Heroku**

---

