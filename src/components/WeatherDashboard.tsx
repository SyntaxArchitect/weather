import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchWeather } from '../store/slices/weatherSlice';
import { RootState } from '../store/store';
import { Icon } from '@iconify/react';
import Loading from '../loading/loading';
import CityWeather from './CityWeather';

const WeatherDashboard: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
    const { loading, error } = useSelector((state: RootState) => state.weather);
    const cities = useSelector((state: RootState) => Object.keys(state.weather.data));
    const addCity = () => {
        if (city && !cities.includes(city)) {
            dispatch(fetchWeather(city));
            setCity('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addCity();
        }
    };

    return (
        <div className="container">

            <div className='flex items-center justify-between mb-10'>
                <h1 className="text-3xl text-slate-600 font-bold">Weather Dashboard</h1>
                {cities.length > 0 &&
                    <a href='https://github.com/codeArtCreator/weather-dashboard' target='_blank'>
                        <Icon icon="fluent-mdl2:git-hub-logo" width="30" height="30" />
                    </a>
                }
            </div>

            <div className="flex flex-col p-2 py-6 m-h-screen">
                <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky">
                    <input
                        className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                        type="text"
                        placeholder="Enter a city..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <div
                        className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full"
                        onClick={addCity}
                    >
                        <Icon icon="iconamoon:search-fill" color="#fff" width="24" height="24" />
                    </div>
                </div>
            </div>
            {loading && <Loading />}
            {error && <p>{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                {cities.map((cityName) => (
                    <CityWeather key={cityName} city={cityName} />
                ))}
            </div>
        </div>
    );
};

export default WeatherDashboard;
