import { CardGrid, FiltersForm, Overview, PaginationContainer, Title } from "@/components";
import { useLoaderData } from "react-router-dom"

export default function Hubble() {
  const data = useLoaderData()
  const { response, params } = data;

	return (
		<section className="section">
			<Title title="Hubble telescope photos" />
			<FiltersForm term={params.term} mode="hubble" key={params.term} />
			<Overview objects={response} />
			<CardGrid objects={response.results} mode="hubble" />
			<PaginationContainer/>
		</section>
	);
}