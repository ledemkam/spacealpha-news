import { HubbleImage, News, Rocket, WebbImage } from "@/types";
import NewsPageCard from "./NewsPageCard";
import { ReactNode } from "react";
import HubbleCard from "./HubbleCard";
import ImageCard from "./ImageCard";
import RocketCard from "./RocketCard";

const CardGrid = ({ objects, mode }: { objects: News[] | HubbleImage[] | WebbImage[] | (Rocket | null) []; mode: string }): ReactNode => {
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
  }else if (mode === "webb") {
    return (
      <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
        {(objects as WebbImage[]).map((item) => (
          <ImageCard image={item} key={item.id} />
        ))}
      </div>
    );
  }else if (mode === "rockets") {
		return (
			<div>
				{(objects as (Rocket | null)[]).map(
          (item, index) => item && <RocketCard rocket={item} key={item.id} index={index} />
				)}
			</div>
		);
  }
  return null;
};

export default CardGrid;