export const form = document.querySelector('#task-form');
export const list = document.querySelector('#task-list');

export const theme = document.querySelector('#themeToggle')

export function renderTask({ title, description }) {
  const markup = `<li class="task-list-item">
              <button class="task-list-item-btn">Delete</button>
              <h3>${title}</h3>
              <p>${description}</p>
          </li>`;

  list.innerHTML += markup;
}
