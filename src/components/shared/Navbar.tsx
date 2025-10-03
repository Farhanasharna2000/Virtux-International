"use client";

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
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(path);
    }
  };

  return (
    <nav className="py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center ">
        <Image src="/logo.png" width={70} height={70} alt="" />
        <Link href="/" className="font-extrabold md:text-2xl ">
          <p>VIRTUX</p>
          <p>INTERNATIONAL</p>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-6 md:pr-4 ">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleClick(e, item.path)}
              className="cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => handleClick(e, item.path)}
                >
                  {item.name}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
