

function submit_json(form){

console.log(form.emplName.value);

// pull from the local storage
//let employee = JSON.parse(localStorage.getItem(form.emplName.value);
let employee = localStorage.getItem(form.emplName.value);

  employee = JSON.parse(employee);


// add task to the end of the task array for chosen employee
employee.Task.push({
  "Task Name"             : form.tskname.value,
  "Task Descripts"        : form.tskdes.value,
  "Task Start Date"       : form.tskstart.value,
  "Task End Date"         : form.tskend.value,
  "Task Status"           : form.tskStatus.value,
});

// overwrite the employee JSON in the local storage with the newly updated task array
localStorage.setItem(form.emplName.value, JSON.stringify(employee));





console.log(employee);

}
