// Funciones CallBack
// Permite recibir otra funcion como parametro.
function mensaje(CallBack){
    console.log('Mensaje antes de la llamada al callback.');
    CallBack();
}
function saludo(){
    console.log('Mensaje despues de la llamada al callback')
}
mensaje(saludo);

// Otra manera de suma
function suma(num1, num2, callback){
    let resultado = num1 + num2;
    callback(resultado);
}
function Resultado(res){
    console.log(res);
}
suma(5, 8, Resultado);

//Otra forma
setTimeout(function(){
    console.log('El mensaje se mostrara despues de 4 segundos')
}, 4000);
setTimeout(() => console.log('El mensaje se mostrara despues de 3 segundos'), 3000); 