import PinterestIcon from "@/assets/PinterestIcon";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default async function Home() {

  const respuesta = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`)
  const datos = await respuesta.json()
  console.log(datos)

  return (
    <>
      <div className="columns-5 gap-1">
        {
          datos.map(
            dato => (
              <div key={dato.id} className="w-fit mb-2 rounded-xl overflow-hidden">
                <Image width={300} height={200} alt="imagen" src={dato.urls.regular} />
              </div>
            )
          )
        }
      </div>
    </>
  )
}