import React from 'react'
import { Button, Form } from 'react-bootstrap'


export const Pagina2 = () => {
   
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
        <Button variant='primary' size='lg' href='Pagina3' type='submit'>Registrar Nuevo Sacrificio</Button>
        <Button variant='primary' size='lg' href='Pagina4' type='submit'>Registro de Sacrificios</Button>
        <Button variant='primary' size='lg' href='Pagina5' type='submit'>Actualizar Registro de Sacrificos</Button>
        <Button variant='primary' size='lg' href='Pagina6' type='submit'>Eliminar un Sacrificio</Button>
        <Button variant='primary' href='Pagina1' type='submit'>Salir</Button>
    </div>
    
    </>
  )
}
export default Pagina2