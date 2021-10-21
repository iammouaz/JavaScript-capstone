import './style.css';
import * as myModule from './api';
import { HideAction, HideHorror, HideDrama } from './GenresShow';
import { loadAllComments } from './commenthundler';
import * as Count from './Showscounter';

const apiKEY = ['AL2jTAMSIJwCzRL3ICg2'];
const ShowTV = document.getElementById('ShowTV');
const Shows = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18', '105', '31', '1824', '73', '38764', '7019'];
const DramaSH = document.getElementById('showDrama');
const HorrorSH = document.getElementById('horrorShow');
const ActiveSh = document.getElementById('actionShow');

myModule.loadShows(Shows, ShowTV);
loadAllComments(apiKEY, Shows.length);
ActiveSh.addEventListener('click', HideAction);
DramaSH.addEventListener('click', HideDrama);
HorrorSH.addEventListener('click', HideHorror);

const modal = `
<div class="modal fade" id="mainModal" tabindex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mainModalLabel">Show name</h5>
        <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div class="modal-body">
        Image and Summary
      </div>
      <div id="comments">
        <h2>Comments</h2>
        <ul id="commentList" class="list-group-flush ps-0">
        </ul>
      </div>
      <div id="newComment" class="d-flex flex-column">
        <h2>Add a comment</h2>
        <input id="username" type="text" class="my-2 form-control" placeholder="Your name">
        <textarea id="comment" class="my-2 form-control" placeholder="Your insights" rows="3"></textarea>
        <button id="btnComment" class="my-2 btn btn-secondary">Comment</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

ShowTV.insertAdjacentHTML('beforeend', modal);

setTimeout(() => { Count.ActionCount('#Action', 'actionShow'); }, 2000);
setTimeout(() => { Count.ActionCount('#Horror', 'horrorShow'); }, 2000);
setTimeout(() => { Count.ActionCount('#Drama', 'showDrama'); }, 2000);
