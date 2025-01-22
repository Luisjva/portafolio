import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { container } from "../AboutMeContent";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const AboutMeMyBeginnings = () => (
	<motion.div
		variants={container}
		initial="hidden"
		animate="visible"
		className="about-me__beginnings"
	>
		{/* <Box
			style={{
				position: "relative",
				height: "35vw",
				width: "35vw",
				maxHeight: 500,
				maxWidth: 500,
				margin: "auto",
			}}
		>
			<Box
				style={{
					position: "absolute",
					right: "0",
					height: "80%",
					width: "55%",
					background: "#2a2a2a",
					zIndex: 1,
				}}
			>
				<Box
					style={{
						position: "relative",
						margin: "2.5%",
						width: "95%",
						height: "95%",
					}}
				>
					<Box
						style={{
							position: "absolute",
							top: "0",
							zIndex: 1,
							background: "linear-gradient(#2a2a2a,  #2a2a2aaa, #0000)",
							width: "100%",
							padding: ".5em",
							height: "4rem",
							fontSize: ".8rem",
						}}
					>
						Mi primera pagina con HTML y CSS
					</Box>
					<Image
						src="/first-proyect.jpeg"
						alt="Picture of the author"
						fill={true}
						style={{ objectFit: "cover", objectPosition: "top" }}
					/>
				</Box>
			</Box>
			<Box
				style={{
					position: "absolute",
					bottom: "0",
					height: "80%",
					width: "60%",
					background: "#2a2a2a",
				}}
			>
				<Box
					style={{
						position: "relative",
						margin: "2.5%",
						width: "95%",
						height: "95%",
					}}
				>
					<Image
						src="/first-office.jpg"
						alt="Picture of the author"
						fill={true}
						style={{ objectFit: "cover", filter: "grayscale(25%)" }}
					/>
					<Box
						style={{
							position: "absolute",
							bottom: "0",
							zIndex: 1,
							background: "linear-gradient(#0000, #2a2a2aee)",
							width: "100%",
							padding: "0 .5em",
							height: "4rem",
							display: "flex",
							alignItems: "end",
							fontSize: ".8rem",
						}}
					>
						Mi primer set up
					</Box>
				</Box>
			</Box>
		</Box> */}

		<PhotoProvider>
			<Box className="about-me__beginnings__images">
				<PhotoView src={"/proy7.webp"}>
					<Box className="big">
						<Image
							src="/proy7.webp"
							alt="Picture of the author"
							fill={true}
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</Box>
				</PhotoView>

				<PhotoView src={"/first-proyect.jpeg"}>
					<Box className="secondary">
						<Image
							src="/first-proyect.jpeg"
							alt="Picture of the author"
							fill={true}
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</Box>
				</PhotoView>
				<PhotoView src={"/proy4.webp"}>
					<Box className="last">
						<Image
							src="/proy4.webp"
							alt="Picture of the author"
							fill={true}
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</Box>
				</PhotoView>
			</Box>
		</PhotoProvider>

		<Box>
			<Text
				style={{
					fontSize: ".8rem",
					opacity: 0.8,
				}}
			>
				My beginnings
			</Text>
			<Text
				style={{
					fontSize: "1.4rem",
					fontWeight: 800,
				}}
				mt={".25rem"}
			>
				The pandemic transformed many people's lives. In my case, it was the
				starting point for diving into the world of programming.
			</Text>
			<Text
				mt={"1rem"}
				style={{
					fontSize: ".9rem",
					opacity: 0.8,
				}}
			>
				When the pandemic started and I had a lot of free time, I decided to
				learn <b>HTML</b> through YouTube courses with the idea of creating
				attractive websites. At first, my pages weren't very appealing, but
				after learning <b>CSS</b> and being able to add styles, everything
				improved considerably. However, I still needed to improve my programming
				skills significantly.
				<br />
				<br />
				At that time, it was all for fun, but when I started learning{" "}
				<b>JavaScript</b> and discovered its full potential, I decided to take
				programming more seriously. I continued deepening my knowledge and began
				studying <b>React</b>.
				<br />
				<br />
				Over time, I gained solid mastery of frontend libraries like React, Vue,
				and Next.js. I created several personal projects to build a small
				portfolio, which allowed me to start searching for my first work
				experience.
			</Text>
		</Box>
	</motion.div>
);
