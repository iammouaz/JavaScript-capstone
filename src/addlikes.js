import { api } from './getlikes';

const AddNewLike = (ItemN) => {
  fetch(`${api}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${ItemN}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text());
};

const listenLikes = (LikeItems, api) => {
  let btnLike;
  let likeText;
  LikeItems.forEach((element, i) => {
    btnLike = document.getElementById(`btnLike-${i}`);
    btnLike.addEventListener('click', () => {
      AddNewLike(i, api);
      likeText = document.getElementById(`like-${i}`);
      likeText.removeChild(likeText.firstChild);
      likeText.appendChild(document.createTextNode(`${LikeItems[i] + 1} likes`));
    });
  });
};

export { AddNewLike, listenLikes };