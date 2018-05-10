
function submitform(){
/*  alert("Sending from data as Json");
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action,true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  var j = {
    "tskame": $('#tskname'),
    "tskDis": "",
    "tskstart": "",
    "tskend": "",
    "tskStatus": "",
  };
  alert("fromData");
  var formData = JSON.stringify($("#tskForm").serializeArray());
  */


  $(document).ready(function(){
    $('#btn').click(function(e){
      var jsonData ={};

      var formData = $("#modal-content animate").serializeArray();

      $.each(formData, function(){
        if(jsonData[this.name]){
          if(!jsonData[this.name].push){
            jsonData[this.name] = [jsonData[this.name]];
          }
          jsonData[this.name].push(this.value || '');
        }else{
          jsonData[this.name] = this.value || '';
        }

      });
      console.log(jsonData);
      $.ajax(
        {
          url :"action.php",
          type: "post",
          data: jsonData,
        });
        e.preventDefault();
    });
  });




}
