import React from 'react'

const Variables = () => {

    const saludo = 'Hola Mundo'
    const imagen = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' 
    
    return (
    <div>
        <h2>Nuevo componente {saludo}</h2>
        <img src={imagen} alt='' />
    </div>
  )
}

export default Variables