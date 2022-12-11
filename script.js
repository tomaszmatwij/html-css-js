let todoInput; //input gdzie użytkownik wpisuje treść zadania
let errorInfo; //info o braku zadań i konieczności wpisania tekstu
let addBtn; //przycisk ADD, dodający nowe elementy do listy zadań
let ulList; //lista zadań, tagi UL
const complete = document.querySelectorAll('.conplete');
const edit = document.querySelectorAll('.edit');
const delete1 = document.querySelectorAll('.delete');
let popup; //popup
let popupInfo; //tekst w popup, jeśli doda się puste zadanie
let todoToEdit; //edytownaie todo
let popupInput; //input w popupie
let popupAddBtn; //zatwierdzenie edycji zadania
let popupCloseBtn; //przycisk anuluj w popupie

const main = () => {
	prepereDoneElements();
	prepereDoneEvents();
};
const prepereDoneElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');
	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
};
const prepereDoneEvents = () => {
	addBtn.addEventListener('click', todoTask);
	todoInput.addEventListener('keypress', addEnter);
	ulList.addEventListener('click', checkClick);
	popupCloseBtn.addEventListener('click', closePopup);
	popupAddBtn.addEventListener('click', changeTodoText);
};

const todoTask = () => {
	if (todoInput.value !== '') {
		const newTodo = document.createElement('li');
		newTodo.textContent = todoInput.value;
		ulList.append(newTodo);
		createTolsArea(newTodo);
		errorInfo.textContent = '';
		todoInput.value = '';
	} else {
		errorInfo.textContent = 'wpisz treść zadnia';
		console.log('error');
	}
};
const createTolsArea = (newTodo) => {
	newDiv = document.createElement('div');
	newDiv.classList.add('tools');
	newTodo.appendChild(newDiv);
	const newButtonComplete = document.createElement('button');
	newButtonComplete.classList.add('complete');
	newButtonComplete.innerHTML = '<i class="fas fa-check"></i>';
	const newButtonEdit = document.createElement('button');
	newButtonEdit.classList.add('edit');
	newButtonEdit.textContent = 'EDIT';
	const newButtonDelete = document.createElement('button');
	newButtonDelete.classList.add('delete');
	newButtonDelete.innerHTML = '<i class="fas fa-times"></i>';
	newDiv.append(newButtonComplete, newButtonEdit, newButtonDelete);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		editTodo(e);
	} else if (e.target.matches('.delete')) {
		deleteTodo(e);
	}
};

const editTodo = (e) => {
	todoToEdit = e.target.closest('li');
	popupInput.value = todoToEdit.firstChild.textContent;
	popup.style.display = 'flex';
};
const closePopup = () => {
	popup.style.display = 'none';
	popupInfo.textContent = '';
};
const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = 'none';
		popupInfo.textContent = '';
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść';
	}
};
const deleteTodo = (e) => {
	e.target.closest('li').remove();
	const allTodos = document.querySelectorAll('li');
	if (allTodos.length === 0) {
		errorInfo.textContent = 'brak zadań na liście';
	}
};

const addEnter = (e) => {
	if (e.key === 'Enter') {
		todoTask();
	}
};
// window.addEventListener('keypress', (e) => {
// 	if (e.key === 'Enter') {
// 		console.log('enter');
// 	}
// });

// const panelFunction = () => {
// 	complete.forEach(
// 		(element = () => {
// 			element.addEventListener('click', () => {});
// 		})
// 	);
// 	edit.forEach(
// 		(element = () => {
// 			element.addEventListener('click', () => {});
// 		})
// 	);
// 	delete1.forEach(
// 		(element = () => {
// 			element.addEventListener('click', () => {
// 				this.element.closest('li').remove();
// 			});
// 		})
// 	);
// };

document.addEventListener('DOMContentLoaded', main);
