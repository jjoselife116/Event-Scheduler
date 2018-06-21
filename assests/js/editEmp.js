function edit_Emp(form){
    // pull employee to remove from dropdown list
    let employeeToEdit = localStorage.getItem($('#editEmpDropDown').val());


    employeeToEdit = JSON.parse(employeeToEdit);
    $("#empColor").attr("value", employeeToEdit["Employee Color"]);

    employeeToEdit["Employee Color"] = form.empColor.value;

    if(form.editEmpTag.value != null && form.editEmpTag.value != ""){

      employeeToEdit["Employee Id"] = form.editEmpTag.value;
    }

    // add task to the end of the task array for chosen employee
    // create a employee object to store the employee's name and taks info
    if(form.tskstart !=null && form.tskstart.value != ""  && form.tskend != null && form.tskend.value != ""){

      for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
      if(employeeToEdit.Task[taskIndex]["Task Name"] == $('#editTaskDropDown').val()){
        employeeToEdit.Task[taskIndex]["Task Start Date"] = form.tskstart.value;
        employeeToEdit.Task[taskIndex]["Task End Date"] = form.tskend.value;

        break;
      }
    }
  }


  for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
  if(employeeToEdit.Task[taskIndex]["Task Name"] == $('#editTaskDropDown').val()){
    employeeToEdit.Task[taskIndex]["Task Active"] = $('#editTskActive').val();
    break;
  }
    }


    if(form.tskname.value != ""){
      for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
      if(employeeToEdit.Task[taskIndex]["Task Name"] == $('#editTaskDropDown').val()){
        employeeToEdit.Task[taskIndex]["Task Name"] = form.tskname.value;
        break;
      }
        }

      }


    if(form.editEmpName != null && form.editEmpName.value != ""){

        localStorage.removeItem(employeeToEdit["Employee Name"]);
       employeeToEdit = {
        "Employee Name"                 : form.editEmpName.value,
        "Employee Id"                   : employeeToEdit['Employee Id'],
        "Employee Color"                : employeeToEdit['Employee Color'],
        "Task" : employeeToEdit.Task,

            };


              localStorage.setItem(form.editEmpName.value, JSON.stringify(employeeToEdit));
      //localStorage.setItem(employeeToEdit["Employee Name"], JSON.stringify(employeeToEdit));
    }
if( form.editEmpName.value == ""){
  localStorage.setItem($('#editEmpDropDown').val(), JSON.stringify(employeeToEdit));
}


}
