import { ISnapi } from "@/types";
import { LoaderFunction } from "react-router-dom";
import { snapiCustomFetch } from "./api";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 20,
    ordered: "date"
  }
  
  export const newsPageLoader : LoaderFunction = async (): Promise<ISnapi|null> => {
     try {
        const formatttedParams = {
          ...newsParams
        }
        const reponse = await snapiCustomFetch.get<ISnapi>("",{
          params: formatttedParams
        });
        return reponse.data;
     } catch (error) {
        console.error("Error fetching news", error);
        return null;
     }
  }