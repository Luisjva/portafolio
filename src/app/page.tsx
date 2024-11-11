"use client";
import { HomeContainer } from "@/components";
import "../styles/home.css";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { colors } from "@/config";

export default function Home() {
	return (
		<main
			className={"home"}
			style={{
				background: `linear-gradient(180deg, ${colors.primary} -6.42%, ${colors.blue.light} 121.12%)`,
			}}
		>
			<HomeContainer name={"about-me"} Section={AboutMe} />
			<HomeContainer name={"experience"} Section={Experience} />
			{/* 
			<HomeContainer name={"education"} />
			<HomeContainer name={"projects"} />
			<HomeContainer name={"skill"} />
			<HomeContainer name={"contact"} />
			<HomeContainer name={"cv"} /> 
			*/}
		</main>
	);
}
