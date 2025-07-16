import axios from 'axios';
//Helpers:
import { SEARCH_API } from '../helpers';

export const instance = axios.create({
    baseURL: SEARCH_API.BASE_URL,
    params: SEARCH_API.OPTIONS
});

export default instance;