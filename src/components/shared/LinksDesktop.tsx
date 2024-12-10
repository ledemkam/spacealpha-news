import { navLinks } from "@/contants"
import { INavLink } from "@/types"
import { NavLink } from "react-router-dom"

const LinksDesktop = () => {
  return (
    <div className="hidden  lg:flex w-full  gap-x-[5rem] justify-center items-center text-white">
        {navLinks.map((link: INavLink) => {
          
            return (
                <NavLink key={link.label} to={link.route} className={({isActive}) => `capitalize tracking-wide ${isActive ? "underline text-xl" : "" }`}>
                    {link.label}
                </NavLink>
            )
        })}
    </div>
  )
}
export default LinksDesktop