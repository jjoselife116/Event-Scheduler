
  let taskData = JSON.parse(localStorage.getItem("Bill nye"));
  //console.log(taskData.Task[0]);
  let task = taskData.Task[0]['Task Name'];




   var typeofKey = null;
   let i =0;
   let employee;


$(document).ready(function(){


  for (var key in localStorage) {
    typeofKey = (typeof localStorage[key]);
    if(typeofKey == 'string' || typeofKey instanceof String ){
    employee = JSON.parse(localStorage.getItem(key));
    console.log(employee.Task[0]);

}
}
     $("#2-0").append("<span style='display:block; background-color:red; width: 435px;'>Deb Stop eating bagels</span>");

     $("#4-3").append("<span style='display:block; background-color:blue; width: 435px;'>hhhhhhh </span>");
     $("#4-3 > span").html(task);



      i++;
      //console.log(key, typeofKey);





});
