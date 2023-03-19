const patronNombres=/^[a-zA-Z]+\D$/g
const patronCelular=/3\d{9}$/gi
const patronFechas=/^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})$/
const patronEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gim



registrarse.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.id=='registrar'){
        if(nombre.value.match(patronNombres)!=null && apellido.value.match(patronNombres)!=null && telefono.value.match(patronCelular)!=null && fecha_nac.value.match(patronFechas)!=null && email.value.match(patronEmail)!=null && pass1.value==pass2.value ){
            alert('Registro Exitoso')
            nombre.value=''
            apellido.value=''
            telefono.value=''
            fecha_nac.value=''
            email.value=''
            pass1.value=''
            pass2.value=''
        }else {
                              
            alert('Verificar datos')               }
                                
     
    }
    if(e.target.id=='cancelar'){
        console.log('cancelado')
        nombre.value=''
        apellido.value
        telefono.value=''
        fecha_nac.value=''
        email.value=''
    }

})