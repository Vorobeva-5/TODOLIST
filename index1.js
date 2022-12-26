const addButton=document.getElementById('add_button');

addButton.textContent='Выбор специалиста';
console.log(addButton);

const newListItem1=document.createElement('li');
newListItem1.className='list_item';
newListItem1.textContent="Стрижки";
console.log(newListItem1);

const newListItem2=document.createElement('li');
newListItem2.className='list_item';
newListItem2.textContent="Уход за волосами";
console.log(newListItem2);

const newListItem3=document.createElement('li');
newListItem3.className='list_item';
newListItem3.textContent="Окрашивание волос";
console.log(newListItem3);

const newListItem4=document.createElement('li');
newListItem4.className='list_item';
newListItem4.textContent="Укладки";
console.log(newListItem4);

const newListItem5=document.createElement('li');
newListItem5.className='list_item';
newListItem5.textContent="Макияж";
console.log(newListItem5);

const list=document.querySelector('ul');
list.append(newListItem1,newListItem2,newListItem3,newListItem4,newListItem5);

const newDiv=document.createElement('div');
newDiv.className='wrapper';
newDiv.innerHTML='';
console.log(newDiv);
document.body.append(newDiv); //почему создает новую страницу контейнер если я привязала его к боди

// const divUl=document.createElement('div');
// divUl.className='wrapper';
// divUl.innerHTML='обертка коробка';
// console.log(divUl);
// document.body.append(divUl);