// 'use client'
import Carta from "@/components/Carta";
import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
// import { useEffect } from "react";

export default async function Page() {

    const obtenerImagenesFirebase = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }

    const querySnapshot = await getDocs(collection(db, "productos"));
    const documentos = querySnapshot.map((doc) => doc.data());

    console.log(documentos)

    // useEffect(
    //     () => {
    //         obtenerImagenesFirebase()
    //     }, []
    // )

    return (
        <div>
            <h1>Explorar</h1>
        </div>
    )
}