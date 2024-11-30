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
				Mis inicios
			</Text>
			<Text
				style={{
					fontSize: "1.4rem",
					fontWeight: 800,
				}}
				mt={".25rem"}
			>
				La pandemia transformó la vida de muchas personas. En mi caso, fue el
				punto de partida para adentrarme en el mundo de la programación.
			</Text>
			<Text
				mt={"1rem"}
				style={{
					fontSize: ".9rem",
					opacity: 0.8,
				}}
			>
				Cuando comenzó la pandemia y tuve mucho tiempo libre, decidí aprender{" "}
				<b>HTML</b> a través de cursos en YouTube con la idea de crear páginas
				web atractivas. Al principio, mis páginas no eran muy llamativas, pero
				al aprender <b>CSS</b> y poder agregar estilos, todo mejoró
				considerablemente. Sin embargo, aún necesitaba mejorar mucho mis
				habilidades de programación.
				<br />
				<br />
				En ese momento, todo era por diversión, pero al empezar a aprender{" "}
				<b>JavaScript</b> y descubrir todo su potencial, decidí dedicarme de
				manera más seria al mundo de la programación. Aprendí los principios
				básicos de <b>JavaScript</b> y comencé a estudiar <b>React</b>.
				<br />
				<br />
				Con el tiempo, adquirí un sólido dominio de librerías frontend como
				React, Vue y Next.js. Creé varios proyectos personales para construir un
				pequeño portafolio, lo que me permitió emprender la búsqueda de mi
				primera experiencia laboral.
			</Text>
		</Box>
	</motion.div>
);
