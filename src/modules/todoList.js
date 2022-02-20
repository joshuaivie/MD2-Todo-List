import TodoList from './todoListData.js';
import { ListInnerContainer } from './elements.js';

const generateHTMLList = (list) => {
  let htmlList = '';
  list.forEach((item) => {
    htmlList += `<li class="list-item" id="item-${item.index}">
    <div class="left">
      <input type="checkbox" ${item.completed ? 'checked' : ''}/>
      <p class="description">${item.description}</p>
    </div>
    <div class="right">
      <button class="more-options">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>           
    </div>
  </li>`;
  });
  return htmlList;
};

const renderHTMLList = () => {
  ListInnerContainer.innerHTML = generateHTMLList(TodoList);
};

export default renderHTMLList;