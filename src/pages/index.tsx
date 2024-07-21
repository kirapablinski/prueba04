import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

export const index = () => {
  return (
    <>
    <div>
      <Link href={{pathname:'Pagina1'}}><Button variant='primary' type='button'>Registrar</Button></Link>
    </div>
    </>
  )
}
export default index
