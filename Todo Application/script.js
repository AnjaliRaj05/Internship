// function  addtolist()
// {
//     var taskname = document.getElementById('taskname');
//     var tododiv = document.getElementById('mytodo');

//     var newtodoitem = document.createElement('div');
//     var todoname = document.createElement('li');
//     todoname.innerHTML = taskname;

//     var todoname = document.createElement('i');
//     todoname.innerHTML = taskname
    
//     var deletebtn = document.createElement('i');
//     deletebtn.classList.add(fas); 
//     deletebtn.classList.add('fas','fa-trash');

//     newtodoitem.appendChild(todoname)
    
//      newtodoitem.appendChild(deletebtn)
//     tododiv.appendChild(newtodoitem)
// }

// var tododiv = document.getElementById('mytodo');
// tododiv.addEventListener('click',  deleteitem);

// function deleteitem(e){
//     const element = e.target;
//     if(element.classList[0]=='far')
//   {
//     element.parentElement.remove()
//   }
 //}
 function addtodolist() {

  let taskname = document.getElementById('taskname').value
  let mytodo = document.getElementById('mytodo')

  let newTodoItem = document.createElement('div')
  let todoName = document.createElement('li')

  let deleteBtn = document.createElement('i')
  deleteBtn.classList.add('far')
  deleteBtn.classList.add('fa-trash-alt')

  todoName.innerHTML = taskname
  newTodoItem.appendChild(todoName)
  newTodoItem.appendChild(deleteBtn)
  mytodo.appendChild(newTodoItem)


}


let mytodo = document.getElementById("mytodo")
mytodo.addEventListener('click', deletItem)

function deletItem(e) {
  const element = e.target
  if (element.classList[0] === 'far') {
      element.parentElement.remove()
  }
}