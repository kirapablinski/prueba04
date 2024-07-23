import { eliminarAdmin, eliminarPersona, obtenerAdmin, obtenerPersona } from '@/Firebase/Promesas'
import { Admin } from '@/interface/iAdmin';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Pagina6 = () => {
    const [show,setshow] = useState(false);
    const handleClose = ()=> setshow(false); 
    const handleShow = ()=> setshow(true); 
    const [admin,setadmin] = useState<Admin[]>([])
    useEffect(()=>{
        //traer listado de persona desde promesas
        obtenerAdmin().then((admins)=>{
            setadmin(admins)
        }).catch((e)=>{
            alert("Algo ocurrio.")
        })
    },[])
    const handleEliminar = async (p: Admin) => {
        try {
            await eliminarAdmin(p);
            setadmin(admin.filter(admins => admins.key !== p.key));
            handleClose()
            alert("Usuario eliminado con éxito.");
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            alert("Ocurrió un error al eliminar el usuario.");
        }
    };
  return (
    <><div className='d-grid gap-2 col-6 mx-auto text-bg-dark p-3'style={{ 
        backgroundColor: '#f0f0f0', 
        height: '100vh', 
        width: '100vw', 
        alignItems: 'center' 
      }}>
        <h1>No importa lo que coloque aqui, el solo hecho de entrar lo ha condenado, lo encontraremos igual.</h1>
        <Table className=' text-bg-dark p-3'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Contraseña</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    admin.map((p)=>{
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.contrasena}</td>
                                
                                <td>
                                    <Link href={{pathname:'Pagina7',query:{key:p.key}}}>
                                    <Button variant='warning'><FaUserEdit />Editar</Button>
                                    </Link>
                                    
                                    <Button variant='danger' onClick={handleShow} data-bs-dismiss="modal"><MdDeleteForever />Eliminar</Button>
                                    <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Eliminacion de fiel seguidor</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>¿Esta seguro de que quiere eliminar este fiel seguidor del registro?</Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cerrar
                                    </Button>
                                    <Button variant="primary" onClick={() => handleEliminar(p)}>
                                        Eliminar
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
        <Link href={{pathname:'Pagina2'}}><Button variant='primary' type='button'>Volver</Button></Link>
        </div>
    </>
  )
}
export default Pagina6