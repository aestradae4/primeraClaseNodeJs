// const mensaje = new Promise ((resolve, reject) =>){}
const mensaje = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (false)
            resolve('Esto se va ejecutar despues de 3 segundos')
        else
            reject('Hubo un error')
    }, 3000);
});
mensaje
    .then(msj =>{
        console.log(msj)
    })
    .catch (error => {
        console.log(error);
    });