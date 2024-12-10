import CardGrid from "@/components/shared/CardGrid";
import {  useLoaderData } from "react-router-dom";





export default function News() {
  const {results} = useLoaderData();
  console.log(results)
  return (
    <section className="section">
      <CardGrid objects={results} mode="news-page" />
    </section>
  )
}