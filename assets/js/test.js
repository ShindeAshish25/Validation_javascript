function validation (){
    var a = document.getElementById("username").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("password").value;
    var d = document.getElementById("password2").value;
    var z = document.getElementById("Status");
    z.innerHTML=" ";
    
    if(a == "" || a == null || a == undefined){
        z.innerHTML="enter valid details"
       
    }else if(b=="" || b==null || b == undefined){
        z.innerHTML="enter valid details"
        

    }else if(c=="" || c==null || c == undefined){
        z.innerHTML="enter valid details"


    }else if(d=="" || d==null || d== undefined){
        z.innerHTML="enter valid details"


    }else {
        z.innerHTML="success"


    }
  
}