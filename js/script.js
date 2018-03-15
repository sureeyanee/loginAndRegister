var rgt = [];
function register (){

  let name = document.getElementById('name').value;
  // console.log(name);
  let last = document.getElementById('last').value;
  // console.log(last);
  let user = document.getElementById('user').value;
  let mail = document.getElementById('mail').value;
  let pass = document.getElementById('pass').value;
  let repast = document.getElementById('repast').value;
  let gender = document.getElementById('gender').value;
  let data ={
    firstname : name,
    lastname : last,
    username : user,
    email : mail,
    password : pass,
    Repeatpassword : repast,
    gender : gender,
  };
  rgt.push(data);
  console.log(rgt);

  document.getElementById('name').value=null;
  document.getElementById('last').value=null;
  document.getElementById('user').value=null;
  document.getElementById('mail').value=null;
  document.getElementById('pass').value=null;
  document.getElementById('repast').value=null;
  document.getElementById('gender').value=null;
}

function  showregister() {
  var html = '<table border="1" width="100%">';
      html+= '<tr><td>firstname</td><td>lastname</td><td>Username</td><td>e-mail</td><td>password</td><td>Repeatpassword</td><td>gender</td></tr>';
      for (var i = 0; i < rgt.length; i++){
      html += '<tr><td>'+rgt[i].firstname+'</td><td>'+rgt[i].lastname+'</td><td>'
      +rgt[i].username+'</td><td>'+rgt[i].email+'</td><td>'+rgt[i].password+'</td><td>'
      +rgt[i].Repeatpassword+'</td><td>'+rgt[i].gender+'</td></tr>'
    }
    html+='</table>';
     document.getElementById('show-table').innerHTML="";
     document.getElementById('show-table').insertAdjacentHTML("beforeend",html)
    }

    function test() {
      var input,filter,Ul,tr,td;
      input = document.getElementById('myinput');
      filter = input.value.toUpperCase();
      Ul = document.getElementById('show-table');
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++)
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
       tr[i].style.display = "";
     } else {
       tr[i].style.display = "none";
     }
   }
 }

 function goLogin(){
     document.getElementById('registerForm').style.display = "none";
     document.getElementById('loginForm').style.display = "block";
    
    
 }

 function goRegister() {
    document.getElementById('registerForm').style.display = "block";
     document.getElementById('loginForm').style.display = "none";
 }

 function login() {
   var userL = document.getElementById('userL').value;
   var passL = document.getElementById('passL').value;
    for (i = 0; i <= rgt.length; i++) { 
        for (const prop in rgt[i]) { 
            if (prop == "username") {
                if (rgt[i][prop] == userL) {
                   var checkNum = i 
                    var checkUser = 1;  
                }else{
                    var checkUser = 0;
                }
            }
        }
    }
     if (checkNum == undefined) { 
         var checkPass = 0;
        
    } else {
        if (passL == rgt[checkNum].password) { 
            
            var checkPass = 1;
        } else {
            var checkPass = 0;
             
        }
    }

    if(checkUser == 1){ 
        alert("Email true")
        if(checkPass == 1) {
            alert("check On true")
        }else{
            alert("Password incorrect") 
        }
    }else{
        alert("Email incorrect")
    }

    
    
    

 }