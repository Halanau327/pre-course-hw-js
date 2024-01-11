import { createCard } from "../../../data.js";
import { CardNetworkSelect } from "../../common/cardNetworkSelect.js";

export function CardCreationDialog() {
    const createCardDialogElement = document.createElement('dialog');
    const input = document.createElement('input');
    createCardDialogElement.appendChild(input);
  
    const networkSelect = CardNetworkSelect();
    createCardDialogElement.appendChild(networkSelect)

    const button = document.createElement('button');
    button.innerText = 'SAVE';
    button.addEventListener("click", function () {
      if (input.value.length !== 12) {
        alert('BAD CARD LENGTH');
      } else {
        createCard(Number(input.value));
      };
    });
  
    createCardDialogElement.appendChild(button);
    return createCardDialogElement
  }
  