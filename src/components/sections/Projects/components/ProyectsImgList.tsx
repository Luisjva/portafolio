import { projectList } from "@/constants/projectsList";
import { Skeleton } from "@mantine/core";
import React, { useState } from "react";

export const ProjectsImgList: React.FC<{
	changeProjectActiveId: (newIndex: any) => void;
}> = ({ changeProjectActiveId }) => {
	const [projectsListSort, setProjectList] = useState(projectList);

	const handleClickImg = (projectActive: any) => {
		const projectIndex = projectList.findIndex(
			(item) => item.id === projectActive.id
		);
		const part1 = projectList.slice(projectIndex);
		const part2 = projectList.slice(0, projectIndex);

		const list = part1.concat(part2);

		setProjectList(() => {
			return projectList.map((item) => {
				item.position = list.findIndex((project) => item.id === project.id);

				return item;
			});
		});
		changeProjectActiveId(projectActive);
	};

	return (
		<>
			{projectsListSort.map((item) => (
				<>
					{item?.inProgress ? (
						<div
							className={`projects__image p${item.position} projects__image__skeleton`}
							onClick={() => handleClickImg(item)}
						>
							This project is in progress
						</div>
					) : (
						<img
							key={item.id}
							onClick={() => handleClickImg(item)}
							src={item.img}
							alt={`imagen del proyecto ${item.name}`}
							className={`projects__image p${item.position}`}
						/>
					)}
				</>
			))}
		</>
	);
};
