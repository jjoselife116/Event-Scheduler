function removeTaskOnTime() {

var now = new Date();

  for (var i = 0; i < localStorage.length; i++){
      empArry.push(localStorage.key(i));
  }
  // loop through the local storage and pull the data
  for(let j = 0; j < empArry.length; j++){
    employee = JSON.parse(localStorage.getItem(empArry[j]));
    // If employee has any task
  if("Task" in employee){
    for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
      if (now.getDate() === employee.Task[taskIndex]["Task End Date"]) {
          let indexToRmove = taskIndex;
          let removed = employee.Task.splice(indexToRemove, 1);
          localStorage.setItem(employee.Task[taskIndex]["Employee Name"], JSON.stringify(employee));
        }
      }
    }
  }
}
