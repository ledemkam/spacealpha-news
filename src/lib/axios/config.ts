import { 
	   ApodType, 
	   FiltersParams,
	   HubbleImage,
	   HubbleImagesResponse,
	   HubbleImagesResponseWithParams,
	   News, NewsResponse,
	   NewsResponseWithParams,
	   Rocket,
	   SpaceXNewsAndRockets,
	   WebbImage, WebbImagesResponse, WebbNewsAndImagery } from "@/types";
import { LoaderFunction } from "react-router-dom";
import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch, spacexCustomFetch, webbCustomFetch } from "./api";
import { objectsPerPage } from "../utils";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 20,
    ordered: "date",
	summary_content: "spacex"
  }
  
  //config api for news page
  export const newsPageLoader: LoaderFunction = async ({ request }): Promise<NewsResponseWithParams | null> => {
	try {
		const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const formattedParams = {
			search: params.term ? params.term : "",
			...newsParams,
		};
		const response = await snapiCustomFetch.get<NewsResponse>("", {
			params: formattedParams,
		});
		return { response: response.data, params };
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);
	}
};

//config api for hubble page
const hubbleParams = {
	order_by: "photo_date_taken desc",
	limit: objectsPerPage
};

export const hubblePageLoader: LoaderFunction = async ({ request }): Promise<HubbleImagesResponseWithParams | null> => {
	try {
		const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const formattedParams = {
			where: params.term ? `photo_title like "${params.term}"` : "",
			...hubbleParams,
		};
		const response = await datastroCustomFetch.get<HubbleImagesResponse>("", { params: formattedParams });
		return { response: response.data, params };
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
};

//config api for apod page
export const apodPageLoader: LoaderFunction = async (): Promise<ApodType | null> => {
	try {
		const response = await nasaCustomFetch.get<ApodType>("");
		return response.data;
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
};

//config api for webb page

const webbParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 9,
    ordered: "date",
	summary_contains: "webb"
  }
const newsFetch  = async(): Promise<News[]|null> => {
	try {
		
		const response = await snapiCustomFetch.get<NewsResponse>("", {params: webbParams});
		return response.data.results;
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);
;
		return null;
	}
}

const imageParams = {
	page: 1,
	perPage: 4,
}

export const imageryFetch = async(): Promise<WebbImage[] | null> => {	
	try {
		const response = await webbCustomFetch.get<WebbImagesResponse>("", {params: imageParams});
		return response.data.body;
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
}

export const webbPageLoader: LoaderFunction = async (): Promise<WebbNewsAndImagery|null> => {
	try {
		//promise.all
		const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()]);
		return { news, imagery };
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
};

//config api for SpaceX
const startshipURL = "/rockets/starship";
const falconNineURL = "/rockets/falcon9";
const falconHeavyURL = "/rockets/falconheavy";

const rocketUrls = [startshipURL,falconNineURL,falconHeavyURL];

const newsFetchforSpace  = async():Promise<News[]|null> => {
	try {
		
		const response = await snapiCustomFetch.get<NewsResponse>("", {params: newsParams});
		return response.data.results
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
}
export const rocketFetch = async (rocketUrl: string):Promise<Rocket|null>=> {
	try {
		const response = await spacexCustomFetch.get<Rocket>(rocketUrl);
		return response.data;
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
};
export const rocketsFetch = async (): Promise<(Rocket|null)[]|null> => {
	try {
		const response: (Rocket | null)[] = await Promise.all(rocketUrls.map(rocketUrl =>(rocketFetch(rocketUrl))));
		return response;
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
};


export const spacexPageLoader: LoaderFunction = async ():Promise<SpaceXNewsAndRockets|null>=> {
	try {
		const [news,rockets] = await Promise.all([newsFetchforSpace(),rocketsFetch()]);
		return {news,rockets};
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
};


//config api for Sinngle page hubble


export const singleHubblePageLoader: LoaderFunction = async ({ params }): Promise<HubbleImage | null> => {
	try {
		const formattedParams = { where: params.id ? `photo_id like "${params.id}"` : `` };
		const response = await datastroCustomFetch.get<HubbleImagesResponse>("", { params: formattedParams });
		return response.data.results[0];
	} catch (error) {
		throw new Error(`Failed to fetch news data: ${error}`);

		return null;
	}
};