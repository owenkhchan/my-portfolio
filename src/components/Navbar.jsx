import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navlogo from "../assets/navlogo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

	const [contactInfo, setContactInfo] = useState("+61 04 0004 4495");
	const [emailInfo, setEmailInfo] = useState("owenkhchan@gmail.com");

	const handleCopyEmail = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(emailInfo);
			toast.success("Email information has been copied to clipboard!", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
	};

	const handleCopyContact = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(contactInfo);
			toast.success("Contact information has been copied to clipboard!", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
	};

	return (
		<div
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100]"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-4 bg-[#ecf0f3]">
				<Image src={Navlogo} alt="" width={60} height={45} />
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						{/* <Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link> */}
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image src={Navlogo} alt="/" width={60} height={45} />
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">Welcome to my portfolio</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/#about">
								<li className="py-4 text-sm">About</li>
							</Link>
							<Link href="/#skills">
								<li className="py-4 text-sm">Skills</li>
							</Link>
							{/* <Link href="/#projects">
								<li className="py-4 text-sm">Projects</li>
							</Link> */}
							<Link href="/#contact">
								<li className="py-4 text-sm">Contact</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								Connect with me
							</p>
							<div className="flex item-center justify-between my-4 sm:w-[80%]">
								<Link
									target="_blank"
									href="https://www.linkedin.com/in/owen-chan-993933251/"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaLinkedinIn />
									</div>
								</Link>

								<Link target="_blank" href="https://github.com/owenkhchan">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaGithub />
									</div>
								</Link>
								<div
									onClick={handleCopyEmail}
									className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
								>
									<AiOutlineMail />
								</div>
								<div
									onClick={handleCopyContact}
									className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
								>
									<BsPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Navbar;
