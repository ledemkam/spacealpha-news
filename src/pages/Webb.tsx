import { Title } from "@/components";
import { useLoaderData } from "react-router-dom";

export default function Webb() {
  const webbData = useLoaderData();
  console.log(webbData);
  return (
    <section>
      <Title title="James Webb space telescope" />
      <Title title="in brief" />

    </section>
  )
}