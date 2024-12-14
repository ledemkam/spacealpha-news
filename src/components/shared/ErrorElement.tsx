import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError() as { message?: string }
    
  return (
    <h4 className="">There was an error: {error?.message || "Unknown error"}</h4>
  )
}
export default ErrorElement