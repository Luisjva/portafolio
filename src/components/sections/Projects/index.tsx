import { ProjectsContents } from "./ProjectsContents";

export const Projects: React.FC<{
	open: boolean;
}> = ({ open }) => {
	return (
		<div className={`modal__closed--default ${open && "modal__open--default"}`}>
			<ProjectsContents open={open} />
		</div>
	);
};
