import { motion } from "framer-motion";
import { ActionIcon, Box, Text } from "@mantine/core";
// import { AboutMeClosed } from "./AboutMeClosed";
// import { AboutMeOpen } from "./AboutMeOpen";
import { colors } from "@/config";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MouseEventHandler, useEffect, useState } from "react";

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
	handleClosed: MouseEventHandler<HTMLButtonElement> | undefined;
}> = ({ open, handleClosed }) => {
	const [delayOpen, setDelayOpen] = useState(open);

	useEffect(() => {
		setTimeout(() => {
			setDelayOpen(open);
		}, 500);
	}, [open]);

	return (
		<div className={`modal__closed--default ${open && "modal__open--default"}`}>
			{open ? (
				<Box style={{ position: "relative" }}>
					<Box
						style={{
							position: "sticky",
							margin: "1rem 0vw",
							top: "1rem",
							zIndex: 100,
							display: "flex",
							justifyContent: "end",
						}}
					>
						<ActionIcon
							variant="filled"
							aria-label="Settings"
							onClick={handleClosed}
							color={colors.primary}
							style={{ position: "absolute", right: "-5vw" }}
						>
							<XMarkIcon style={{ width: "70%", height: "70%" }} />
						</ActionIcon>
					</Box>
				</Box>
			) : (
				""
			)}
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
