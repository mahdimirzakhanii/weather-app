# 🌦 Weather App

A simple and responsive weather application built with **React**, **TypeScript**, and **OpenWeather API**.  
It allows users to search for a city and view real-time weather information.

## 🌍 Live Demo

🔗 [View on Vercel](https://weather-app-mahdi-mirzakhani.vercel.app/)

## ✨ Features

- Search weather by city name
- Dark/Light theme support
- Multilingual (English & Persian)
- Access user's current **location** and automatically fetch weather data

> ⚠️ **Note:** On Google Chrome, location access does **not work in localhost**.  
> To test location-based features, either search for your city manually in the search bar, or open the app in another browser such as **Firefox**.

## 🛠️ Technologies Used

- React 19
- TypeScript
- Vite
- MUI (Material UI)
- OpenWeather API
- i18next for translations

## ⚙️ Installation

1. Clone the repository:
   git clone https://github.com/mahdimirzakhanii/weather-app.git

2. Go to the project folder:
   cd weather-app

3. Install dependencies:
   npm install

4. Add your API key in .env:
   VITE_WEATHER_API_KEY=your_api_key_here

5. Run the development server:
   npm run dev

## 📁 Project Structure

src/
┣ components/
┣ pages/
┣ context/
┣ assets/
┗ main.tsx

## 🚀 Usage

- Type the name of a city in the search bar and press **Enter** to view the weather information.
- You can also **allow browser location access** to automatically detect your current city and display its weather data.

## 👨‍💻 Author

**Mahdi Mirzakhani**
