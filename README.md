
# Weather Dashboard

The Weather Dashboard is a React-based web application that allows users to check the current weather conditions for a specific city. It uses Redux for state management and the OpenWeatherMap API for weather data retrieval.

## Features

- City Weather Lookup: Users can enter the name of a city to fetch and display current weather data.
- Unit Conversion: Users can toggle between Celsius and Fahrenheit units to view temperature.
- Detailed Weather Information: The application provides detailed weather information, including temperature, description, humidity, feels-like temperature, and more.
- Error Handling: The application handles errors gracefully and displays error messages when weather data retrieval fails.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- ViteJS: A fast, modern, and lightweight build tool for React applications.
- Tailwind CSS: A utility-first CSS framework for quickly building custom designs.
- TypeScript: A statically typed superset of JavaScript that enhances code quality and developer tooling.
- Redux Toolkit: A library for efficient Redux development, simplifying state management.
- Custom CSS: Custom CSS is employed for additional design elements and fine-tuning.
- GitHub: Version control and project hosting on GitHub.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.


#### To run the project locally, follow these steps:

- Clone the repository: git clone https://github.com/codeArtCreator/weather-dashboard
- Navigate to the project directory: cd weather-dashboard
- Install dependencies: npm install
- Obtain an API key from OpenWeatherMap (https://openweathermap.org/api) and replace YOUR_API_KEY in the .env file with your API key
- Start the development server: npm run dev

## Usage

- Enter the name of a city in the input field and click the search button or press "Enter" to fetch weather data for that city.
- The weather data for the selected city, including temperature, description, humidity, and more, will be displayed.
- You can also toggle between Celsius and Fahrenheit units using the dropdown menu.

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.