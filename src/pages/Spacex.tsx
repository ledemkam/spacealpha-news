import {  CardGrid, Title } from "@/components"
import RelatedNews from "@/components/shared/RelatedNews"
import { useLoaderData } from "react-router-dom"

const Spacex = () => {
  const {news,rockets} = useLoaderData()
  console.log(rockets);
  
  
  return (
    <section className="section">
      <Title title="SpaceX"/>
       {news && <RelatedNews news={news} />}
      <Title title="Rockets"/>
      {rockets && <CardGrid objects={rockets} mode="rockets"/>}

    </section>
  )
}
export default Spacex