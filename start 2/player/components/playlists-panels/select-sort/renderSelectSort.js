import { sortTracks } from "../../../data/data.js";

export function renderSelectSort() {
  const selectSortContainer = document.createElement('div');
  selectSortContainer.classList.add('selectSortContainer');

  const selectSortWrapper = document.createElement('div');
  selectSortWrapper.classList.add('selectSortWrapper');

  const sortName = document.createElement('p');
  sortName.classList.add('sortName');
  sortName.innerText = 'Sort By:'
  selectSortWrapper.appendChild(sortName);

  const sortSelect = document.createElement('select');
  sortSelect.classList.add('sortSelect');

  const option1 = document.createElement('option');
  option1.classList.add('option1');
  option1.innerText = 'Name';

  sortSelect.appendChild(option1);

  const option2 = document.createElement('option');
  option2.classList.add('option2');
  option2.innerText = 'Duration';
  sortSelect.appendChild(option2);

  sortSelect.addEventListener('change', () => {
    const selectedOption = sortSelect.value;
    sortTracks(selectedOption);
  });

  selectSortWrapper.appendChild(sortSelect);

  selectSortContainer.appendChild(selectSortWrapper);

  return selectSortContainer;
}