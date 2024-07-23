import { eliminarPersona, obtenerPersona } from '@/Firebase/Promesas'
import { Persona } from '@/interface/iPersona'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Pagina4 = () => {
    const [show,setshow] = useState(false);
    const handleClose = ()=> setshow(false); 
    const handleShow = ()=> setshow(true); 
    const [personas,setpersonas] = useState<Persona[]>([])
    useEffect(()=>{
        //traer listado de persona desde promesas
        obtenerPersona().then((personas)=>{
            setpersonas(personas)
        }).catch((e)=>{
            alert("Algo ocurrio.")
        })
    },[])
    const handleEliminar = async (p: Persona) => {
        try {
            await eliminarPersona(p);
            setpersonas(personas.filter(persona => persona.key !== p.key));
            handleClose()
            alert("Persona eliminada con éxito.");
        } catch (error) {
            console.error("Error al eliminar persona:", error);
            alert("Ocurrió un error al eliminar la persona.");
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
                    <th>Apellido</th>
                    <th>Rut</th>
                    <th>Correo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechadenacimiento}</td>
                                <td>{p.edad}</td>
                                <td>
                                    <Link href={{pathname:'Pagina5',query:{key:p.key}}}>
                                    <Button variant='warning'><FaUserEdit />Editar</Button>
                                    </Link>
                                    
                                    <Button variant='danger' onClick={handleShow} data-bs-dismiss="modal"><MdDeleteForever />Eliminar</Button>
                                    <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Eliminacion de Sacrificio</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>¿Esta seguro de que quiere eliminar este sacrifico del registro?</Modal.Body>
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
export default Pagina4