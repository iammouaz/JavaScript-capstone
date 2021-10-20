import { like } from './getlikes';
import { listenLikes } from './addlikes';
import { loadComments } from './commenthundler';

export const getShowById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

const createCard = (obj, counter, like) => {
  const data = `
    <div id="${obj.genres[0]}" class="col">
      <div class="card">
        <img src="${obj.image.medium}" class="card-img-top img-fluid" alt="Poster of ${obj.name}">
        <div class="card-body">
          <div class="d-flex flex-row justify-content-between align-items-center">
            <h5 class="card-title">${obj.name}</h5>
            <div id="btnLike-${counter}" class="pointer">          
              <i  class="fa-regular fa-heart" "></i>          
              <span id="like-${counter}">${like} likes</span>
            </div>
          </div>
          <button id="btn${counter}" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mainModal" onclick="populateModal(${counter}, 'AL2jTAMSIJwCzRL3ICg2');mainModal.classList.add('show')">
            Comments
          </button>
        </div>
      </div>
    </div>
    `;
  return data;
};

// eslint-disable-next-line import/no-mutable-exports
let showsArr = [];

const createAlbum = async (arr, main, api) => {
  const container = document.createElement('div');
  container.className = 'container';
  const div = document.createElement('div');
  div.className = 'row row-cols-1 row-cols-md-4 g-4';
  container.appendChild(div);
  const likeList = await like(arr.length, api);
  let counter = 0;
  arr.forEach((a) => {
    div.innerHTML += createCard(a, counter, likeList[counter], api);
    counter += 1;
  });
  main.append(container);
  listenLikes(likeList, api);
};

export const loadShows = async (type, main, api) => {
  showsArr = [];
  type.forEach((id) => {
    showsArr.push(getShowById(id));
  });
  return createAlbum(await Promise.all(showsArr), main, api);
};

window.populateModal = (id, api) => {
  const mainModal = document.getElementById('mainModal');
  showsArr[id].then((show) => {
    mainModal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mainModalLabel">${show.name}</h5>
          <button onclick="mainModal.classList.remove('show')" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${show.image.medium}" class="mx-auto d-block">
          ${show.summary}
        </div>
        <div id="comments">
          <h3 id="commentHeader">Comments </h2>
          <ul id="commentList" class="list-group-flush ps-0">
          </ul>
        </div>
        <h3>Add a new comment</h2>
        <form>
        <div id="newComment" class="d-flex flex-column form-group">
          <input id="username" type="text" class="my-2 form-control" placeholder="Your name">
          <textarea id="comment" class="my-2 form-control" placeholder="Your insights" rows="3"></textarea>
          <button id="btnComment" type="button" class="my-2 btn btn-primary" onclick="addNewComment(${id}, '${api}')">Comment</button>
        </div>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    `;
  });
  setTimeout(() => { loadComments(id); }, 100);
};