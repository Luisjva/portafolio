import { projectList } from "@/constants/projectsList";
import { Button, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "@/styles/projects.css";
import { ProjectsImgList } from "./components/ProyectsImgList";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,

		transition: {
			delay: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.5,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const ProjectsContents: React.FC<{ open: boolean }> = ({ open }) => {
	const [projectActive, setProjectActive] = useState(projectList[0]);

	const changeProjectActiveId = (newId: any) => {
		const container = document.querySelector(".projects__content");

		container?.scroll({ top: 0 });

		setProjectActive(newId);
	};

	return (
		<motion.div
			className={`modal-closed ${open && "modal-open open"}`}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={item}>
				<Text style={{ fontWeight: 600, fontSize: "1.2rem" }}>Proyectos</Text>
			</motion.div>
			<motion.div variants={item} className="projects__container">
				<div className="projects__content">
					<div className="projects__info">
						<ProjectsImgList changeProjectActiveId={changeProjectActiveId} />
						<h3>{projectActive.name}</h3>
						<p className="projects__content__technologies">
							{projectActive.technologies.map((value) => (
								<span key={value}>{value}</span>
							))}
						</p>
						<div>{projectActive.description()}</div>
					</div>
					<div className="projects__content__actions">
						<Button color="#fff5" radius={"md"}>
							Ver código
						</Button>
						<Button color="#fff5" radius={"md"}>
							Ver proyecto
						</Button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};
