import { colors } from "@/config";
import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { container } from "../AboutMeContent";

export const AboutMeHeader: React.FC<{ open: boolean }> = ({ open }) => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className={`about-me__header ${open && "open"}`}
		>
			<div
				className={`about-me__header__image ${
					open && "about-me__header__image--open"
				}`}
			></div>
			<Box className={"about-me__header__container"}>
				{!open && (
					<Box className="about-me__header__name">
						<Text style={{ fontWeight: 600, fontSize: "1.15rem" }}>
							Luis Villegas
						</Text>
						<Text
							style={{ color: open ? "#000c" : "#fff7", fontSize: ".95rem" }}
						>
							Full stack programmer
						</Text>
					</Box>
				)}
				<Text
					style={{
						color: open ? colors.primary : "#fff",
						fontWeight: 600,
						transition: "color .6s",
						// width: open ? "50%" : "100%",
					}}
					className="about-me__header__title"
				>
					Desarrollador Frontend con 3 años de experiencia en React
				</Text>
				<Text
					color={open ? "#000c" : "#fff"}
					mt={".5rem"}
					className="about-me__header__content"
				>
					Mi enfoque esta en combinar funcionalidad y diseño para ofrecer
					experiencias de usuario excepcionales que impulsan la eficiencia y la
					satisfacción del cliente.
				</Text>
				{/* {open && (
					<Box mt={"1rem"}>
						<Group justify="start" gap="xs">
							<Button radius={"md"} color={colors.primary} w={193}>
								Experiencia laboral
							</Button>
							<Button
								variant="transparent"
								radius={"md"}
								color={colors.blue.dark}
								w={193}
							>
								Ver referencias personales
							</Button>
						</Group>
					</Box>
				)} */}
			</Box>
		</motion.div>
	);
};
