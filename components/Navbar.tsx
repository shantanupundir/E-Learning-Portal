"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Growtechie from "@/public/LogoAlone.png";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white text-center">
        Courses starting soon, join now.
      </div>
      <header className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-white text-black hover:bg-gray-200 text-sm rounded-full p-1">
                <Link href="/">
                  <Image
                    src={Growtechie}
                    alt="Growtechie Logo"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <Link href="/">
                <span className="text-xl font-light text-white">
                  Growtechie
                </span>
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="outline"
                className="text-sm text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </Button>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:flex">
              <NavigationMenu className="text-white">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/testimonial" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Testimonials
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Content</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] text-black bg-white">
                        <ListItem
                          href="/teachers"
                          title="Mentors"
                          className="hover:bg-black/10"
                        ></ListItem>
                        <ListItem
                          href="/courses"
                          title="Courses"
                          className="hover:bg-black/10"
                        ></ListItem>
                        <ListItem
                          href="/e-building"
                          title="E-Building"
                          className="hover:bg-black/10"
                        ></ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="flex items-center space-x-4">
              <SignedOut>
                <Link href="/auth">
                  <Button variant="outline" className="text-sm text-white">
                    Sign In / Sign Up
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
              <a
                href="https://calendly.com/ramakrushna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:bg-gray-200 text-sm">
                  Book Demo Session
                </Button>
              </a>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } bg-[#000319] p-4 mt-4 rounded-lg`}
          >
            <a
              href="/about"
              className="block text-sm text-gray-300 hover:text-white py-2"
            >
              About
            </a>
            <a
              href="/contact"
              className="block text-sm text-gray-300 hover:text-white py-2"
            >
              Contact
            </a>
            <a
              href="/testimonial"
              className="block text-sm text-gray-300 hover:text-white py-2"
            >
              Testimonial
            </a>
            <a
              href="/courses"
              className="block text-sm text-gray-300 hover:text-white py-2"
            >
              Courses
            </a>
            <a
              href="/e-building"
              className="block text-sm text-gray-300 hover:text-white py-2"
            >
              E-Building
            </a>
            <a
              href="/teachers"
              className="block text-sm text-gray-300 hover:text-white py-2"
            >
              Teachers
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
