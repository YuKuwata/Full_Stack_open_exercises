import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

export const findAllCountries = async () => {
    return axios.get(`${baseUrl}/all`);
}

export const findSingleCountry = async (country) => {
    return axios.get(`${baseUrl}/name/${country}`);
}

export const queryWeatherByCity = async (city) => {
    return axios.get(`https://samples.openweathermap.org/data/2.5/find?q=${city}`);
}