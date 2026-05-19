let todoArr = [
      {
        todoItem: "CSS",
        todoId: "e12-231-231wd-ew112e",
      },
      {
        todoItem: "JS & ES6",
        todoId: "we12-231-231wd-ew112e",
      },
      {
        todoItem:  "HTML",
        todoId: "qwe12-231-231wd-ew112e",
      },

];  

// localStorage.setItem('todoArr', JSON.stringify('todoArr')

const todoItemControl= document.getElementById('todoItem')

const addTodo=document.getElementById('AddTodo')

const updateTodo=document.getElementById('updateTodo');


function template(arr){
   let result =' '; 
    
   arr.forEach(ele=>{ 
         result +=`<li  id="${ele.todoId}" class="list-group-item d-flex justify-content-between">
                                    <strong>${ele.todoItem}</strong>
                                    <div>  
                                    <i onclick='onEdit(this)'  class="fa-solid fa-pen-to-square text-primary"></i>
                                      <i  class="fa-solid fa-trash text-danger"></i>
                                    </div>  
                                 </li>`
   })
todoContainer.innerHTML = result;

}


template(todoArr)


function ontodoSubmit(ele){
  // console.log(ele);
  ele.preventDefault()
 
  let todo_obj = {
  todoItem : todoItemControl.value,
  todoId : Date.now().toString()
  }


  todoArr.push(todo_obj);

  let li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between';

  li.id = todo_obj.todoId;
  li.innerHTML=`<strong>${todo_obj.todoItem}</strong>
  <div> <i type = 'button' onclick = 'onEdit(this)' class
  ='fa-solid fa-pen-to-square text-primary fa-2x'></i>
  <i type = 'button' onclick = 'onRemove(this)' class
  ='fa-solid fa-trash text-danger fa-2x'></i>
  `

  todoContainer.append(li);

  todoForm.reset();

}


function onEdit(ele){
  let EDIT_ID=ele.closest("li").id
  let EDIT_OBJ=todoArr.find(t=>t.todoId === EDIT_ID) ;


  addTodo.classList.add('d-none');
      updateTodo.classList.remove('d-none')
}
     
todoForm.addEventListener('submit',ontodoSubmit);
