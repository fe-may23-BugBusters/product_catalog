// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { Product } from '../types/product';

const URL_BASE = 'https://product-catalog-be-6qo2.onrender.com';
const ENDPOINT = '/products';

export async function fetchData(params = {}): Promise<Product[]> {
  try {
    const url = new URL(ENDPOINT, URL_BASE);

    url.search = new URLSearchParams(params).toString();

    const response = await axios.get(url.toString());

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data.devices;
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
    throw error;
  }
}
