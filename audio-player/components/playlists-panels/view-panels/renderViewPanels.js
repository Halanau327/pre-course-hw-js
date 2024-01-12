export function renderViewPanels() {
   const viewPanels = document.createElement('div');

   const view1 = document.createElement('img');
   view1.src = '/audio-player/src/img/first-view.png';
   viewPanels.appendChild(view1);

   const view2 = document.createElement('img');
   view2.src = '/audio-player/src/img/second-view.png';
   viewPanels.appendChild(view2);

   return viewPanels;
}