import { useLoaderData } from "react-router-dom"

export default function Apod() {
  const defaultApod= useLoaderData()
  console.log(defaultApod);
  
  return (
    <div>Apod</div>
  )
}