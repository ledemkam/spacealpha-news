import { navLinks } from "@/contants"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { INavLink } from "@/types"
import { NavLink } from "react-router-dom"
import { AlignLeft } from "lucide-react"

const Linksmobile = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild className="lg:hidden">
      <Button variant="outline" size="icon">
        <AlignLeft/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="lg:hidden" align="start">
      
    {navLinks.map((link: INavLink) => {
        return (
              <DropdownMenuItem key={link.label}>
              <NavLink  to={link.route} className={({isActive}) => `capitalize tracking-wide font-light ${isActive ? "text-primary text-xl" : "" }`}>
                  {link.label}
              </NavLink>
             </DropdownMenuItem>
          )
      })}
        
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
export default Linksmobile