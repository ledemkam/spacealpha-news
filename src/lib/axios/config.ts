import { FiltersParams, NewsResponse, NewsResponseWithParams } from "@/types";
import { LoaderFunction } from "react-router-dom";
import { snapiCustomFetch } from "./api";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 20,
    ordered: "date"
  }
  
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