// async y await 
function mensaje (){
    // cuando existe una function siempre se devuelve el return 
    return new Promise((resolve, reject) => { 
        setTimeout (() => {
            if (false)
                resolve('Esto se mostrara despues de 3 segundos');
            else
                reject('Hubo un error');
        }, 3000);
    });
}

async function llamadaAsync(){
    console.log('LLamada...');
    const resultado = await mensaje();
    return resultado;
}

llamadaAsync().then(x => console.log(x)).catch (e => console.log(e));