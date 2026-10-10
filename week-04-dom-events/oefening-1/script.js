const input = document.querySelector('#input');
const addButton = document.querySelector('#add');
const list = document.querySelector('#list');

addButton.addEventListener('click', () => {
	if (input.value.trim() === '') return;

	const item = document.createElement('li');
	item.textContent = input.value;

	const removeButton = document.createElement('button');
	removeButton.textContent = 'Verwijder';
	removeButton.addEventListener('click', () => item.remove());

	item.appendChild(document.createTextNode(' '));
	item.appendChild(removeButton);
	list.appendChild(item);
	input.value = '';
});
