import { Text, Timeline } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

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

export const SkillsContents: React.FC<{ open: boolean }> = ({ open }) => {
	// const [openDelay, setOpenDelay] = useState(open);

	// useEffect(() => {
	// 	if (open) {
	// 		setOpenDelay(open);
	// 	} else {
	// 		setTimeout(() => {
	// 			setOpenDelay(open);
	// 		}, 400);
	// 	}
	// }, [open, setOpenDelay]);

	return (
		<motion.div
			className={`modal-closed ${open && "modal-open"}`}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={item}>
				<Text style={{ fontWeight: 600, fontSize: "1.2rem" }}>
					Habilidades técnicas
				</Text>
			</motion.div>
			<motion.div variants={item}>
				<Timeline
					active={3}
					lineWidth={3}
					style={{
						marginTop: ".5rem",
					}}
				></Timeline>
			</motion.div>
		</motion.div>
	);
};
