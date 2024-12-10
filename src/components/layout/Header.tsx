import { Link } from "react-router-dom"
import spaceImg from "../../assets/imgs/rocket.svg"
import { ReactNode } from "react"

const Header = () : ReactNode => {
  return (
    <header className="test bg-black">
      <div className="grid grid-cols-2 md:grid-cols-3 p-2">
       <Link  className="justify-self-start self-center" to="/">
          <h1 className="mars-font text-lg pt-2 tracking-[0.8rem] text-white">alphaSpace</h1>
       </Link>
       <Link to="/" className="justify-self-end self-center md:justify-center">
        <img src={spaceImg} alt="rocke-logo" className="h-12 w-12 object-cover"/>
       </Link>
      </div>
    </header>
  )
}
export default Header