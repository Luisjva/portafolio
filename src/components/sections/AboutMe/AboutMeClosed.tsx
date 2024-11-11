import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
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

export const AboutMeClosed = () => {
	return (
		<motion.div
			className="modal-closed"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={item}>
				<Flex gap={"sm"} align={"center"}>
					<Avatar src="/profile.JPG" alt="it's me" size={"lg"} />
					<Box>
						<Text style={{ fontWeight: 600, fontSize: "1.15rem" }}>
							Luis Villegas
						</Text>
						<Text style={{ color: "#fff7", fontSize: ".95rem" }}>
							Full stack programmer
						</Text>
					</Box>
				</Flex>
			</motion.div>
			<motion.div variants={item}>
				<Title style={{ fontWeight: 500, marginTop: "1rem" }}>
					Bienvenido a mi página
				</Title>
			</motion.div>
			<motion.div variants={item}>
				<Text style={{ marginTop: "1rem", color: "#fff7" }}>
					I&apos;m a digital designer, developer, and surfer from Malibu. In the
					digital world, I craft interfaces and dive into coding intricacies.
					waves.
				</Text>
			</motion.div>
		</motion.div>
	);
};
