function create_employee(form){

let LocalData = localStorage.getItem(form.empName.value);


if(form.empName.value in localStorage){
  alert(form.empName.value + " already exsits. To add a task to " + form.empName.value + " use the addTask button.");
}else {
  // create a employee object to store the employee's name and taks info
  let employee = {
    "Employee Name"                 : form.empName.value,
    "Task": [{
            "Task Name"             : form.tskname.value,
            "Task Descripts"        : form.tskdes.value,
            "Task Start Date"       : form.tskstart.value,
            "Task End Date"         : form.tskend.value,
            "Task Status"           : form.tskStatus.value,
          }]
        };

  // set the local storage to the new employee array
  localStorage.setItem(form.empName.value, JSON.stringify(employee));
}






}
