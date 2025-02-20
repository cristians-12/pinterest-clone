import PinterestIcon from "@/assets/PinterestIcon";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex p-5 justify-between z-50 items-center sticky top-0 bg-white font-bold">
            <div className="flex gap-5">
                <Link href={'/'}>
                    <div>
                        <PinterestIcon />
                    </div>
                </Link>

                <div>
                    Explorar
                </div>
            </div>

            <ul className="flex gap-5 items-center">
                <li>Info</li>
                <li>Empresa</li>
                <li>Blog</li>
                <li className="bg-red-600 p-2 rounded-2xl text-white">Iniciar Sesion</li>
                <li><Link href={'/registro'} >Registrarse</Link></li>
            </ul>
        </div>
    )
}