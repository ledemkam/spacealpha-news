import { useLoaderData } from "react-router-dom"

export default function Hubble() {
  const data = useLoaderData()
  console.log(data)
  return (
    <section className="secion">
      <h1>Hubble</h1>
      <p>Here are some images from the Hubble telescope</p>
     
      
    </section>
  )
}