import { skillsList } from "@/constants/skillsList";
import { Badge, Box, Text } from "@mantine/core";
import { motion } from "framer-motion";

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

export const Skills = () => {
	return (
		<motion.div variants={container} initial="hidden" animate="visible">
			<motion.div variants={item}>
				<Text
					style={{ fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }}
				>
					Habilidades técnicas
				</Text>
			</motion.div>
			<motion.div variants={item}>
				<Box
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "left",
						gap: ".5rem",
						marginTop: "1rem",
					}}
				>
					{skillsList.map((item) => (
						<Badge variant="outline" color="blue" size="lg" key={item}>
							{item}
						</Badge>
					))}
				</Box>
			</motion.div>
		</motion.div>
	);
};
