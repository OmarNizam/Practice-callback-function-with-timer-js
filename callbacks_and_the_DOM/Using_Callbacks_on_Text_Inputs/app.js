const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('click', event => {
  event.target.className = 'highlight';
});
