import {  NewsResponseWithParams } from "@/types"

type OverviewProps = {
    objects: NewsResponseWithParams
}

const Overview = ({objects}:OverviewProps) => {
    const number: number = objects.response.count
  return (
    <div className="my-6 text-xl">
        {number} matches
    </div>
  )
}
export default Overview