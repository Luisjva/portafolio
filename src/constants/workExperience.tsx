import {
	BoltIcon,
	BuildingLibraryIcon,
	MegaphoneIcon,
} from "@heroicons/react/24/solid";
import { ForwardRefExoticComponent, SVGProps } from "react";

export const workExperience = [
	{
		enterpriseName: "Nolatech",
		durationTime: "Enero 2023 - Actualidad",
		location: "Remoto",
		jobDescriptionShort:
			"Desarrolle diversos Paneles Administrativos (HUB/CMS) con features bajo demanda, para múltiples clientes, con el objetivo de manejar información de alto impacto realizados con React.js y Next.js, con herramientas como Redux, Mui, Mantine, entre otras",
		jobDescription: (
			<>
				Desarrolle diversos Paneles Administrativos (HUB/CMS) con features bajo
				demanda, para múltiples clientes, con el objetivo de manejar información
				de alto impacto realizados con React.js y Next.js, con herramientas como
				Redux, Mui, Mantine, entre otras
			</>
		),
		icon: BoltIcon,
	},
	{
		enterpriseName: "Trabajos Freelancer",
		durationTime: "Enero 2023 - Actualidad",
		location: "Remoto",
		jobDescription: <>hola</>,
		jobDescriptionShort:
			"Se satisficieron las necesidades de ciertos clientes con diseños y desarrollos web y móviles, utilizando React.js y Next.js",
		icon: MegaphoneIcon,
	},
	{
		enterpriseName: "Trabajos Freelancer",
		durationTime: "Enero 2023 - Actualidad",
		location: "Remoto",
		jobDescription: <>hola</>,
		jobDescriptionShort:
			"Se satisficieron las necesidades de ciertos clientes con diseños y desarrollos web y móviles, utilizando React.js y Next.js",
		icon: BuildingLibraryIcon,
	},
] as {
	enterpriseName: string;
	durationTime: string;
	location: "Remoto";
	jobDescriptionShort: string;
	jobDescription: JSX.Element;
	icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}[];
