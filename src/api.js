export const getShowById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

const createCard = (obj, likes) => {
  const card = `
    <div class="col">
      <div class="card">
        <img src="${obj.image.medium}" class="card-img-top img-fluid" alt="Poster of ${obj.name}">
        <div class="card-body">
          <div class="d-flex flex-row justify-content-between align-items-center">
            <h5 class="card-title">${obj.name}</h5>
            <span class="genres">${obj.genres}</span>
            <div id="btnLike-${likes}" class="pointer">          
              <i  class="fa-regular fa-heart" "></i>          
              <span id="like-${likes}"></span>
            </div>
          </div>
          <button id="btn${likes}" type="button" class="btn btn-success">
            Comments
          </button>
        </div>
      </div>
    </div>
    `;
  return card;
};

const createAlbum = async (arr, main) => {
  const container = document.createElement('div');
  container.className = 'container';
  const div = document.createElement('div');
  div.className = 'row row-cols-1 row-cols-md-4 g-4';
  container.appendChild(div);
  arr.forEach((e) => {
    div.innerHTML += createCard(e);
  });
  main.append(container);
};

let showResults = [];
export const loadShows = async (type, main) => {
  showResults = [];
  type.forEach((id) => {
    showResults.push(getShowById(id));
  });
  return createAlbum(await Promise.all(showResults), main);
};
