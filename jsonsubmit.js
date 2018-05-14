

function submit_json(form){
/*
  let taskData={
    "Task Name"             : form.tskname.value,
    "Task Descripts"        : form.tskdes.value,
    "Task Start Date"       : form.tskstart.value,
    "Task End Date"         : form.tskend.value,
    "Task Status"           : form.tskStatus.value,
  };
*/


  // JSON.stringify(value[, replacer[, space]])


  //console.log(taskData);



let data =  localStorage.getItem("Employee");
let obj =JSON.parse(data);

// access the employees name
console.log(obj['Employee Name']);

// check for employee to add task to

if(obj['Employee Name'] === form.emplName.value){


obj['Task'].push({
  "Task Name"             : form.tskname.value,
  "Task Descripts"        : form.tskdes.value,
  "Task Start Date"       : form.tskstart.value,
  "Task End Date"         : form.tskend.value,
  "Task Status"           : form.tskStatus.value,});
}else{
  alert("employee not found");
}
  //localStorage.setItem(data,taskJson);
data = JSON.stringify(obj,0,4);


  console.log(data);

  //document.getElementById('output').innerHTML = localStorage.getItem("Data");

  localStorage.setItem("Employee",data);


}
