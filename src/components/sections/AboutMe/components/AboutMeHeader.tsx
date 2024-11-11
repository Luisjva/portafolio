import { colors } from "@/config";
import { Badge, Box, Button, Flex, Group, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { container } from "../AboutMeOpen";

export const AboutMeHeader = () => (
	<motion.div
		variants={container}
		initial="hidden"
		animate="visible"
		className="about-me__header"
	>
		<Flex direction={"column"} gap={".75rem"}>
			<Box>
				<Badge variant="outline" color={"#000"} size="lg">
					Full stack developer
				</Badge>
			</Box>
			<Box>
				<Title>Desarrollador Frontend con 3 años de experiencia en React</Title>
			</Box>
			<Box>
				<Text color="#000a">
					Mi enfoque esta en combinar funcionalidad y diseño para ofrecer
					experiencias de usuario excepcionales que impulsan la eficiencia y la
					satisfacción del cliente.
				</Text>
			</Box>
			<Box>
				<Group justify="start" gap="xs">
					<Button radius={"md"} color={colors.primary} w={193}>
						Descubrir mas sobre mi
					</Button>
					<Button
						variant="transparent"
						radius={"md"}
						color={colors.primary}
						w={193}
					>
						Ver habilidades técnicas
					</Button>
				</Group>
			</Box>
		</Flex>
	</motion.div>
);
