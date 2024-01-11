export function CardNetworkSelect(selectedValue) {
    const cardNetworkType = document.createElement('select');
  
    const cardNetworkTypeOption1 = document.createElement('option');
    
    cardNetworkTypeOption1.innerText = 'mastercard';
    if (selectedValue === 'mastercard') {
      cardNetworkTypeOption1.selected = true;
    }
  
    const cardNetworkTypeOption2 = document.createElement('option');
    cardNetworkTypeOption2.innerText = 'visa';
    if (selectedValue === 'visa') {
      cardNetworkTypeOption2.selected = true;
    }
  
    cardNetworkType.appendChild(cardNetworkTypeOption1);
    cardNetworkType.appendChild(cardNetworkTypeOption2);
  
    return cardNetworkType;
  }
  
  
  