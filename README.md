# 🏝️ Travel App - Front End Nanodegree Capstone

## 📑 Table of Contents
- [Overview](#-overview)
- [Core Features](#-core-features)
- [APIs Used](#-apis-used)
- [Folder Structure](#-folder-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#-getting-started)
- [Acknowledgements](#acknowledgements)


---

## 🌍 Overview  
The **Travel App** is a web application that helps users plan their trips.  
Users can enter a **destination** and **trip date**, and the app will fetch:  
✅ **Weather data** for the selected location.  
✅ **An image** of the destination.  
✅ **A countdown timer** until the trip date.  

---

## ✨ Core Features  
✔️ **User Input:** Enter trip destination & date.  
✔️ **Weather Data:** Current & future weather from Weatherbit API.  
✔️ **Location Image:** Fetch images via Pixabay API.  
✔️ **Countdown Timer:** See how soon your trip is.  
✔️ **Modern UI:** Clean & responsive design.  

---

## 🔗 APIs Used  
🔹 **[Geonames API](http://www.geonames.org/)** → Get location data.  
🔹 **[Weatherbit API](https://www.weatherbit.io/)** → Fetch weather forecasts.  
🔹 **[Pixabay API](https://pixabay.com/api/docs/)** → Get destination images.  

---

## 📂 Folder Structure  
/travel-app

  ├── /dist              # Output folder for bundled files
  
  ├── /src
  
  │   ├── /client        # Frontend code (JS, SCSS, HTML)
  
  │   ├── /server        # Server-side code (Express server)
  
  │   ├── /styles        # SCSS styles
  
  │   ├── /js            # JavaScript code for app functionality
  
  │   ├── /media         # Static assets (images, icons, etc.)
  
  │   ├── /views         # HTML files for rendering
  
  │   └── index.js       # Main entry point for frontend JS
  
  ├── .env               # Store API keys and other sensitive info
  
  ├── package.json       # Node project configuration (dependencies, scripts, etc.)
  
  ├── webpack.config.js  # Webpack configuration file
  
  ├── README.md          # This file, the project documentation
  
  └── LICENSE            # Project license
---

## Prerequisites
- Node.js version v18.20.7 (Recommended)
- Install Node.js: [Download](https://nodejs.org/)
- If using NVM, run `nvm use`


---
## 🚀 Getting Started  

Follow these steps to set up and run the **Travel App** on your local machine:  

### 📥 1. Clone the Repository  
```bash
git clone https://github.com/walaessam27/travel-app.git
cd project
```
### 📦 2. Install Dependencies
Run the following command to install all required packages:

```bash
npm install
```

### 🔑 3. Set Up Environment Variables
Create a .env file in the project root and add your API keys:

* GEONAMES_API_KEY= your_geonames_api_key
* WEATHERBIT_API_KEY= your_weatherbit_api_key
* PIXABAY_API_KEY= your_pixabay_api_key


### ⚙️ 4. Build and Run the Application
Development Mode:

```bash
npm run dev
```

Production Build:
```bash 

npm run build
```

Start the Server:

```bash 

npm start

```

### 🌍 5. Open in Browser
Go to http://localhost:8000 to use the app.

---
## Acknowledgements
* Thanks to the API providers (Geonames, Weatherbit, and Pixabay) for providing excellent services that make this app functional.
* Special thanks to Udacity for providing the materials and guidance in completing this project.
