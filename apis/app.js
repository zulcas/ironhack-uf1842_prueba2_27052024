//Variables aplicación
let buttonGetInfo = document.querySelector('button');
let userName = document.querySelector('#username');
let isError = false;


//Evento click
buttonGetInfo.addEventListener('click',getNewUser);


//Funciones
async function getNewUser(){
    //1) eliminamos errores preexistentes DOM
    removeErrorMessage();
    //2) Hacemos petición GET API
    const response = await fetch(`https://api.github.com/users/${userName.value}`);
    console.log(response);
    //3) Convertimos JSON a JS
    const data = await response.json()
    console.log(data);
    //4) Comprobamos si existe usuario (he usado respuesta genérica, sin especificar response.status, donde encontrariamos el 403 cuando sobrepasas llamadas de la api vs 404 cuando usuario no existe)
    if(response.ok==false && !isError){
        displayErrorMessage('Error: El usuario no existe.')
        isError = true;
    }else{
        //Mostramos nueva fila
        displayNewUser(data);
    }
        
}

function displayErrorMessage(textMessage){
    
    const message = document.createElement('p');
    message.textContent = textMessage;
    message.className = 'error';
    document.querySelector('#username-box').appendChild(message);
}
function removeErrorMessage(){
    console.log('hola');
    if(Boolean(document.querySelector('.error'))){
        document.querySelector('.error').remove()
        isError = false;
    }
}

function displayNewUser(data){
    document.querySelector('#fullName').textContent = data.name;
    document.querySelector('#bio').textContent = data.bio;
    document.querySelector('#profilePicture').src = data.avatar_url;
    document.querySelector('#homeUrl').innerHTML = `<a href=${data.html_url}>${data.html_url}</a>`;
}



