import { ExperienceClosed } from "./ExperienceContent";

export const Experience: React.FC<{
	open: boolean;
}> = ({ open }) => {
	return (
		<div className={`modal__closed--default ${open && "modal__open--default"}`}>
			<ExperienceClosed open={open} />
		</div>
	);
};
