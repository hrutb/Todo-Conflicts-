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


const todoForm = document.getElementById('todoForm');

const todoContainer = document.getElementById('todoContainer');
const todoItemControl = document.getElementById('todoItem');
const addTodo = document.getElementById('addTodo');
const updateTodo = document.getElementById('updateTodo');

// let todoArr = [] ;

// todoArr = JSON.parse(localStorage.getItem('todoArr'));

function templating (arr){
  let result ='';

  arr.forEach(ele=>{ 
         result +=`<li  id="${ele.todoId}" class="list-group-item d-flex justify-content-between">
                                    <strong>${ele.todoItem}</strong>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
                                      <i class="fa-solid fa-trash fa-2x text-danger"></i>
                                     </div> 
                                 </li>`
   })
todoContainer.innerHTML = result;

}

templating(todoArr);




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

     
todoForm.addEventListener('submit',ontodoSubmit)
