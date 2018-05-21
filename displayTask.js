
$(document).ready(function(){

let typeofKey;
let empArry = [];
let employee;

      //cols of the employee names
      for (var i = 0; i < localStorage.length; i++){

        empArry.push(localStorage.key(i))
      }
    //  console.log(empArry.toString());
    // loop through the local storage and pull the data
for(let j = 0; j < empArry.length; j++){

  employee = JSON.parse(localStorage.getItem(empArry[j]));
  // If employee has any task
  if("Task" in employee){
    // while employee has task in his array
  for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
      //console.log(employee['Employee Name']);
      //console.log(employee.Task[taskIndex]["Task Name"])
      //

      if($("#wholeTable #emp0-1").text() == employee['Employee Name']){
        $('#1-1').html(employee.Task[taskIndex]["Task Name"]);

      }
      console.log($("#wholeTable #emp0-1").text());

}



    }

}










//$('#4-2').html(employee.Task[0]["Task Name"]);



});








      //console.log(key, typeofKey);
