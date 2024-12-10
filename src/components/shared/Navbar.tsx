import LinksDesktop from "./LinksDesktop"
import Linksmobile from "./Linksmobile"

const Navbar = () => {
  return (
    <nav className="bg-black  py-5">
      <div className="align-element">
        <Linksmobile />
        <LinksDesktop />
      </div>
    </nav>
  )
}
export default Navbar