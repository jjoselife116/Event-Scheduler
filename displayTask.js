
$(document).ready(function(){

let typeofKey;
let empArry = [];
let employee;

      //cols of the employee names
      for (var i = 0; i < localStorage.length; i++){

        empArry.push(localStorage.key(i))



      }
    //  console.log(empArry.toString());
for(let j = 0; j < empArry.length; j++){
  employee = JSON.parse(localStorage.getItem(empArry[j]));
  for(let k = 0; k < employee.Task.length; k++){
      console.log(employee['Employee Name']);
      console.log(employee.Task[k]["Task Name"])
    }
}










//$('#4-2').html(employee.Task[0]["Task Name"]);



});








      //console.log(key, typeofKey);
