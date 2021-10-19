import { like } from './getlikes';
import { listenLikes } from './addlikes';

export const getShowById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

const createCard = (obj, counter, like, api) => {
  const data = `
    <div class="col">
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
          <button id="btn${counter}" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mainModal" onclick="populateModal(${counter}, '${api}')">
            Comments
          </button>
        </div>
      </div>
    </div>
    `;
  return data;
};

const createAlbum = async (arr, main, api) => {
  const container = document.createElement('div');
  container.className = 'container';
  const div = document.createElement('div');
  div.className = 'row row-cols-1 row-cols-md-4 g-4';
  container.appendChild(div);
  const likeList = await like(arr.length, api);
  let counter = 0;
  arr.forEach((e) => {
    div.innerHTML += createCard(e, counter, likeList[counter], api);
    counter += 1;
  });
  main.append(container);
  listenLikes(likeList, api);
};

let showResults = [];
export const loadShows = async (type, main) => {
  showResults = [];
  type.forEach((id) => {
    showResults.push(getShowById(id));
  });
  return createAlbum(await Promise.all(showResults), main);
};
