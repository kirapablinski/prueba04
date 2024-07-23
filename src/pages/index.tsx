import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

export const index = () => {
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
      <Link href={{pathname:'Pagina1'}}><Button variant='primary' type='button'>Entre cuando quiera mi chico, aqui no pasa nada</Button></Link>
    </div>
    </>
  )
}
export default index
