import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { RootState } from '../store/store';
import { removeCity } from '../store/slices/weatherSlice';

const CityWeather: React.FC<{ city: string }> = ({ city }) => {
    const dispatch = useDispatch();
    const weather = useSelector((state: RootState) => state.weather.data[city]);

    const handleRemoveCity = () => {
        dispatch(removeCity(city));
    };

    return (
        <div className='bg-white p-5 rounded-2xl relative'>
            <button
                onClick={handleRemoveCity}
                className="absolute top-3 right-3"
            >
                <Icon icon="bi:x-circle-fill" color="#dc2626" width="24" height="24" />
            </button>
            <h2 className="text-3xl my-4 text-gray-500">Weather in {city}</h2>
            {weather && (
                <>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Conditions: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity} %</p>
                    <p>Wind: {weather.wind.speed} kph</p>
                    <p>Pressure: {weather.main.pressure} hpa</p>
                </>
            )}
        </div>
    );
};

export default CityWeather;
