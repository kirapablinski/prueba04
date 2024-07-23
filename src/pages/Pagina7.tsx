import { actualizarAdmin, actualizarPersona, obtenerPerson, obtenerunAdmin } from '@/Firebase/Promesas'
import { Admin } from '@/interface/iAdmin'
import { Persona } from '@/interface/iPersona'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const initialState:Admin = {
    nombre:"",
    contrasena:"",
    
}

export const Pagina7 = () => {
    const [admin, setAdmin] = useState<Admin>(initialState)

    const handlePersona = (name:string,value:string)=>{
        setAdmin({...admin,[name]:value})
    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            obtenerunAdmin(key).then((p)=>{
                if(p!=undefined){
                    setAdmin(p)
                }
                else{
                    //volver a la tabla
                }
            })
        }
        
        console.log(key)
    },[router.query.key])
    const modificar = ()=>{
        actualizarAdmin(admin).then(()=>{
            alert("Se actualiza con exito")
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
        <h1>Edita lo que quieras, joven acolito, cualquiera se equivoca</h1>
       <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese nuevo nombre: ' value={admin.nombre} name='nombre' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Contrasena</Form.Label>
        <Form.Control type='text' placeholder='Ingrese nueva contraseña: ' value={admin.contrasena} name='apellido' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group>  
        <Link href={{pathname:'Pagina6'}}><Button type='button' variant='success' onClick={modificar}>Registrar</Button> </Link>
    </Form>
    </>
  )
}
export default Pagina7