let todoList = [
  {
    item : 'Buy Milk',
    dueDate : '23/07/2024',
  },
  {
    item : 'Go To College',
    dueDate : '23/07/2024s'
  }
  
]
showItem()

function addTodo(){
  let search = document.querySelector('#todoIn')

  let todoDate = document.querySelector('#dateItem')

  let todoItem = search.value;
  let dateItems = search.value
  todoList.push({item: todoItem, dueDate: dateItems});

  todoDate.value = ' '
  search.value = ''

  showItem()
}

function showItem(){
  let todoItems = document.querySelector('.todoContainer')
  let newHtml = ' '
  for (i = 0; i<=todoList.length; i++){
    // let {item, dueDate} = todoList[i]
    newHtml += `
    <div>
      <span>${todoList[i]}</span>
      
      <button onClick="todoList.splice(${i}, 1) 
      showItem();" >Delete</button>
      </div>
      `
  }
  todoItems.innerHTML = newHtml;
}
