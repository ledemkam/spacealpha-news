import {  useLoaderData } from "react-router-dom";





export default function News() {
  const {results} = useLoaderData();
  console.log(results)
  return (
    <div>News</div>
  )
}