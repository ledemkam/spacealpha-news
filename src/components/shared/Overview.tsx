import {  HubbleImagesResponse, NewsResponseWithParams } from "@/types"

type OverviewProps = {
    objects: NewsResponseWithParams | HubbleImagesResponse
}

const Overview = ({objects}:OverviewProps) => {
  let number: number;
	// type guard :
	if ("total_count" in objects) {
		number = objects.total_count;
	} else {
		number = objects.response.count;
	}
  return (
    <div className="my-6 text-xl">
        {number} matches
    </div>
  )
}
export default Overview