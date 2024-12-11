import { FiltersForm, Overview, Title } from "@/components";
import CardGrid from "@/components/shared/CardGrid";
import {  useLoaderData } from "react-router-dom";





export default function News() {
  const data = useLoaderData();
  const {results} = data
  console.log(data)
  return (
    <section className="section">
      <Title title="All news" />
      <FiltersForm item="item" mode="news" />
      <Overview objects={data} />
      <CardGrid objects={results} mode="news-page" />
    </section>
  )
}