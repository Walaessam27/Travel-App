# Front End Nanodegree Program at UDACITY

Capstone - Travel App

## Table of Contents

* [Overview](#Overview)
* [Core-Features](#Core-Features)
* [APIs-Used](#APIs-Used)
* [Folder-Structure](#Folder-Structure)


## Overview
The Travel App is a user-friendly web application designed to help travelers plan their trips. Users can select a trip destination, enter the trip date, and receive weather information and an image of the location using data from external APIs. Additionally, the app displays a countdown timer showing how soon the trip is. It integrates several APIs for a rich user experience.

## Core-Features

* User Input: Users can enter a trip destination and trip date.
* Weather Information: Current weather data displayed using the Weatherbit API.
* Location Image: Image of the destination retrieved from the Pixabay API.
* Countdown Timer: A countdown displaying the time left until the trip date.
* Interactive UI: Clean and modern design with the option to extend functionality.

## APIs-Used
* Geonames API: Provides location data such as latitude, longitude, and country.
* Weatherbit API: Provides weather data (current weather and forecasts).
* Pixabay API: Retrieves images based on the location input.

## Folder-Structure
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

  ## Getting-Started  

Follow these steps to set up and run the **Travel App** on your local machine:  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/travel-app.git
cd travel-app



# 🏝️ Travel App - Front End Nanodegree Capstone

## 📑 Table of Contents
- [Overview](#-overview)
- [Core Features](#-core-features)
- [APIs Used](#-apis-used)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Development Strategy](#-development-strategy)
- [License](#-license)

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





## 🚀 Getting Started  

Follow these steps to set up and run the **Travel App** on your local machine:  

### 📥 1. Clone the Repository  
```bash
git clone https://github.com/your-username/travel-app.git
cd travel-app
```bash

### 📦 2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```bash

###🔑 3. Set Up Environment Variables
Create a .env file in the project root and add your API keys:


GEONAMES_API_KEY=your_geonames_api_key
WEATHERBIT_API_KEY=your_weatherbit_api_key
PIXABAY_API_KEY=your_pixabay_api_key


### ⚙️ 4. Build and Run the Application
Development Mode:

```bash

npm run dev
```bash 

Production Build:
```bash 

npm run build
```bash 

Start the Server:

```bash 

npm start

```bash 

### 🌍 5. Open in Browser
Go to http://localhost:3000 to use the app.