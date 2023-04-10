import React from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "../assets/realme.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
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

	const [inputs, setInputs] = useState({
		name: "",
		phone: "",
		email: "",
		subject: "",
		message: "",
	});

	const [form, setForm] = useState("");

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		if (
			inputs.name &&
			inputs.email &&
			inputs.message &&
			inputs.subject &&
			inputs.phone
		) {
			setForm({ state: "loading" });
			try {
				const res = await fetch(`api/contact`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(inputs),
				});

				const { error } = await res.json();

				if (error) {
					setForm({
						state: "error",
						message: error,
					});
					return;
				}

				setForm({
					state: "success",
					message: "Your message was sent successfully.",
				});
				setInputs({
					name: "",
					email: "",
					message: "",
					subject: "",
					phone: "",
				});
			} catch (error) {
				setForm({
					state: "error",
					message: "Something went wrong",
				});
			}
		}
	};

	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tracking-widest uppercase text-[#87CEEB]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={Me}
									alt="/"
								/>
							</div>
							<div className="pb-16">
								<h2 className="py-4">Owen Chan</h2>
								<p>Full-stack Developer</p>
								<p className="py-4">
									I am avaiable for freelance or full-time positions. Contact me
									and let's talk.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect With Me</p>
								<div className="flex items-center justify-between py-4">
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
					</div>

					{/* Right */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form onSubmit={(e) => onSubmitForm(e)}>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label htmlFor="" className="uppercase text-sm py-2">
											Name
										</label>
										<input
											id="name"
											type="text"
											className="border-2 rounded-lg p-3 flex border-gray-300"
											value={inputs.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="flex flex-col">
										<label htmlFor="" className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											id="phone"
											type="text"
											className="border-2 rounded-lg p-3 flex border-gray-300"
											value={inputs.phone}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label htmlFor="" className="uppercase text-sm py-2">
										Email
									</label>
									<input
										id="email"
										type="email"
										className="border-2 rounded-lg p-3 flex border-gray-300"
										value={inputs.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="flex flex-col py-2">
									<label htmlFor="" className="uppercase text-sm py-2">
										Subject
									</label>
									<input
										id="subject"
										type="text"
										className="border-2 rounded-lg p-3 flex border-gray-300"
										value={inputs.subject}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="flex flex-col py-2">
									<label htmlFor="" className="uppercase text-sm py-2">
										Message
									</label>
									<textarea
										id="message"
										type=""
										className="border-2 rounded-lg p-3 flex border-gray-300"
										rows={15}
										value={inputs.message}
										onChange={handleChange}
										required
									></textarea>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">
									Send Message
								</button>
								{form.state === "loading" ? (
									<div>Sending....</div>
								) : form.state === "error" ? (
									<div>{form.message}</div>
								) : (
									form.state === "success" && <div>Sent successfully</div>
								)}
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-[#87CEEB]" size={15} />
						</div>
					</Link>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Contact;
