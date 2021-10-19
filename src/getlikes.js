const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AL2jTAMSIJwCzRL3ICg2';

async function PutLikes(total) {
  return fetch(`${api}/likes/`)
    .then((response) => response.json())
    .then((likes) => likes).catch(() => {
      const Arrays = [];
      for (let i = 0; i < total; i += 1) {
        Arrays.push(0);
      }
      return Arrays;
    });
}

async function like(total, api) {
  const likeList = await PutLikes(total, api);
  const ListLike = [];
  let index = -1;
  for (let i = 0; i < total; i += 1) {
    index = likeList.findIndex((item) => item.item_id === `item${i}`);
    if (index !== -1) {
      ListLike.push(likeList[index].likes);
    } else {
      ListLike.push(0);
    }
  }
  return ListLike;
}

export { api, like };