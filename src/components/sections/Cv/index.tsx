import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

export const Cv: React.FC<{
	open: boolean;
}> = ({ open }) => {
	const [delayOpen, setDelayOpen] = useState(open);

	useEffect(() => {
		setTimeout(() => {
			setDelayOpen(open);
		}, 500);
	}, [open]);

	return (
		<div className={`modal__closed--default ${open && "modal__open--default"}`}>
			<motion.div
				variants={container}
				initial="hidden"
				animate="visible"
				className="home__cv"
				style={{
					height: "100%",
				}}
			>
				<motion.div variants={item} style={{ height: "100%" }}>
					{delayOpen ? (
						<embed
							src="pdf.pdf"
							width="100%"
							height="100%"
							type="application/pdf"
						/>
					) : (
						<>
							<img
								src="/cv.jpeg"
								width="100%"
								height="100%"
								style={{
									objectFit: "cover",
									objectPosition: "top",
								}}
							/>
							<Box
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									top: 0,
									left: 0,
									background: "#1d213399",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontSize: "2rem",
								}}
							>
								<Text style={{ fontWeight: 600, fontSize: "100%" }}>
									Curriculum
								</Text>
							</Box>
						</>
					)}
				</motion.div>
			</motion.div>
		</div>
	);
};
