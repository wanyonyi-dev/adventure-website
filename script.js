const checkin=document.getElementById('checkin')
const checkout =document.getElementById('checkout')
const guest=document.getElementById('guest')
const form=document.getElementById('form')
const errorElement=document.getElementById('eror')
form.addEventListener('submit',(e) =>{
    let message=[]
    if(guest.value==''|| guest.value==null) {
        message.push('guest is required')
    }
    if(message.length>0){
        e.preventDefault
        errorElement.innerText=message.join('')
    }
    e.preventDefault()
})



