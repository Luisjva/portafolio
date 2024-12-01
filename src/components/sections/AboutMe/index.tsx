import "@/styles/modals.css";
import { AboutMeContent } from "./AboutMeContent";

export const AboutMe: React.FC<{
	open: boolean;
}> = ({ open }) => {
	return (
		<div className={`modal__closed--default ${open && "modal__open--default"}`}>
			<AboutMeContent open={open} />
		</div>
	);
};
