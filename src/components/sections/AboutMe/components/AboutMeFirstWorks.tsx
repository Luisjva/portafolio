import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { container } from "../AboutMeContent";

export const AboutMeFirstWorks = () => (
	<motion.div
		variants={container}
		initial="hidden"
		animate="visible"
		className="about-me__first-works"
	>
		<Box
			style={{
				maxWidth: 500,
			}}
		>
			<Box>
				<Text
					style={{
						fontSize: ".8rem",
						opacity: 0.8,
					}}
				>
					Primeras experiencias laborales
				</Text>
				<Text
					style={{
						fontSize: "1.4rem",
						fontWeight: 800,
					}}
					mt={".25rem"}
				>
					Buscar trabajo no fue una tarea fácil, pero con perseverancia y
					determinación, todo es posible
				</Text>
				{/* <Button
					variant="light"
					rightSection={<ArrowRightIcon width="1rem" />}
					color={colors.blue.light}
					mt={"1rem"}
				>
					Ver toda la experiencia laboral
				</Button> */}
			</Box>
		</Box>
	</motion.div>
);
