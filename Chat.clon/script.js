const messageForm = document.getElementById('message-form');
const messageInput = messageForm.querySelector('input');
const messagesContainer = document.querySelector('.messages-container');

messageForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = messageInput.value.trim();

  if (message) {
    addMessage('Me', message);
    messageInput.value = '';
  }
});

function addMessage(user, message) {
  const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  const userSpan = document.createElement('span');
  userSpan.classList.add('user');
  userSpan.innerText = user;

  const messageText = document.createElement('span');
  messageText.innerText = message;

  const timeSpan = document.createElement('span');
  timeSpan.classList.add('time');
  timeSpan.innerText = timestamp;

  messageDiv.appendChild(userSpan);
  messageDiv.appendChild(messageText);
  messageDiv.appendChild(timeSpan);

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
