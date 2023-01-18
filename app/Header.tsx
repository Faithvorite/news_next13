import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"
import DarkModeButton from "./DarkModeButton"
import NavLinks from "./NavLinks"
import SearchBox from "./SearchBox"
type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div className="grid grid-cols-3 p-10 items-center">
            <Bars3Icon className="h-8 w-8 cursor-pointer" />
            <Link href="/" prefetch={false}>
                <h1 className="font-serif text-4xl text-center">the <span className="underline uppercase decoration-6 decoration-[rgb(201,4,4)]">Nguyen</span> News</h1>
            </Link>
            
            {/* dark/light mode */}
           <div className="flex items-center justify-end space-x-2">
                <DarkModeButton />
                <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 lg:py-4 rounded-full dark:bg-slate-800">
                    Subscribe Now
                </button>
            </div>
        </div>

        <NavLinks />

        <SearchBox />


    </header>
  )
}

export default Header