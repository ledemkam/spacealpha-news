import { News } from "@/types";

type CardGridProps = {
  objects: News[] ;
    mode: string
}

const CardGrid = ({objects,mode}:CardGridProps) =>{
  console.log(mode);
  
	return(
    <div className="grid">
       {objects.map((item,index) =>(
        <img key={index} src={item.image_url} alt={item.title} />
       ))}
    </div>
  )
};
export default CardGrid