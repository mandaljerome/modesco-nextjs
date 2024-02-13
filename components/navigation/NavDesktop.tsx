'use client';

import Link from 'next/link';

import { FiUser } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { usePathname } from 'next/navigation';

import { Links } from '@/types';
import { FC } from 'react';

type NavDesktop = {
  links: Links[];
};

const NavDesktop: FC<NavDesktop> = ({ links }) => {
  const active = usePathname();

  return (
    <ul className="flex space-x-5">
      {links.map((link, idx) => {
        return (
          <li key={idx}>
            <Link
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium text-background/50
             transition-all duration-700 hover:bg-white hover:bg-opacity-10 hover:text-white
              ${
                active === link.href ? 'bg-white bg-opacity-10 text-white' : ''
              }`}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
      <div className="flex items-center space-x-8">
        <li>
          <Link href="/account">
            <FiUser
              size={30}
              className="ml-4 text-background transition-all duration-500 hover:scale-105
              hover:opacity-70"
            />
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <LuShoppingCart
              size={30}
              className="text-background transition-all duration-500 hover:scale-105 hover:opacity-70"
            />
          </Link>
        </li>
      </div>
    </ul>
  );
};
export default NavDesktop;
