// function sendMail(){
//   let parms = {
//     name : document.getElementById("name").value,
//     email : document.getElementById("email").value,
//     subject : document.getElementById("subject").value,
//     message : document.getElementById("message").value,
//   }

//   emailjs.send("service_rm0edzc","template_t22bywe",parms).then(alert("Email Sent!!.."))
// }


function sendMail()
{ 


    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var message=document.getElementById("message").value
    if(name =="" || message=="")
      {
        alert("the field is required");
      }
      else
      {
        let params = {
          name : document.getElementById("name").value,
          email: document.getElementById("email").value,
          subject : document.getElementById("subject").value,
          message : document.getElementById("message").value,
      }
      emailjs.send("service_rm0edzc","template_t22bywe",params).then(
        
     function (response) {
         alert('Thank you your message has been sent');
        },
        function (err) {
          alert('Failed to send.');
        },
      );
      }
    }













