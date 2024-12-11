import { ISnapi } from "@/types"

type OverviewProps = {
    objects: ISnapi
}

const Overview = ({objects}:OverviewProps) => {
    const number: number = objects.count
  return (
    <div className="my-6 text-xl">
        {number} matches
    </div>
  )
}
export default Overview