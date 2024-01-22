export function renderViewPanels() {
   const viewPanels = document.createElement('div');
   viewPanels.classList.add('viewPanels');

   const view1 = document.createElement('img');
   view1.classList.add('view1');
   view1.src = './src/img/first-view.png';
   viewPanels.appendChild(view1);

   const view2 = document.createElement('img');
   view2.classList.add('view2');
   view2.src = './src/img/second-view.png';
   viewPanels.appendChild(view2);

   return viewPanels;
}