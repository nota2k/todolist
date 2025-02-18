const list = [{name: 'faire la vaisselle', status:'done'}, {name: 'passer l\'aspirateur', status: 'to-do'}, {name: 'développer une app', status: 'to-do'}];
const listItems = document.querySelector('#list-items');

list.map((listItem) => {
    const item = document.createElement('li');
    item.textContent = listItem.name;
    item.classList.add(listItem.status);
    listItems.appendChild(item);
});