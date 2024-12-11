import { HubbleImage, News } from "@/types";
import NewsPageCard from "./NewsPageCard";
import { ReactNode } from "react";
import HubbleCard from "./HubbleCard";

const CardGrid = ({ objects, mode }: { objects: News[] | HubbleImage[]; mode: string }): ReactNode => {
  if (mode === "hubble") {
    return (
      <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
        {(objects as HubbleImage[]).map((item) => (
          <HubbleCard image={item} key={item.url} />
        ))}
      </div>
    );
  } else if (mode === "news-page") {
    return (
      <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px] mb-12">
        {(objects as News[]).map((item) => (
          <NewsPageCard news={item} key={item.id} />
        ))}
      </div>
    );
  }
  return null;
};

export default CardGrid;