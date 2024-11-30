import { AboutMeHeader as Header } from "./components/AboutMeHeader";
import { AboutMeMyBeginnings as Beginnings } from "./components/AboutMeMyBeginnings";
import "./AboutMe.css";
import { AboutMeFirstWorks as FirstWorks } from "./components/AboutMeFirstWorks";

export const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,

		transition: {
			delay: 0.75,
			delayChildren: 1,
			staggerChildren: 0.6,
		},
	},
};

export const AboutMeContent: React.FC<{ open: boolean }> = ({ open }) => {
	return (
		<div className={`about-me ${open && "open"}`}>
			<Header open={open} />
			{open && (
				<>
					<Beginnings />
					<FirstWorks />
				</>
			)}
		</div>
	);
};
