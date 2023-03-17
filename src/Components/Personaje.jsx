import React, { useEffect, useState } from 'react'

const Personaje = () => {
    const [personaje, setPersonaje] = useState([{}])
    const [cambiarPersonaje, setCambiarPersonaje] = useState(0)

    const url = 'https://thronesapi.com/api/v2/Characters'

    useEffect(() => {
      const fetchData = async () => {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setPersonaje(data)
      } 
      fetchData()
    }, [cambiarPersonaje])
   
    console.log(personaje)

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '500px', justifyContent: 'space-around'}}>
        <h2>{personaje[cambiarPersonaje].fullName}</h2>
        <h3>Family: {personaje[cambiarPersonaje].family}</h3>
        <img src={personaje[cambiarPersonaje].imageUrl} alt="" width={300}/>
        <div>
          <p>{personaje[cambiarPersonaje].title}</p>
        </div>
        <button onClick={() => setCambiarPersonaje(Math.floor(Math.random()*52))}>Cambiar de personaje de GoT</button>
    </div>
  )
}

export default Personaje