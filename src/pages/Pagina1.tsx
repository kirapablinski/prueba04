import React, { useState } from 'react'
import  Form  from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Pagina1 = () => {
  const [nombre, setnombre]= useState('')
  const [apellido, setapellido]= useState('')
  const router = useRouter()
  const handleRegistrar = ()=>{
    if (nombre == "admin"&& apellido == "admin"){
      console.log("se registro con exito");
    alert("hola admin mi pana");
    router.push("/Pagina2")
    }else{
      alert("usted quien coño eh?")
    }
    
  }


  return (
    <>
    <nav><Link href='/Pagina2'>Tabla</Link></nav>
    <h1>Bienvenido Admin</h1>
    <p></p>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese un nombre' onBlur={(e)=>setnombre(e.currentTarget.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicContra">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type='text' placeholder='Ingrese un apellido' onBlur={(e)=>setapellido(e.currentTarget.value)}/>
      </Form.Group>
      <Button variant='primary' type='button' onClick={handleRegistrar}>Registrar</Button>
    </Form>
    </>
  )
}
export default Pagina1