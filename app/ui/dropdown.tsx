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

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative"
    onMouseOver={() => setIsOpen(true)}
    // onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Menu Link */}
      <Link href={mainMenu.link} className={`relative text-lg xl:text-xl font-semibold tracking-wide transitive-underline ${isOpen ? 'transitive-underline' : ''} ${mainMenu.active ? "text-[#F7801E]" : "text-sky-900"} hover:text-sky-800`}>
        {mainMenu.name}
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-7 -left-3 bg-dullWhite shadow-lg border border-gray-300 rounded-lg w-[300px] z-50 ${isOpen ? 'block':'hidden'}`}>
          {subMenu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`block px-4 py-4 text-sky-900 text-lg hover:text-orange-500 ${index < subMenu.length - 1 ? 'border-b': ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}