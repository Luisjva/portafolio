import { motion } from "framer-motion";
import "@/styles/contact.css";
import { contactMeList } from "@/constants/contactList";
import { ActionIcon } from "@mantine/core";

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

export const Contact = () => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="contact__container"
		>
			{contactMeList.map((item) => {
				console.log(item);
				// if (item.name === "Correo") {
				// 	return "hola";
				// }
				return (
					<motion.div key={item.name}>
						<ActionIcon
							variant="filled"
							color="#2f355199"
							style={{ width: "100%", height: "100%" }}
							radius={"1rem"}
							onClick={() => window.open(item.url)}
							aria-label={item.name}
						>
							{typeof item.icon === "string" ? (
								<img
									src={item.icon}
									style={{ width: "3rem", height: "3rem" }}
								/>
							) : (
								<item.icon style={{ width: "50%", height: "50%" }} />
							)}
						</ActionIcon>
					</motion.div>
				);
			})}
		</motion.div>
	);
};
