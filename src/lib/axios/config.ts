import { 
	   ApodType, 
	   FiltersParams,
	   HubbleImagesResponse,
	   HubbleImagesResponseWithParams,
	   News, NewsResponse,
	   NewsResponseWithParams,
	   WebbImage, WebbImagesResponse, WebbNewsAndImagery } from "@/types";
import { LoaderFunction } from "react-router-dom";
import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch, spacexCustomFetch, webbCustomFetch } from "./api";

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
		console.log(error);
		return null;
	}
};

//config api for hubble page
const hubbleParams = {
	order_by: "photo_date_taken desc",
	limit: 24,
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
		console.log(error);
		return null;
	}
};

//config api for apod page
export const apodPageLoader: LoaderFunction = async (): Promise<ApodType | null> => {
	try {
		const response = await nasaCustomFetch.get<ApodType>("");
		return response.data;
	} catch (error) {
		console.log(error);
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
		console.log(error);
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
		console.log(error);
		return null;
	}
}

export const webbPageLoader: LoaderFunction = async (): Promise<WebbNewsAndImagery|null> => {
	try {
		//promise.all
		const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()]);
		return { news, imagery };
	} catch (error) {
		console.log(error);
		return null;
	}
};

//config api for SpaceX

const newsFetchforSpace  = async() => {
	try {
		
		const response = await snapiCustomFetch.get("", {params: newsParams});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
}
export const rocketsFetch = async ()=> {
	try {
		const response = await spacexCustomFetch.get("rockets/starship");
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
export const spacexPageLoader: LoaderFunction = async ()=> {
	try {
		const [news,rockets] = await Promise.all([newsFetchforSpace(),rocketsFetch()]);
		return {news,rockets};
	} catch (error) {
		console.log(error);
		return null;
	}
};