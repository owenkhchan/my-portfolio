import React from "react";
import Image from "next/image";
import images from "./ImageData";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#87CEEB]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={images["html.png"]}
									alt="/"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={images["css.png"]} alt="/" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={images["javascript.png"]}
									alt="/"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={images["react.png"]}
									alt="/"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={images["nextjs.png"]}
									alt="/"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>NextJS</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={images["tailwind.png"]}
									alt="/"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Tailwind CSS</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={images["firebase.png"]}
									alt="/"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Firebase</h3>
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={images["github.png"]}
									alt="/"
									width={64}
									height={64}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>GitHub</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
