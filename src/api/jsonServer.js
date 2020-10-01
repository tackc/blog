import axios from 'axios';
import { NGROK } from '../../.env'

export default axios.create({
  // This will change every 8 hours or whenever the server restarts
  baseURL: NGROK
});
