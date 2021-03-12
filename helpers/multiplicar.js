

const fs = require('fs');


let salida='';

const crearArchivo = async (base=1,listar=false, hasta=10) =>{

    try {
    
    for(let i=1;i<=hasta;i++){
        salida += `${base} x ${i}= ${base*i} \n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
    const nombreArchivo= await salida;
    if(listar==true){
      console.clear();
    console.log('=======================')
    console.log ('    tabla del 5!!')
    console.log('=====================')

    
    return  `${nombreArchivo} \n el archivo tabla-${base}.txt ha sido`;
    // // console.log(`Archivo de tabla de ${base} creada con exito`)
    }

} catch (error) {
     throw error ;  
}

    
  };


  module.exports={

    crearArchivo
  }