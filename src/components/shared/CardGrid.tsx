import { News } from "@/types";
import NewsPageCard from "./NewsPageCard";

type CardGridProps = {
  objects: News[] ;
    mode: string
}

const CardGrid = ({objects,mode}:CardGridProps) =>{
  console.log(mode);
  
	return(
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
       {objects.map((item) =>(
        <NewsPageCard key={item.id} news={item} />
       ))}
    </div>
  )
};
export default CardGrid