import React, { useState } from 'react'
import  Form  from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { obtenerAdmin, obtenerunAdmin } from '@/Firebase/Promesas'

export const Pagina1 = () => {
  const [nombre, setnombre]= useState('')
  const [contrasena, setcontra]= useState('')
  const [error, setError]= useState<string| null>(null);
  const router = useRouter()
  const handleIngresar = async()=>{
    setError(null);
    const admin = await obtenerunAdmin(nombre);
    if (admin && admin.contrasena  == contrasena){
      console.log("se registro con exito");
      alert("Bienvenido Acolito");
      router.push("/Pagina2")
    }else{
      alert("No tienes derecho entrar en estos dominios")
    }
  }


  return (
    <>
    <div className='d-grid gap-2 col-6 mx-auto text-bg-dark p-3'style={{ 
        backgroundColor: '#f0f0f0', 
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
      
      <h1>Bienvenido Acolito de la Secta</h1>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese un nombre' onChange={(e)=>setnombre(e.currentTarget.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicContra">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type='password' placeholder='Ingrese un apellido' onChange={(e)=>setcontra(e.currentTarget.value)}/>
      </Form.Group>
      <Button variant='primary' type='button' onClick={handleIngresar}>Ingresar</Button>
      {error && <p className='error'>{error}</p>}
    </div>
    </>
  )
}
export default Pagina1