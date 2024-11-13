"use client";
import { HomeContainer } from "@/components";
import "../styles/home.css";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { colors } from "@/config";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

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
			<HomeContainer name={"skills"} Section={Skills} />
			<HomeContainer name={"projects"} Section={Projects} />
			{/* 
				<HomeContainer name={"referencies"} Section={Experience} />
				<HomeContainer name={"contact"} Section={Experience} />
				<HomeContainer name={"cv"} Section={Experience} /> 
			*/}
		</main>
	);
}
