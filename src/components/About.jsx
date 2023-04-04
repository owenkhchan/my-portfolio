import React from "react";
import Image from "next/image";
import Me from "../assets/me.png";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<div className="uppercase text-xl tracking-widest text-[#87CEEB]">
						About
					</div>
					<h2 className="py-4">Who I am</h2>
					<p className="py-2 text-gray-600">// I am a passionate developer</p>
					<p className="py-2 text-gray-600">
						I always crave achieving and gaining more experience via joining all
						types of activities. I have acquired a significant amount of
						programming skill like C++, Python, Javascript etc. I used the
						techniques in several different projects like developing the mobile
						apps with swift or Flutter, using CakePHP or Next JS to develop
						website for the real life client, using CSS and JavaScript to create
						website with different animations.
					</p>
					<p className="py-2 text-gray-600">
						As I am passionate about IT, I have participated in different IT
						related jobs and activities such as I participated in several
						competitions of developing the mobile apps. I also worked for a
						part-time employee in a IT industry which related to hardware
						installation.
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						{/* Check out some of my latest Projects */}
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={Me} alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
