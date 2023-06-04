import tw from "tailwind-styled-components";
import React from "react";
import Image from "next/image";
import Me from "../assets/realme.jpg";
import {
	H2,
	H3,
	HeaderWrapper,
	SubheaderWrapper,
	Subheaderline,
	PGrey,
	PBlack,
} from "@/styles/components";

const About = () => {
	return (
		<Wrapper id="about">
			<HeaderWrapper>
				<H2>
					About <span className="text-[#DDB3E3]">me</span>
				</H2>
				<SubheaderWrapper>
					<Subheaderline />
					<PGrey className="py-2">My Introduction</PGrey>
					<Subheaderline />
				</SubheaderWrapper>
			</HeaderWrapper>
			<AboutWrapper>
				<AboutContentWrapper>
					<div>
						<H3>Personal Info</H3>
						<Subheaderline className="mt-0.5 mx-auto lg:mx-0" />
					</div>
					<AboutInfoWrapper>
						<PBlack>
							First Name: <span className="font-bold">Owen</span>
						</PBlack>
						<PBlack>
							Last Name: <span className="font-bold">Chan</span>
						</PBlack>
						<PBlack>
							Age: <span className="font-bold">21 Years</span>
						</PBlack>
						<PBlack>
							Nationality: <span className="font-bold">Hong Kong</span>
						</PBlack>
						<PBlack>
							Freelance: <span className="font-bold">Available</span>
						</PBlack>
						<PBlack>
							Full-time: <span className="font-bold">Available</span>
						</PBlack>
						<PBlack>
							Phone: <span className="font-bold">04 0004 4495</span>
						</PBlack>
						<PBlack>
							Email: <span className="font-bold">owenkhchan@gmail.com</span>
						</PBlack>
						<PBlack className="md:col-span-2">
							Languages:{" "}
							<span className="font-bold">Chinese, Cantonese, English</span>
						</PBlack>
					</AboutInfoWrapper>
				</AboutContentWrapper>
				<Image
					src={Me}
					alt="me"
					className="object-cover col-span-2 lg:col-span-1 mx-auto lg:mx-0 border-8 border-[#F0F0F0] rounded-md hover:scale-110 duration-200"
					style={{ width: "auto", height: "60vh" }}
				/>
			</AboutWrapper>
		</Wrapper>
	);
};

export default About;

export const Wrapper = tw.div`
	w-full
	min-h-screen	
	flex
	flex-col
	justify-center
`;

const AboutWrapper = tw.div`
	grid
	lg:grid-cols-3
	gap-4
	mt-8
`;

const AboutContentWrapper = tw.div`
	col-span-2
	text-center
	lg:text-left
`;

const AboutInfoWrapper = tw.div`
	grid
	grid-cols-1	
	md:grid-cols-2
	gap-x-5
	gap-y-8
	py-8
`;
