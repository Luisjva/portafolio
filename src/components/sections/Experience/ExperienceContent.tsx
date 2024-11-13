import { workExperience } from "@/constants";
import { Text, Timeline } from "@mantine/core";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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

export const ExperienceClosed: React.FC<{ open: boolean }> = ({ open }) => {
	const [openDelay, setOpenDelay] = useState(open);

	useEffect(() => {
		if (open) {
			setOpenDelay(open);
		} else {
			setTimeout(() => {
				setOpenDelay(open);
			}, 400);
		}
	}, [open, setOpenDelay]);

	return (
		<motion.div
			className={`modal-closed ${open && "modal-open"}`}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={item}>
				<Text style={{ fontWeight: 600, fontSize: "1.2rem" }}>
					Experiencia laboral
				</Text>
			</motion.div>
			<motion.div variants={item}>
				<Timeline
					active={3}
					lineWidth={3}
					style={{
						marginTop: ".5rem",
					}}
				>
					{workExperience.map((item) => (
						<Timeline.Item
							key={item.enterpriseName}
							bullet={<item.icon />}
							title={item.enterpriseName}
							style={{
								color: "#fff",
							}}
						>
							{openDelay ? (
								item.jobDescription
							) : (
								<Text>
									{item.jobDescriptionShort.substring(0, 50)}
									{item.jobDescriptionShort.length > 50 ? "..." : ""}
								</Text>
							)}
						</Timeline.Item>
					))}
				</Timeline>
			</motion.div>
		</motion.div>
	);
};
