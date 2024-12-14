import { CardGrid, Title } from "@/components";
import RelatedNews from "@/components/shared/RelatedNews";
import WebbTelescopeSummary from "@/components/shared/WebbTelescopeSummary";
import { useLoaderData } from "react-router-dom";

export default function Webb() {
  const {news,imagery} = useLoaderData();
  return (
    <section>
      <Title title="James Webb space telescope" />
      {news && <RelatedNews news={news}/>}
      <Title title="in brief" />
      <WebbTelescopeSummary />
      <Title title="Recent Images" />
      {imagery && <CardGrid objects={imagery} mode="webb" />}

    </section>
  )
}