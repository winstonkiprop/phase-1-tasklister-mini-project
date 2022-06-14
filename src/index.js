document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //get all DOM elements
  const taskForm = document.getElementById('create-task-form')
  const taskDescription = document.getElementById('new-task-description')

  taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = taskDescription.value;

    appendNewTask(newTask);
    removeElement();
    e.target.reset()
  })
});

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
}

const removeElement = ()=> {
  const liElement = document.querySelector("li").innerText = X;
liElement.remove();
}
