function validateForm(){
    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let subject = document.getElementById("subject").value.trim()
    let message = document.getElementById("message").value.trim()

    if(name==''){
        document.getElementById('nameError').innerHTML="name required"
        return false
    }
    if(email==''){
        document.getElementById('emailError').innerHTML="email required"
    }
    if(subject==''){
        document.getElementById('subjectError').innerHTML="subject required"
    }
    if(message==''){
        document.getElementById('messageError').innerHTML="message required"
    }
}