const HorrorDiv = document.querySelectorAll('#Horror');
const ActionDiv = document.querySelectorAll('#Action');
const DramaDiv = document.querySelectorAll('#Drama');

const HideAction = () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < DramaDiv.length; i++) {
    DramaDiv[i].classList.add('hide');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < HorrorDiv.length; i++) {
    HorrorDiv[i].classList.add('hide');
  }
};

const HideDrama = () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ActionDiv.length; i++) {
    ActionDiv[i].classList.add('hide');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < HorrorDiv.length; i++) {
    HorrorDiv[i].classList.add('hide');
  }
};

const HideHorror = () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ActionDiv.length; i++) {
    ActionDiv[i].classList.add('hide');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < DramaDiv.length; i++) {
    DramaDiv[i].classList.add('hide');
  }
};

export { HideAction, HideHorror, HideDrama };