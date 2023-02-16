const button = document.querySelector('button');
const body = document.querySelector('body');
const ol = document.querySelector('.main-ol');

button.addEventListener('click', () => {
  body.style.backgroundColor = 'red';
  ol.style.backgroundColor = 'rgba(255, 18, 219, 0.5)';
  alert('Background color changed!!!!!!!!!!!!!!');

  //Sets the page to the original state
  setTimeout(() => {
    body.style.backgroundColor = 'slateblue';
    ol.style.backgroundColor = 'rgba(255, 18, 219, 0.5)';
    alert('Press again 😁');
  }, 4000);
});
