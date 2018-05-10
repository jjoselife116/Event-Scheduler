function create_employee(form){
/*
  let employee = new Object();
  employee.EmployeeName         = form.empName.value;
  employee.TaskDescripts        = form.tskdes.value;
  employee.TaskStartDate       = form.tskstart.value;
  employee.TaskEndDate         = form.tskend.value;
  employee.TaskStatus           = form.tskStatus.value;
*/


let employee = {
  "Employee Name"     : form.empName.value,
  "Task": [{
          "Task Name"             : form.tskname.value,
          "Task Descripts"        : form.tskdes.value,
          "Task Start Date"       : form.tskstart.value,
          "Task End Date"         : form.tskend.value,
          "Task Status"           : form.tskStatus.value,
        }]
      };

//let obj = JSON.parse(employee);

/*
obj['Task'].push({
  "Task Name"             : form.tskname.value,
  "Task Descripts"        : form.tskdes.value,
  "Task Start Date"       : form.tskstart.value,
  "Task End Date"         : form.tskend.value,
  "Task Status"           : form.tskStatus.value,});
*/

  let employeeJson = JSON.stringify(employee,0,4);
  console.log(employeeJson);

  localStorage.setItem("Employee",employeeJson);


}
