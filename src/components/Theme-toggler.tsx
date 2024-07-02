'use client'

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "./ui/dropdown-menu"
import {useTheme} from "next-themes";
export default function  ThemeToggler(){
    const {setTheme} = useTheme();
return(

    <>
       <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">Theme

          </DropdownMenuTrigger>
 <DropdownMenuContent>

     <DropdownMenuItem onClick={() => setTheme("light")}>
         Light
     </DropdownMenuItem>
     <DropdownMenuItem onClick={() => setTheme("dark")}>
         Dark
     </DropdownMenuItem>
     <DropdownMenuItem onClick={() => setTheme("system")}>
         System
     </DropdownMenuItem>
 </DropdownMenuContent>
       </DropdownMenu>
   </>
)


}