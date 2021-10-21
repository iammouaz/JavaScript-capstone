// eslint-disable-next-line import/prefer-default-export
export const ActionCount = (Genres, ID) => {
  const GenresID = document.querySelectorAll(Genres);
  const id = document.getElementById(ID);
  id.innerHTML += `(${GenresID.length})`;
  return GenresID.length;
};
