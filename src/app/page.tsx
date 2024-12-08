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
			const homeContainer = document.querySelector(".home");
			const handleScroll = () => {
				setScrollTop(homeContainer?.scrollTop || 0);
			};
			// Agregar el event listener
			window.addEventListener("resize", handleScroll);
			homeContainer?.addEventListener("scroll", handleScroll);
			// Limpiar el event listener cuando el componente se desmonte
			return () => {
				window.removeEventListener("resize", handleScroll);
				homeContainer?.removeEventListener("scroll", handleScroll);
			};
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
			<HomeContainer
				name={"skills"}
				Section={Skills}
				cantOpen={true}
				scrollTop={scrollTop}
			/>
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
			<HomeContainer name={"cv"} Section={Cv} scrollTop={scrollTop} />
			<HomeContainer
				name={"contact"}
				Section={Contact}
				cantOpen={true}
				scrollTop={scrollTop}
			/>
		</main>
	);
}
