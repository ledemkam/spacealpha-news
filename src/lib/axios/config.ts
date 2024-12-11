import { ApodType, FiltersParams, HubbleImagesResponse, HubbleImagesResponseWithParams, NewsResponse, NewsResponseWithParams } from "@/types";
import { LoaderFunction } from "react-router-dom";
import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch } from "./api";
//import { objectsPerPage } from "../utils";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 20,
    ordered: "date"
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