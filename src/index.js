import './style.css';
import * as myModule from './api';
import { HideAction, HideHorror, HideDrama } from './GenresShow';

const ShowTV = document.getElementById('ShowTV');
const Shows = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18'];
const DramaSH = document.getElementById('showDrama');
const HorrorSH = document.getElementById('horrorShow');
const ActiveSh = document.getElementById('actionShow');

myModule.loadShows(Shows, ShowTV);

ActiveSh.addEventListener('click', HideAction);
DramaSH.addEventListener('click', HideDrama);
HorrorSH.addEventListener('click', HideHorror);
