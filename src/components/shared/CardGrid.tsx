import { News } from "@/types";
import NewsPageCard from "./NewsPageCard";
import { ReactNode } from "react";



const CardGrid = ({objects,mode}:{objects: News[]; mode: string}) : ReactNode=>{
  console.log(mode);
  
	return(
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px] mb-12">
				{(objects).map((item) => (
					<NewsPageCard news={item} key={item.id} />
				))}
			</div>
  )
};
export default CardGrid