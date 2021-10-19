import './style.css';
import * as myModule from './api';

const ShowTV = document.getElementById('ShowTV');
const Shows = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18'];

const apiKEY = [
  'AL2jTAMSIJwCzRL3ICg2'];

myModule.loadShows(Shows, ShowTV, apiKEY[0]);
