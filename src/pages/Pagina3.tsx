import React, { useState } from 'react'
import Form from 'react-bootstrap/form'
import  Button  from 'react-bootstrap/Button'
import { Persona } from '@/interface/iPersona'
import { registrarPersona } from '@/Firebase/Promesas'
import { useRouter } from 'next/router'
import Link from 'next/link'


const initialState:Persona = {
    apellido:"",
    correo:"",
    edad:0,
    fechadenacimiento:"",
    nombre:"",
    rut:""
}

export const Pagina3 = () => {
    const router = useRouter()
    const [persona, setPersona] = useState<Persona>(initialState)

    const handlePersona = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }
    const registrar = ()=>{
      registrarPersona(persona).then(()=>{
        alert("Sacrificio añadido con exito")
        router.push("/Pagina2")
      }).catch((e)=>{
        console.log(e)
      })
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
       <Form.Group>
        <Form.Label>Nombre del sacrificio</Form.Label>
        <Form.Control type='text' placeholder='Ingrese nombre: ' name='nombre' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Apellido del sacrificio</Form.Label>
        <Form.Control type='text' placeholder='Ingrese apellido: ' name='apellido' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Correo del sacrificio, nunca se sabe si te llegara el correo</Form.Label>
        <Form.Control type='email' placeholder='Ingrese correo' name='correo' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Edad del sacrificio</Form.Label>
        <Form.Control type='number' placeholder='ingrese edad: ' name='edad' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Fecha de nacimiento del sacrificio</Form.Label>
        <Form.Control type='date' placeholder='Ingrese su fecha de nacimiento' name='fechanacimiento' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>RUT del sacrificio</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su RUT' name='rut' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
        <Button type='button' variant='success' onClick={registrar}>Registrar</Button>
        <Link href={{pathname:'Pagina2'}}><Button type='button' variant='primary'>Volver</Button> </Link>
    </div>
    </>
  )
}
export default Pagina3