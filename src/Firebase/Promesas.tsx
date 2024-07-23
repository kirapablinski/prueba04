import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import {db} from "./Firebase";
import { Persona } from "@/interface/iPersona";
import { Admin } from "@/interface/iAdmin";

export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db,"personas"),persona);
}
export const obtenerPersona = async()=>{
    let personas:Persona[] = []
    const querySnapshot = await getDocs(collection(db,"personas"));
    querySnapshot.forEach((doc)=>{
        let persona:Persona = {
            rut:doc.data().rut,
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            edad:doc.data().edad,
            fechadenacimiento:doc.data().fechanacimiento,
            nombre:doc.data().nombre,
            key:doc.id
        }
        personas.push(persona)
    });
    return personas
}
export const obtenerPerson = async(key:string)=>{
    const docRef = doc(db,"personas",key);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        let persona:Persona = {
            rut:docSnap.data().rut,
            apellido:docSnap.data().apellido,
            correo:docSnap.data().correo,
            edad:docSnap.data().edad,
            fechadenacimiento:docSnap.data().fechanacimiento,
            nombre:docSnap.data().nombre,
            key:docSnap.id
    }
        return persona
    }else{
        return undefined
    }
}
export const actualizarPersona = async(p:Persona)=>{
    try{
        if (!p.key) {
            throw new Error("La clave de la persona es inválida o está ausente.");
          }
        const ref = doc(db,"personas",p.key!);
        await updateDoc(ref,{...p});
        console.log("listo");
    } catch(error){
        console.log("error",error);
    }
}
export const eliminarPersona = async(p:Persona)=>{
    try{
        if (!p.key) {
            throw new Error("La clave de la persona es inválida o está ausente.");
          }
        const ref = doc(db,"personas",p.key);
        await deleteDoc(ref);
        console.log("listo");
    } catch(error){
        console.log("error",error);
    }
}

export const obtenerAdmin = async()=>{
    let admins:Admin[] = []
    const querySnapshot = await getDocs(collection(db,"admin"));
    querySnapshot.forEach((doc)=>{
        let admin:Admin = {
            nombre:doc.data().nombre,
            contrasena:doc.data().rut,
            key:doc.id
        }
        admins.push(admin)
    });
    return admins
}
export const registrarAdmin = async(admin:Admin)=>{
    const docRef = await addDoc(collection(db,"admin"),admin);
}
export const eliminarAdmin = async(p:Admin)=>{
    try{
        if (!p.key) {
            throw new Error("La clave de la persona es inválida o está ausente.");
          }
        const ref = doc(db,"admin",p.key);
        await deleteDoc(ref);
        console.log("listo");
    } catch(error){
        console.log("error",error);
    }
}
export const actualizarAdmin = async(p:Admin)=>{
    try{
        if (!p.key) {
            throw new Error("La clave de la persona es inválida o está ausente.");
          }
        const ref = doc(db,"admin",p.key!);
        await updateDoc(ref,{...p});
        console.log("listo");
    } catch(error){
        console.log("error",error);
    }
}
export const obtenerunAdmin = async (nombre: string): Promise<Admin | undefined> => {
    try {
        const adminQuery = query(collection(db, 'admin'), where('nombre', '==', nombre));
        const querySnapshot = await getDocs(adminQuery);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const data = doc.data();
            const admin: Admin = {
                nombre: data.nombre,
                contrasena: data.contrasena,
                key: doc.id
            };
            return admin;
        } else {
            console.log(`No se encontró el administrador con el nombre: ${nombre}`);
            return undefined;
        }
    } catch (error) {
        console.error("Error al obtener el administrador:", error);
        return undefined;
    }
};