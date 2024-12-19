import "@mantine/core/styles.css";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="theme-color" content="#2F3551" />
				<title>Portafolio - Luis Villegas</title>
				<meta
					name="description"
					content="Portafolio de un desarrollador web especializado en React. Explora proyectos innovadores y de alto rendimiento que demuestran habilidades avanzadas en desarrollo frontend y backend, optimización del rendimiento y diseño de interfaces intuitivas."
				/>
			</head>
			<body>
				<MantineProvider theme={theme}>{children}</MantineProvider>
			</body>
		</html>
	);
}
