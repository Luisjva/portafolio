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
			</head>
			<body>
				<MantineProvider theme={theme}>{children}</MantineProvider>
			</body>
		</html>
	);
}
