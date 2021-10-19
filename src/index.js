<<<<<<< Updated upstream
import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
=======
import './style.css';
import * as myModule from './api';

const main = document.getElementById('listedShow');
const Shows = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18'];

myModule.loadShows(Shows, main);
>>>>>>> Stashed changes
