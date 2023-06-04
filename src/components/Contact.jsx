import tw from "tailwind-styled-components";
import React from "react";
import Link from "next/link";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import {
	H2,
	H3,
	HeaderWrapper,
	SubheaderWrapper,
	Subheaderline,
	PGrey,
	PBlack,
	Button,
} from "@/styles/components";

const Contact = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
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

		if (inputs.name && inputs.email && inputs.message) {
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
		<Wrapper id="contact">
			<HeaderWrapper>
				<H2>Contact me</H2>
				<SubheaderWrapper>
					<Subheaderline />
					<PGrey className="py-2">Let's chat</PGrey>
					<Subheaderline />
				</SubheaderWrapper>
			</HeaderWrapper>
			<ContactWrapper>
				{/* Left */}
				<LeftWrapper>
					<H3 className="text-center lg:text-left">Get in touch</H3>
					<Subheaderline className="mt-0.5 mx-auto lg:mx-0" />
					<PBlack className="mt-4 text-center lg:text-left">
						Feel free to reach out to me for any enquiries or opportunities.
					</PBlack>
					<div className="pt-12 flex flex-col gap-6 items-center lg:items-start">
						<CardWrapper>
							<AiOutlineMail size={35} />
							<PGrey>owenkhchan@gmail.com</PGrey>
						</CardWrapper>

						<CardWrapper>
							<BsPersonLinesFill size={35} />
							<PGrey>+61 04 0004 4495</PGrey>
						</CardWrapper>

						<CardWrapper>
							<AiFillLinkedin size={35} />
							<PGrey>
								<Link
									href="https://www.linkedin.com/in/owen-chan-993933251/"
									target="_blank"
								>
									www.linkedin.com/in/owen-chan-993933251/
								</Link>
							</PGrey>
						</CardWrapper>

						<CardWrapper>
							<FaGithub size={35} />
							<PGrey>
								<Link href="https://github.com/owenkhchan" target="_blank">
									https://github.com/owenkhchan
								</Link>
							</PGrey>
						</CardWrapper>
					</div>
				</LeftWrapper>

				{/* Right */}
				<ContactFormWrapper>
					<form onSubmit={(e) => onSubmitForm(e)}>
						<ContactFormItem>
							<Label>Name</Label>
							<Input
								id="name"
								type="text"
								value={inputs.name}
								onChange={handleChange}
								required
							/>
						</ContactFormItem>
						<ContactFormItem>
							<Label>Email</Label>
							<Input
								id="email"
								type="email"
								value={inputs.email}
								onChange={handleChange}
								required
							/>
						</ContactFormItem>
						<ContactFormItem>
							<Label>Message</Label>
							<Textarea
								id="message"
								rows={8}
								value={inputs.message}
								onChange={handleChange}
								required
							></Textarea>
						</ContactFormItem>
						<Button className="w-full p-4 mt-4">Send Message</Button>
						{form.state === "loading" ? (
							<AlertArea>Sending....</AlertArea>
						) : form.state === "error" ? (
							<AlertArea className="bg-red-100 border-red-300 text-red-500">
								{form.message}
							</AlertArea>
						) : (
							form.state === "success" && (
								<AlertArea className="bg-green-100 border-green-300 text-green-500">
									Sent successfully
								</AlertArea>
							)
						)}
					</form>
				</ContactFormWrapper>
			</ContactWrapper>
		</Wrapper>
	);
};

export default Contact;

export const Wrapper = tw.div`
	w-full
	min-h-screen	
	flex
	flex-col
	justify-center
`;

export const LeftWrapper = tw.div`
	col-span-3
	lg:col-span-2
	w-full
	h-full
	
`;

export const CardWrapper = tw.div`
	flex
	flex-row
	gap-4
	items-center	
`;

export const ContactWrapper = tw.div`
	grid
	lg:grid-cols-5
	gap-8
	mt-8
`;

export const ContactFormWrapper = tw.div`
	col-span-3
	w-full
	h-auto
`;

export const ContactFormItem = tw.div`
	flex 
	flex-col
	mb-4
`;

export const Label = tw.label`
	text-normal
`;

export const Input = tw.input`
	border
	rounded-lg
	p-3
`;

export const Textarea = tw.textarea`
	border
	rounded-lg
	py-2
	px-4
`;

export const AlertArea = tw.div`
	w-full
	border-2
	rounded-md
	mt-2
	py-2
	text-center
	bg-gray-100
	border-gray-300
	text-gray-500
`;
