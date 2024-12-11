import { Link, useLoaderData } from "react-router-dom";
import Title from "./Title";
import { CirclePlay } from "lucide-react";
import CardGrid from "./CardGrid";

const HubbleLauncher = () => {
	const { hubbles } = useLoaderData() ;

	if (!hubbles) {
		return <>Problem while fetching data</>;
	}

	return (
		<article className="align-element w-full my-6">
			<div className="flex justify-between items-center">
				<Title title="hubble photos" />
				<div className="flex ">
					<p className="font-bold ml-auto mr-2">More photos</p>
					<Link to="hubble">
						<CirclePlay
							color="var(--clr-violet)"
							className="transition-all hover:scale-150"
						/>
					</Link>
				</div>
			</div>
			<CardGrid mode="hubble" objects={hubbles} />
		</article>
	);
};
export default HubbleLauncher;