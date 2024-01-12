const selectArr = [
    { text: 'Genre' },
    { text: 'SecondOption' },
    { text: 'ThirdOption' }
];


function renderSelectBox(options) {
    const selectBox = document.createElement('select');
    selectBox.classList.add('selectBox');
    
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.classList.add('optionElement');
        optionElement.text = option.text;
        selectBox.appendChild(optionElement);
    });
    return selectBox;
};

export const renderSelect = renderSelectBox(selectArr);

