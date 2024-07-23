import { actualizarPersona, obtenerPerson } from '@/Firebase/Promesas'
import { Persona } from '@/interface/iPersona'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const initialState:Persona = {
    apellido:"",
    correo:"",
    edad:0,
    fechadenacimiento:"",
    nombre:"",
    rut:""
}

export const Pagina5 = () => {
    const [persona, setPersona] = useState<Persona>(initialState)

    const handlePersona = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            obtenerPerson(key).then((p)=>{
                if(p!=undefined){
                    setPersona(p)
                }
                else{
                    //volver a la tabla
                }
            })
        }
        
        console.log(key)
    },[router.query.key])
    const modificar = ()=>{
        actualizarPersona(persona).then(()=>{
            alert("Se actualiza con exito")
            router.push("/Pagina4")
        })
    }
  return (
    <>
    <Form className='d-grid gap-2 col-6 mx-auto text-bg-dark p-3'style={{ 
        backgroundColor: '#f0f0f0', 
        height: '100vh', 
        width: '100vw', 
        alignItems: 'center' 
      }}>
        <h1>Edita lo que quieras, ya tenemos tu alma</h1>
       <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su nuevo nombre: ' value={persona.nombre} name='nombre' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su nuevo apellido: ' value={persona.apellido} name='apellido' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Correo</Form.Label>
        <Form.Control type='email' placeholder='Ingrese su nuevo correo' value={persona.correo} name='correo'  onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control type='number' placeholder='ingrese su nueva edad: ' value={persona.edad} name='edad'  onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type='date' placeholder='Ingrese su nueva fecha de nacimiento' value={persona.fechadenacimiento} name='fechanacimiento' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>RUT</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su nuevo RUT' name='rut' value={persona.rut} onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
        <Button type='button' variant='success' onClick={modificar}>Registrar</Button>
    </Form>
    </>
  )
}
export default Pagina5