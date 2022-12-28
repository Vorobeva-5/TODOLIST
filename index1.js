// const divWrapper=document.createElement('div');
// divWrapper.className='wrapper';
// divWrapper.innerHTML='';
// console.log(divWrapper);
// document.body.appendChild(divWrapper);// к какому узлу нужно добавить,перепривязать? если он вложен в боди...

const newHeader=document.createElement('header');
newHeader.className='header';
newHeader.textContent='BEAUTY&LAB клуб красоты';
console.log(newHeader);
document.body.appendChild(newHeader); //??как вложить его в DIV Wrapper,  а не в боди

const addButton1=document.createElement('button');
addButton1.className='btn';   // какой метод прописывает ID?
addButton1.textContent='Записаться онлайн';
console.log(addButton1);
document.body.append(addButton1);//??как вложить его в DIV Wrapper

const newSection=document.createElement('section');
newSection.className='container';
newSection.textContent='';
console.log(newSection);
document.body.append(newSection); //? здесь как вложить под DIV Wrapper?

const divContent=document.createElement('div');
divContent.className='content';
divContent.innerHTML='';
console.log(divContent);
document.body.append(divContent);//понимаю что он не в боди,а вложен в newSection =section, просто выдает ошибку в Консоль при другой привязке

const divUl=document.createElement('div');
divUl.className='';
divUl.textContent='Услуги клуба';
console.log(divUl);
document.body.append(divUl);

const newListItem1=document.createElement('li'); //здесь скорее всего массивом можно задать...но пока мне попроще так
newListItem1.className='list_item';
newListItem1.textContent="Стрижки";

const newListItem2=document.createElement('li');
newListItem2.className='list_item';
newListItem2.textContent="Уход за волосами";

const newListItem3=document.createElement('li');
newListItem3.className='list_item';
newListItem3.textContent="Окрашивание волос";

const newListItem4=document.createElement('li');
newListItem4.className='list_item';
newListItem4.textContent="Укладки";

const newListItem5=document.createElement('li');
newListItem5.className='list_item';
newListItem5.textContent="Макияж";

const list=document.createElement('ul');
list.append(newListItem1,newListItem2,newListItem3,newListItem4,newListItem5);
console.log(list);
document.body.append(list); //как вложить в div UL

const addButton2=document.createElement('button');
addButton2.className='btn';
addButton2.textContent='Выбор специалиста';
console.log(addButton2);
document.body.append(addButton2);//??как вложить его в div class content

const newfooter=document.createElement('footer');
newfooter.className='footer';
newfooter.textContent='Следите за нами Вконтакте и Youtube';
console.log(newfooter);
document.body.appendChild(newfooter); //??как вложить его в DIV Wrapper,  а не в боди