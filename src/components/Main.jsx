import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
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
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Welcome to my portfolio
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#87CEEB]">Owen</span>
					</h1>
					<h1 className="py-4 text-gray-700">A Full-stack Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I'm a graduated student from Monash University with experience
						gained in several team projects. Highly organised and resourceful
						and keen to take on new challenges. Looking for a role in software
						development or full stack web development to gain more experience in
						developing.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<Link
							target="_blank"
							href="https://www.linkedin.com/in/owen-chan-993933251/"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</Link>

						<Link target="_blank" href="https://github.com/owenkhchan">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</Link>

						<div
							onClick={handleCopyEmail}
							className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
						>
							<AiOutlineMail />
						</div>
						<div
							onClick={handleCopyContact}
							className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
						>
							<BsPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Main;
