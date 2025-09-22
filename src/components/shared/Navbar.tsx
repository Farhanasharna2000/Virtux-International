import { menuItems } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="py-2  flex items-center justify-between">
      <div className="flex items-center ">
        <Image src="/logo.png" width={70} height={70} alt="" />
        <Link href="/" className="font-extrabold md:text-2xl ">
          <p>VIRTUX</p>
          <p>INTERNATIONAL</p>
        </Link>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-6 md:pr-4 ">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="block md:hidden mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            {menuItems.map((item) => (
              <Link href={item.path} key={item.path}>
                <DropdownMenuItem>{item.name}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
