import { FiltersForm, Overview, PaginationContainer, Title } from "@/components";
import CardGrid from "@/components/shared/CardGrid";
import {  useLoaderData } from "react-router-dom";





export default function News() {
  const data = useLoaderData()  
  const {response,params} = data

  
  return (
    <section className="section">
      <Title title="All news" />
      <FiltersForm term={params.term} mode="news" key={params.term}/>
      <Overview objects={data} /> 
      <CardGrid objects={response.results} mode="news-page" />
      <PaginationContainer/>
     
    </section>
  )
}