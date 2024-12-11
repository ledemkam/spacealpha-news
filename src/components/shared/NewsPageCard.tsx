import { News } from "@/types";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type PropsCard = {
    news: News;
}
const NewsPageCard = ({news}: PropsCard) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4">
        <div className="p-2 overflow-hidden lg:col-span-1 h-[300px] md:h-[400px] lg:h-full">
            <Link to={news.url} target="_blank">
               <img src={news.image_url} alt={news.title} className="h-full w-full object-cover"/>
            </Link>
        </div>
        <div className="p-2 overflow-hidden lg:col-span-3 h-[300px] md:h-[200px] lg:h-full">
            <p className="text-2xl font-bold">{news.title}</p>
            <p>{news.published_at.split("T")[0]}</p>
            <p className="flex items-center">
                <span>{news.news_site}</span>
                <span>|</span>
                <span className="flex gap-x-2">Read from source
                <Link to={news.url} target="_blank">
                 <CircleArrowRight className="hover:scale-150 transition-all" color="var(--clr-violet)" />
                </Link>
                </span>
            </p>
            <p className="mt-4">{news.summary}</p>
        </div>
    </div>
  )
}

export default NewsPageCard