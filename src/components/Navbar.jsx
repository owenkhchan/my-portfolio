import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			className={
				shadow
					? "fixed w-full py-8 top-0 right-0 px-4 md:px-24 bg-white border-b z-10"
					: "fixed w-full py-8 top-0 right-0 px-4 md:px-24"
			}
		>
			<NavBrand>Owen Chan</NavBrand>
			<NavIcon onClick={handleNav}>
				<HiMenu size={30} className="cursor-pointer block lg:hidden" />
			</NavIcon>
			<NavMenu $hidden={nav}>
				<Link href="/">
					<NavItem>Home</NavItem>
				</Link>
				<Link href="/#about">
					<NavItem>About</NavItem>
				</Link>
				<Link href="/#skills">
					<NavItem>Skills</NavItem>
				</Link>
				<Link href="/">
					<NavItem>Experience</NavItem>
				</Link>
				<Link href="/#contact">
					<NavItem>Contact</NavItem>
				</Link>
			</NavMenu>
		</div>
	);
};

export default Navbar;

// Navbar
export const NavBrand = tw.h1`    
    text-2xl
    font-normal
    float-left
`;

export const NavIcon = tw.div`
    flex
    flex-row
    space-x-10
    float-right
`;

export const NavMenu = tw.ul`
	lg:flex
    lg:flex-row
    lg:space-x-10
	lg:m-0
	lg:p-0
	lg:static
	lg:w-auto
    lg:float-right
	absolute
	right-0
	w-full
	bg-white
	md:pr-24
	pr-6
	mt-16
	py-4
	text-right
	space-x-4
	${(p) => (p.$hidden ? "block border-b" : "hidden")}	
`;

export const NavItem = tw.li`
    text-lg
    font-normal
    cursor-pointer		
`;
