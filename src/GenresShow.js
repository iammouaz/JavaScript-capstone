const HideAction = () => {
  const DramaDiv = document.querySelectorAll('#Drama');
  const HorrorDiv = document.querySelectorAll('#Horror');
  const ActionDiv = document.querySelectorAll('#Action');
  for (let i = 0; i < DramaDiv.length; i += 1) {
    DramaDiv[i].classList.add('hide');
    DramaDiv[i].classList.remove('show');
  }
  for (let i = 0; i < HorrorDiv.length; i += 1) {
    HorrorDiv[i].classList.add('hide');
    HorrorDiv[i].classList.remove('show');
  }
  for (let i = 0; i < ActionDiv.length; i += 1) {
    ActionDiv[i].classList.add('show');
  }
};

const HideDrama = () => {
  const DramaDiv = document.querySelectorAll('#Drama');
  const HorrorDiv = document.querySelectorAll('#Horror');
  const ActionDiv = document.querySelectorAll('#Action');
  for (let i = 0; i < ActionDiv.length; i += 1) {
    ActionDiv[i].classList.add('hide');
    ActionDiv[i].classList.remove('show');
  }
  for (let i = 0; i < HorrorDiv.length; i += 1) {
    HorrorDiv[i].classList.add('hide');
    HorrorDiv[i].classList.remove('show');
  }
  for (let i = 0; i < DramaDiv.length; i += 1) {
    DramaDiv[i].classList.add('show');
  }
};

const HideHorror = () => {
  const DramaDiv = document.querySelectorAll('#Drama');
  const HorrorDiv = document.querySelectorAll('#Horror');
  const ActionDiv = document.querySelectorAll('#Action');
  for (let i = 0; i < ActionDiv.length; i += 1) {
    ActionDiv[i].classList.add('hide');
    ActionDiv[i].classList.remove('show');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < DramaDiv.length; i += 1) {
    DramaDiv[i].classList.add('hide');
    DramaDiv[i].classList.remove('show');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < HorrorDiv.length; i += 1) {
    HorrorDiv[i].classList.add('show');
  }
};

export { HideAction, HideHorror, HideDrama };