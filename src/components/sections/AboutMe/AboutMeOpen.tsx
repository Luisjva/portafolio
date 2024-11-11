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
			delay: 1,
			delayChildren: 1,
			staggerChildren: 0.6,
		},
	},
};

// const item = {
// 	hidden: { y: 20, opacity: 0 },
// 	visible: {
// 		y: 0,
// 		opacity: 1,
// 	},
// };

export const AboutMeOpen = () => {
	return (
		<div className="about-me">
			<Header />
			<Beginnings />
			<FirstWorks />
		</div>
	);
};
