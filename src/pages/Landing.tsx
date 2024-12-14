import { HubbleLauncher, NewsLauncher, SpaceXLauncher, WebbLauncher } from "@/components";
import ApodLauncher from "@/components/shared/ApodLauncher";
import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch } from "@/lib/axios/api";
import { ApodType, HubbleImage, HubbleImagesResponse, LandingPageNewsApodHubbles, News, NewsResponseWithParams } from "@/types";
import { LoaderFunction } from "react-router-dom";
const newsParams = { ordering: "date" };

const hubblesParams = {
	order_by: "photo_date_taken desc",
	limit: 12,
};

const newsFetch = async (): Promise<News[] | null> => {
	try {
		const response = await snapiCustomFetch.get<NewsResponseWithParams>("", { params: newsParams });
		return response.data.response.results;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
};

  const apodFetch = async (): Promise<ApodType | null> => {
	try {
		const response = await nasaCustomFetch.get<ApodType>("");
		return response.data;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
};

const hubblesFetch = async (): Promise<HubbleImage[] | null> => {
	try {
		const response = await datastroCustomFetch.get<HubbleImagesResponse>("", { params: hubblesParams });
		return response.data.results;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
};

export const LandingPageLoader: LoaderFunction = async (): Promise<LandingPageNewsApodHubbles | null> => {
	try {
		const [news, apod, hubbles] = await Promise.all([newsFetch(), apodFetch(), hubblesFetch()]);
		return { news, apod, hubbles };
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
};

const Landing = () => {
	return (
		<section>
      <NewsLauncher />
			<SpaceXLauncher />
      <ApodLauncher />
			<WebbLauncher />
			<HubbleLauncher/>
		</section>
	);
};
export default Landing;