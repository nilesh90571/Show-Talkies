function doLogin(){
    var userid=document.getElementById("loginEmain").value;  // Value come from the Text Box
    var pwd=document.getElementById("loginPasswd").value;
    // var obj1=new User(userid, pwd, verify);
    // console.log(obj1);
    var message = "";
    
     firebase
    .auth()
    .signInWithEmailAndPassword(userid, pwd)
    .then(data => {
      if(userid != ""){
        if(userid === "mitrcnishant@gmail.com"){
            localStorage.currentUser = userid;
            window.location.href = "admin.html";
        }
        else{
            localStorage.currentUser = userid;
            window.location.href = "movies.html";
        }
      }
      else if(userid == ""){
        alert("Please provide sufficient details...")
      }
      else  {
            message = "Error Occurred during login";
            document.getElementById('error').innerText=message;
            
      }
      })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert("Invalid Email and Password");
    });
}

function doReset(){
    document.getElementById("userid").value = "";
    document.getElementById("password").value = "";
}

function register() {
    //.log(document.getElementById("login").classList);
  
    // var user = document.querySelector("#ruserId").value;
    // var cpass = document.querySelector("#cPassword").value;
    // var pass = document.querySelector("#rpassword").value;

    let fname=document.getElementById("fname").value;
    let phone=document.getElementById("phn").value;
    let pass=document.getElementById("pass").value;
    let cpass=document.getElementById("cpass").value;
    let email=document.getElementById("email").value;
    //var userid=email.split("@")[0];
    if(fname == "" || phone == "" || email=="" || pass=="" ||cpass==""){
            alert("Please provide sufficient details");
    }
    else {
    if(pass == cpass ) {
      // var obj = { password: pass, totalMarks: 0, correct: 0, wrong: 0 };
      // var promise = firebase
      //   .database()
      //   .ref("/users/" + user)
      //   .set(obj);
      // promise
      //   .then(data => alert("Register successfully Now login"))
      //   .catch(error => {
      //     alert("someThing went Wrong");
      //     console.log(error);
      //   });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(data => {
          alert("Successfully registerd Now login");
          location.href='index.html';
        })
        // .catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // ...
        //   console.log(errorMessage);
        //   console.log(errorCode);
        // });
    }
    else{
      alert("PASSWORD DOES NOT MATCH");
    }
  }
}
// function register(){
//     let fname=document.getElementById("fname").value;
//     let lname=document.getElementById("lname").value;
//     let pass=document.getElementById("pass").value;
//     let cpass=document.getElementById("cpass").value;
//     let email=document.getElementById("email").value;
//     var userid=email.split("@")[0];
//     console.log(userids);


//     console.log(fname);
//     var obj=new User(fname,lname,pass,cpass,email);
//     //firebase.database.ref(./);
//     //console.log(firebase);
//     console.log(obj);
//     if(pass == cpass){
//         var pr=firebase.database().ref(/users/+userid ).set(obj);
//         pr.then(res=>console.log("done")).catch(err=>console.log(err));
//    }
//    }

//REGISER COMMENTED.....

//    async function register(){    
//     let fname=document.getElementById("fname").value;
//     let lname=document.getElementById("lname").value;
//     let pass=document.getElementById("pass").value;
//     let cpass=document.getElementById("cpass").value;
//     let email=document.getElementById("email").value;
//     var userid=email.split("@")[0];
//     console.log(userid);
//     // var user=document.getElementById("ruser").value;
//     // var email=document.getElementById("remail").value;
//     // var pass=document.getElementById("rpass").value;
//     // var cpass=document.getElementById("rcpass").value;
//     if(fname == "" || lname == "" || email=="" || pass=="" ||cpass==""){
//               alert("you dont have provide sufficient details");
//     }
//     else{
//         let yes=false;
//         let students=await firebase.database().ref("/student");
//         console.log(students);
//         console.log("hiiii");
//         await students.once("value",snapshot=>
//         {
//             var students=snapshot.val();
//             for(key in students){         
//                if(key==user){                
//                   yes=true;
//                 }
//            }
//         })       
//         // console.log(yes)
//         if(!yes){
//             if(pass===cpass){
//                var stu=new Student(fname,pass,email);
//                var promise= firebase.database().ref(/student/+user).set(stu);
//                await promise.then(data=>alert("Registration Done.Do login to use website ")).catch(err=>console.log("error is",err));
//                showHide();
//                document.getElementById("upsign").style="display:none";            
//             }    
//             else 
//                 alert("password does not matched");  
//         } 
//         else{
//                 alert("user name is already taken");
//         }
//     }
// }
function doSignup(){
    console.log("i'm in signup");
    var pr=fetch("http://127.0.0.1:5501/contents/signup.html");
    pr.then(response=>response.text().then(data=>document.getElementById("main").innerHTML=data).catch(err=>console.log(err))).catch(err=>console.log(err));
}

function doForgot(){
    console.log("i'm in forgot");
    var pr=fetch("http://127.0.0.1:5501/contents/forgot.html");
    pr.then(response=>response.text().then(data=>document.getElementById("main").innerHTML=data).catch(err=>console.log(err))).catch(err=>console.log(err));
}
// Ayush ne kra h
function doSendEmail(){
// forget password ke baad jo email bhejni h vo yahi bhejega...
    var auth = firebase.auth(); 
    console.log(auth);
    var newfog_email = document.getElementById("fog_email").value;
    console.log(newfog_email);
    if (newfog_email!= ""){
      auth.sendPasswordResetEmail(newfog_email).then(function(){
        console.log("aaa");
        window.alert("Email has been sent");
        location.href="index.html";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("Error");
      });
    console.log(newfog_email);
    }
  else{
  window.alert("ENTER EMAIL FIRST");
  }
}

// *******forget khatam******

// window.onload = OpenFullScreen;
// var elem = document.getElementById("bodypart");
// function OpenFullScreen(){
//   alert("Full Screen Mode");
//   if (elem.requestFullscreen()){
//     elem.requestFullscreen();
//   }
//   else if (elem.mozRequestFullScreen) { /* Firefox */
//     elem.mozRequestFullScreen();
//   } 
//   else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//     elem.webkitRequestFullscreen();
//   } 
//   else if (elem.msRequestFullscreen) { /* IE/Edge */
//     elem.msRequestFullscreen();
//   }
// }


// window.onload = maxWindow;
// function maxWindow(){
//   alert("Full Screen Mode");
//   window.moveTo(0, 0);
//   if (document.all){
//     top.window.resizeTo(screen.availWidth, screen.availHeight);
//     console.log("in if condition");
//   }

//   else if (document.layers || document.getElementById) {
//     console.log("in else if condition");
//       if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
//         console.log("in N if condition");
//           top.window.outerHeight = screen.availHeight;
//           top.window.outerWidth = screen.availWidth;
//       }
//   }
  
// }