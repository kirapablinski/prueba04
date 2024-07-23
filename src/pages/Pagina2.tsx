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
        <h2>Bienvenidas Acolitos, al registro de victimas del Dios del miedo y el hambre</h2>
        <h2>Puede registrar a sus victimas aqui, o actualizar en caso de error</h2>
        <h2>Recuerde, solo el Dios del miedo y el hambre conoce nuestro final</h2>
        
        <Button variant='primary' size='lg' href='Pagina3' type='submit'>Registrar Nuevo Sacrificio</Button>
        <Button variant='primary' size='lg' href='Pagina8' type='submit'>Registrar Nuevo Acolito</Button>
        <Button variant='primary' size='lg' href='Pagina4' type='submit'>Registro de Sacrificios</Button>
        <Button variant='primary' size='lg' href='Pagina6' type='submit'>Registro de Acolito</Button>
        <Button variant='primary' href='Pagina1' type='submit'>Salir</Button>
    </div>
    
    </>
  )
}
export default Pagina2