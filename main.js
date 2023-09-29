document.addEventListener('DOMContentLoaded', function () {
  var textarea = document.getElementById('txt');
  console.log(textarea);
});
async function verifySend() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let txt = document.getElementById("txt").value;

   let file = document.getElementById("file").files[0];
   console.log(txt);
   
   if (name == "" || email == "" || txt == "" || !file) {
     document.getElementById("span").style.display="inline-block";
     return;
   }
   document.getElementById("span").display="none";
   const formData = new FormData();
   formData.append('name', name);
   formData.append('email', email);
   formData.append('txt', txt);
   formData.append('file', file);
 
   try {
     const response = await fetch("http://localhost:3000/contact", {
       method: "POST",
       body: formData,
     });
 
     if (response.ok) {
       console.log("Upload successful.");
       // Handle the response from the server if needed
       document.getElementById("btn").value="Sended!";
       setTimeout(()=>
       {
        document.getElementById("btn").value="Send";
       },2000)
         } else {
       console.error("Upload failed.");
     }
   } catch (error) {
     console.error("Error:", error);
   }
 }
 