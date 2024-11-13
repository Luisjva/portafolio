import { projectList } from "@/constants/projectsList";
import React, { useState } from "react";

export const ProjectsImgList: React.FC<{
	projectActiveId: number;
	open: boolean;
	changeProjectActiveId: (newIndex: any) => void;
}> = ({ projectActiveId, changeProjectActiveId }) => {
	const [projectsListSort, setProjectList] = useState(projectList);

	const handleClickImg = (projectActive: any) => {
		const projectIndex = projectList.findIndex(
			(item) => item.id === projectActive.id
		);
		const part1 = projectList.slice(projectIndex);
		const part2 = projectList.slice(0, projectIndex);

		const list = part1.concat(part2);

		console.log(list);

		setProjectList(() => {
			return projectList.map((item) => {
				item.position = list.findIndex((project) => item.id === project.id);

				return item;
			});
		});
	};

	return (
		<>
			{projectsListSort.map((item) => (
				<img
					key={item.id}
					src={item.img}
					alt={`imagen del proyecto ${item.name}`}
					className="projects__image"
					style={{
						width: item.position === 0 ? "40%" : "17.5%",
						height: item.position === 0 ? "100%" : "50%",
						top: item.position === 0 ? "0%" : "50%",
						left:
							item.position === 0
								? "0%"
								: `calc(45% + ${(item.position - 1) * 19}%)`,
						zIndex: 1000 / item.position,
					}}
					onClick={() => handleClickImg(item)}
				/>
			))}
		</>
	);
};
