document.getElementById('add-show-btn').addEventListener('click', () => {
  const inputField = document.getElementById('show-input');
  const newShow = inputField.value.trim();

  if (newShow) {
    const listItem = `<li class="list-group-item">${newShow}</li>`;
    document.getElementById('show-list').insertAdjacentHTML('beforeend', listItem);
    inputField.value = ''; // Clear the input field
  } else {
    alert('Please enter a show name!');
  }
});