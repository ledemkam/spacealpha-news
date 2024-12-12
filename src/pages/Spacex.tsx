import {  Title } from "@/components"
import { useLoaderData } from "react-router-dom"

const Spacex = () => {
  const data = useLoaderData()
  console.log(data);
  
  return (
    <section>
      <Title title="SpaceX"/>
      <Title title="Rockets"/>
    </section>
  )
}
export default Spacex