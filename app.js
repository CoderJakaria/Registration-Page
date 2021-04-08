// reference //
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");
// end //


// add event //
form.addEventListener('submit',(event)=>{

   event.preventDefault();
   validate();

})


const sendData=(userNameVal,sRate,count)=>{
     if (sRate===count) {
          alert("Registration Successfull!");
          swal("Welcome! "+userNameVal,"Registration Successfull!", "success");
          // location.href=`musicPlayer/index.html?username=${userNameVal}`
     }
}


// For final validation //
const successMsg=(userNameVal)=>{

     let formCon = document.getElementsByClassName("form-control");
     let count=formCon.length-1;
     for(let i=0;i<formCon.length;i++){
          if(formCon[i].className==="form-control success"){
               let sRate = 0+i;
               console.log(sRate)
               sendData(userNameVal,sRate,count);
          }else{
               return false;
          }
     }

}



// define the validate function 
const validate=()=>{


      const userNameVal = userName.value.trim();
      const emailVal = email.value.trim();
      const phoneVal = phone.value.trim();
      const passwordVal =password.value.trim();
      const cPasswordVal = cPassword.value.trim();

     //  more email validate
     const isEmail = (emailVal)=>{
          var atSymble = emailVal.indexOf("@");
          if (atSymble<1) return false;


          var dot = emailVal.lastIndexOf(".");
          if (dot<=atSymble+3) return false;


          if (dot===emailVal.length-1) return false;

          return true
     }
     // end //


     //  validate username
     if (userNameVal==="") {
          setErrorMsg(userName,"Username cannot be blank");
     }else if (userNameVal.length<=2) {
          setErrorMsg(userName,"Username min 3 character"); 
     }else{
          setSuccessMsg(userName)
     }
     // end //

     //  validate email
     if (emailVal==="") {
         setErrorMsg(email,"Email cannot be blank");
     }else if (!isEmail(emailVal)) {
          setErrorMsg(email,"Not a valid email"); 
     }else{
         setSuccessMsg(email)
     }

      //  validate phone
     if (phoneVal==="") {
          setErrorMsg(phone,"Phone cannot be blank");
          }else if (phoneVal.length!=11) {
               setErrorMsg(phone,"Not a valid mobile number"); 
          }else{
          setSuccessMsg(phone)
      }

            //  validate password
     if (passwordVal==="") {
          setErrorMsg(password,"Password cannot be blank");
          }else if (passwordVal.length<=5) {
               setErrorMsg(password,"Minimum 6 Character"); 
          }else{
          setSuccessMsg(password)
      }

                  //  validate cpassword
     if (cPasswordVal==="") {
          setErrorMsg(cPassword,"Confirm password cannot be blank");
          }else if ( passwordVal!== cPasswordVal) {
               setErrorMsg(cPassword,"Password are not matching"); 
          }else{
          setSuccessMsg(cPassword)
          
      }

   successMsg(userNameVal)

}


// for define setErrorMsg function //
function setErrorMsg(input, errorMsg){

    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className="form-control error"
    small.innerText = errorMsg;
     
}
// end //


// for define setSuccessMsg function
function setSuccessMsg(input){

     const formControl = input.parentElement;
     formControl.className="form-control success"

}