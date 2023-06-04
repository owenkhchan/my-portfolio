import tw from "tailwind-styled-components";
import React from "react";
import {
	H2,
	HeaderWrapper,
	SubheaderWrapper,
	Subheaderline,
	PGrey,
} from "@/styles/components";

const Skills = () => {
	return (
		<Wrapper id="skills">
			<HeaderWrapper>
				<H2>Skills</H2>
				<SubheaderWrapper>
					<Subheaderline />
					<PGrey className="py-2">My Technical Skills</PGrey>
					<Subheaderline />
				</SubheaderWrapper>
			</HeaderWrapper>
			<div className="grid lg:grid-cols-2 lg:gap-16">
				{/* Front-end Development */}
				<SkillWrapper>
					<SkillHeaderWrapper>Front-end Development</SkillHeaderWrapper>
					<SkillContentWrapper>
						<h3>HTML</h3>
						<h3>CSS</h3>
						<h3>JavaScript</h3>
						<h3>ReactJS</h3>
						<h3>NextJS</h3>
						<h3>TailwindCSS</h3>
						<h3>Bootstrap</h3>
					</SkillContentWrapper>
				</SkillWrapper>

				{/* Back-end Development */}
				<SkillWrapper>
					<SkillHeaderWrapper>Back-end Development</SkillHeaderWrapper>
					<SkillContentWrapper>
						<h3>PHP</h3>
						<h3>Python</h3>
						<h3>SQL</h3>
						<h3>MySQL</h3>
						<h3>Oracle SQL</h3>
						<h3>Firebase</h3>
						<h3>AWS</h3>
					</SkillContentWrapper>
				</SkillWrapper>
			</div>
		</Wrapper>
	);
};

export default Skills;

export const Wrapper = tw.div`
	w-full
	min-h-screen	
	flex
	flex-col
	justify-center
`;

const SkillWrapper = tw.div`
	border-2
	rounded-xl
	hover:scale-105
	ease-in
	duration-200
	mt-16
`;

const SkillHeaderWrapper = tw.div`
	flex
	justify-center
	items-center
	text-lg
	rounded-t-xl
	p-8
`;

const SkillContentWrapper = tw.div`
	flex
	flex-col
	items-center
	justify-center
	h-fit
	pb-8
	space-y-2
`;
