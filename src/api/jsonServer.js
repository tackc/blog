import axios from 'axios';
import { NGROK_URL } from '../../.env'

export default axios.create({
  // This will change every 8 hours or whenever the server restarts
  baseURL: NGROK_URL
});
