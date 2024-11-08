import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

export const findAllCountries = async () => {
    return await axios.get(`${baseUrl}/all`);
}