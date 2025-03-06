'use client'
import PinterestIcon from "@/assets/PinterestIcon";
import userStore from "@/store/userStore";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    const { usuario } = userStore();
    console.log(usuario)

    return (
        <div className="flex p-5 justify-between z-50 items-center sticky top-0 bg-white font-bold">
            <div className="flex gap-5">
                <Link href={'/'}>
                    <div>
                        <PinterestIcon />
                    </div>
                </Link>

                <Link href={'/explore'}>
                    Explorar
                </Link>
            </div>

            <ul className="flex gap-5 items-center">
                <li>Info</li>
                <li>Empresa</li>
                <li>Blog</li>
                {usuario ?
                    (<li className="flex items-center gap-2 border border-gray-400 rounded-lg px-2 py-1">
                        <Link className="flex gap-2 items-center" href={'/perfil'}>
                            <div>
                                <Image className="rounded-full" src={usuario.photoURL} width={20} height={20} alt="profile" />
                            </div>
                            Mi perfil
                        </Link>
                    </li>)
                    :
                    (<>
                        <li className="bg-red-600 p-2 rounded-2xl text-white">
                            <Link href={'/login'} >Iniciar Sesion</Link>
                        </li>
                        <li>
                            <Link href={'/registro'} >Registrarse</Link>
                        </li>
                    </>)
                }
            </ul>
        </div>
    )
}