'use client'
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

export default function Formulario() {

    const [email, setEmail] = useState(null);
    const [contraseña, setContraseña] = useState(null);

    const registrarUsuario = async () => {
        try {
            const respuesta = await createUserWithEmailAndPassword(auth, email, '123456789')
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        registrarUsuario()
    }

    return (
        <form className="flex flex-col mx-[30%] gap-10">
            <input onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 px-3 py-2 rounded-lg" placeholder="Ingresa tu email" type="email" />
            <input className="border border-gray-400 px-3 py-2 rounded-lg" placeholder="Ingresa tu contraseña" type="password" />
            <button onClick={handleClick} className="bg-red-600 py-2 rounded-2xl font-bold text-white">Registrame</button>
        </form>
    )
}