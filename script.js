function acesso (form){

form.nome.value = form.nome.value.toLowerCase()
form.senha.value = form.senha.value.toLowerCase()

if ( form.nome.value == "maria" && form.senha.value == 1234 ||
form.nome.value == "cleber" && form.senha.value == 12345 ||
form.nome.value == "pedro" && form.senha.value == 123456 )
{location="./indx2.html"
}

else {
    form.nome.value =""
    form.senha.value =""
    alert("dados incorretos")
}

}