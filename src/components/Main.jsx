import React from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Button, H1, PBlack, PGrey } from "@/styles/components";
import Image from "next/image";
import Cover from "../assets/cover.png";

const Main = () => {
	return (
		<Wrapper id="home">
			<LeftWrapper>
				<PGrey>Welcome to my portfolio!</PGrey>
				<H1>Owen Chan 👋</H1>
				<div className="flex flex-row lg:space-x-2">
					<div className="h-px w-14 bg-black text-center mt-3.5 hidden lg:block"></div>
					<PBlack>Web developer</PBlack>
				</div>
				<PGrey className="pt-8 px-10 lg:px-0">
					I'm a motivated developer based in Melbourne, and I'm very passionate
					and dedicated about building gorgeous softwares and websites.
				</PGrey>
				<SocialWrapper>
					<Link href="https://github.com/owenkhchan" target="_blank">
						<FaGithub size={35} className="cursor-pointer" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/owen-chan-993933251/"
						target="_blank"
					>
						<AiFillLinkedin size={35} className="cursor-pointer" />
					</Link>
				</SocialWrapper>
				<Button>Let's have a chat!</Button>
			</LeftWrapper>
			<RightWrapper>
				<Image
					src={Cover}
					alt="cover"
					className="object-cover mt-16"
					style={{ width: "auto", height: "80vh" }}
				/>
			</RightWrapper>
		</Wrapper>
	);
};

export default Main;

export const Wrapper = tw.div`
  flex
  min-h-screen
  h-auto
  justify-between
  mt-16
`;

export const LeftWrapper = tw.div`
  lg:w-5/12
  w-full
  mt-24
  flex
  flex-col
  space-y-3
  lg:text-left
  lg:items-start
  text-center
  items-center
`;

export const RightWrapper = tw.div`  
  w-auto
  hidden
  lg:block
`;

export const SocialWrapper = tw.div`
  flex
  space-x-12
  py-8
  float-right
`;
