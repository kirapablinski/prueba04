import React, { useState } from 'react'
import Form from 'react-bootstrap/form'
import  Button  from 'react-bootstrap/Button'
import { Persona } from '@/interface/iPersona'
import { registrarAdmin, registrarPersona } from '@/Firebase/Promesas'
import { useRouter } from 'next/router'
import { Admin } from '@/interface/iAdmin'
import Link from 'next/link'


const initialState:Admin = {
    
    nombre:"",
    contrasena:""
}

export const Pagina8 = () => {
    const router = useRouter()
    const [admin, setAdmin] = useState<Admin>(initialState)

    const handlePersona = (name:string,value:string)=>{
        setAdmin({...admin,[name]:value})
    }
    const registrar = ()=>{
      registrarAdmin(admin).then(()=>{
        alert("Acolito añadido con exito")
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
        <Form.Label>Nombre del nuevo Acolito</Form.Label>
        <Form.Control type='text' placeholder='Ingrese nombre: ' name='nombre' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Contraseña del nuevo Acolito</Form.Label>
        <Form.Control type='text' placeholder='Ingrese apellido: ' name='contrasena' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
        <Button type='button' variant='success' onClick={registrar}>Registrar</Button>
        <Link href={{pathname:'Pagina2'}}><Button type='button' variant='primary'>Volver</Button> </Link>
    </div>
    </>
  )
}
export default Pagina8