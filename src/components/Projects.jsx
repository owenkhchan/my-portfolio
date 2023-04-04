import React from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "../assets/me.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#87CEEB]">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Property Finder"
						backgroundImg={Me}
						projectUrl="/"
					/>
					<ProjectItem
						title="Property Finder"
						backgroundImg={Me}
						projectUrl="/"
					/>
					<ProjectItem
						title="Property Finder"
						backgroundImg={Me}
						projectUrl="/"
					/>
					<ProjectItem
						title="Property Finder"
						backgroundImg={Me}
						projectUrl="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
