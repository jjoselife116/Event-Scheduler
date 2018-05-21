$(document).ready(function(){
  let typeofKey;
  let empArry = [];
  let employee;
  let myTable = document.getElementById('wholeTable');
  let colFill = false;
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
         //if($("#wholeTable #emp0-1").text() == employee['Employee Name']){
          // $('.dragscroll td').slice(1,6).css("background", "yellow").text(employee.Task[taskIndex]["Task Name"]);
         //}
         for(let k = 1; k < myTable.rows[0].cells.length; k++) {
           console.log(employee['Employee Name'] + ": " + employee.Task[taskIndex]["Task Start Date"] + "->" + employee.Task[taskIndex]["Task End Date"]);
           if(myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task Start Date"]) {
             colFill = true;
           }
           if(colFill == true) {
             myTable.rows[j+1].cells[k].innerHTML = '<span style="background-color:yellow">' + employee.Task[taskIndex]["Task Name"] + '</span>';
           }
           if(myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task End Date"]) {
             colFill = false;
           }
         }
       }
     }
   }


});
