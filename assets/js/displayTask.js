$(document).ready(function(){
  let typeofKey;
  let empArry = [];
  let employee;
  let myTable = document.getElementById('wholeTable');
  let colFill = false;
  let color = null;
  let firstK = 0;
  let lastK =0;
  let mid = 0;
  let taskID = 0;
        //cols of the employee names
  for (var i = 0; i < localStorage.length; i++){
      empArry.push(localStorage.key(i));
  }
  // loop through the local storage and pull the data
  for(let j = 0; j < empArry.length; j++){
    employee = JSON.parse(localStorage.getItem(empArry[j]));
    // If employee has any task
    if("Task" in employee){
      // while employee has task in his array
      for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
         for(let k = 1; k < myTable.rows[0].cells.length; k++) {
           if(myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task Start Date"]) {
             firstK = k;
             colFill = true;

           }
           if(colFill == true) {

            myTable.rows[j+1].cells[k].setAttribute("class", "TaskID-"+taskID);


            myTable.rows[j+1].cells[k].innerHTML += '<div id="taskID-' + taskID + '" style="background-color:' + employee["Employee Color"] + '; border-style: hidden hidden solid hidden; border-width: 3px;border-color: white ">' + employee.Task[taskIndex]["Task Name"] + '</br></div>';

           }

           if(myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task End Date"]) {
             colFill = false;
             lastK = k;
            }
           mid = Math.floor((lastK + firstK )/ 2);
             taskID++;
         }




       }
       taskID=1;
     }
   }
});
