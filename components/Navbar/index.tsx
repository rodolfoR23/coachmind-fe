"use client";
import React, { FunctionComponent, ReactElement } from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar: FunctionComponent = (): ReactElement => {
  const pathname = usePathname();

  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800'>
      <nav
        className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <Link className='flex-none text-xl font-semibold dark:text-white' href='/'>
          Torchbearers Philippines
        </Link>
        <div className='flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5'>
          {NavLinks.map((link) => (
            <Link
              as='a'
              key={link.label}
              href={`${link.href}`}
              className='font-medium text-blue-500'
              aria-current={!!(pathname.split("/")[1] === link.label.toLowerCase())}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
