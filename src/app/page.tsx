"use client";
import { HomeContainer } from "@/components";
import "../styles/home.css";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { colors } from "@/config";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Referencies } from "@/components/sections/Referencies";
import { Contact } from "@/components/sections/Contact";
import { Cv } from "@/components/sections/Cv";
import { useEffect, useState } from "react";

export default function Home() {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const init = () => {
			const home = document.querySelector(".home");
			home?.addEventListener("scroll", () => {
				setScrollTop(home.scrollTop);
			});
			home?.addEventListener("resize", () => {
				setScrollTop(home.scrollTop);
			});
		};
		init();
	}, []);

	return (
		<main
			className="home"
			style={{
				background: `linear-gradient(180deg, ${colors.primary} -6.42%, ${colors.blue.light} 121.12%)`,
			}}
		>
			<HomeContainer
				name={"about-me"}
				Section={AboutMe}
				scrollTop={scrollTop}
			/>
			<HomeContainer
				name={"experience"}
				Section={Experience}
				scrollTop={scrollTop}
			/>
			<HomeContainer name={"skills"} Section={Skills} cantOpen={true} />
			<HomeContainer
				name={"projects"}
				Section={Projects}
				scrollTop={scrollTop}
			/>
			<HomeContainer
				name={"referencies"}
				Section={Referencies}
				scrollTop={scrollTop}
			/>
			<HomeContainer name={"cv"} Section={Cv} />
			<HomeContainer name={"contact"} Section={Contact} cantOpen={true} />
		</main>
	);
}
