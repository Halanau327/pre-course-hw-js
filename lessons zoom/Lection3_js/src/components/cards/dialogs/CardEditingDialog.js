import { updateCard } from "../../../data.js";
import { CardNetworkSelect } from "../../common/cardNetworkSelect.js";

export function cardEditingDialog (card) {
    const dialog = document.createElement('dialog');
    const cardNumberInput = document.createElement('input');
    cardNumberInput.value = card.number;
    dialog.appendChild(cardNumberInput);
  
    const networkSelect = CardNetworkSelect(card.networkType);
    dialog.appendChild(networkSelect)
  
    const button = document.createElement('button');
    button.innerText = 'SAVE';
    button.addEventListener("click", function () {
      updateCard(card.id, Number(cardNumberInput.value), networkSelect.value);
      dialog.close();
    });
    dialog.appendChild(button);
    return dialog;
  }

