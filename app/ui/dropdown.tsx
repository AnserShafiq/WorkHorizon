import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define a TypeScript interface for the dropdown item
interface DropdownItem {
  name: string;
  link: string;
}

// Define a TypeScript interface for the main menu
interface MainMenu {
  name: string;
  link: string;
  active: boolean;
  dropdown: DropdownItem[];
}

// Define the props for the DropDown component
interface DropDownProps {
  mainMenu: MainMenu;
}

export default function DropDown({ mainMenu }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false); 
  const subMenu = mainMenu.dropdown;

  return (
    <div className="relative"
    onMouseOver={() => setIsOpen(true)}
    // onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Menu Link */}
      <Link href={mainMenu.link} className={`w-full relative text-xl !hidden md:!flex items-center justify-center font-semibold tracking-wide transitive-underline ${isOpen ? 'transitive-underline' : ''} hover:text-sky-800 ${mainMenu.active ? "text-[#F7801E]" : "text-sky-900"}`}>
        {mainMenu.name} <ChevronDown className={`w-5 h-5 ml-2 mt-1 stroke-[2.5px] ${isOpen ? 'rotate-180 md:rotate-0': 'rotate-0'}`}/>
      </Link>

      <button onClick={() => setIsOpen(!isOpen)} className={`w-full relative text-xl border-b border-gray-100 !flex md:!hidden items-center justify-between font-semibold tracking-wide transitive-underline ${isOpen ? 'transitive-underline' : ' mb-3'} ${mainMenu.active ? "text-[#F7801E]" : "text-sky-900"} hover:text-sky-800`}>
        {mainMenu.name} <ChevronDown className={`w-5 h-5 ml-2 mt-1 stroke-[2.5px] ${isOpen ? 'rotate-180 md:rotate-0': 'rotate-0'}`}/>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`relative md:absolute top-0 md:top-7 -left-0 bg-[#00000011] md:bg-dullWhite shadow-md md:shadow-lg md:border md:border-gray-300 md:rounded-lg mb-3 md:w-[300px] z-50 ${isOpen ? 'block':'hidden'}`}>
          {subMenu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`block px-4 py-2 md:py-4 text-sky-900 text-lg font-[500] md:font-normal hover:text-orange-500 ${index < subMenu.length - 1 ? 'border-b': ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}