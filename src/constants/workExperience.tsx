import {
	BoltIcon,
	BuildingLibraryIcon,
	MegaphoneIcon,
} from "@heroicons/react/24/solid";
import { List } from "@mantine/core";
import { ForwardRefExoticComponent, SVGProps } from "react";

export const workExperience = [
	{
		enterpriseName: "Nolatech",
		durationTime: "Enero 2023 - Actualidad",
		location: "Remoto",
		jobPosition: "Frontend Developer",
		jobDescriptionShort:
			"• Desarrolle diversos Paneles Administrativos (HUB/CMS) con features bajo demanda, para múltiples clientes, con el objetivo de manejar información de alto impacto realizados con React.js y Next.js, con herramientas como Redux, Mui, Mantine, entre otras",
		icon: BoltIcon,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Desarrolle diversos Paneles Administrativos (HUB/CMS)</b> con
					features bajo demanda, para múltiples clientes, con el objetivo de
					manejar información de alto impacto realizados con React.js y Next.js,
					con herramientas como Redux, Mui, Mantine, Socket.io, entre otras. La
					implementación de estos paneles aumentó la productividad de los
					clientes en un 30% al simplificar los flujos de trabajo y automatizar
					tareas repetitivas.
				</List.Item>
				<List.Item>
					<b>Optimicé de forma satisfactoria en un 50%</b> el rendimiento de 3
					proyectos existentes de la empresa a través de la modularización de
					los componentes existentes y adición de nuevos componentes.
				</List.Item>
				<List.Item>
					<b>Diseñé y desarrollé landing pages de alto impacto</b> con
					animaciones interactivas para productos y servicios de aplicaciones,
					logrando un aumento del 40% en la tasa de conversión de usuarios. Las
					animaciones cuidadosamente implementadas mejoran el atractivo de los
					servicios de los clientes, incrementando el tiempo de permanencia en
					un 25%.
				</List.Item>
				<List.Item>
					<b>
						Desarrollé una librería para agilizar la creación de Paneles
						administrativos para aplicaciones
					</b>
					, lo que mejoró considerablemente la velocidad de desarrollo en la
					empresa en este aspecto en específico.
				</List.Item>
				<List.Item>
					<b>
						Desarrollé versiones web de aplicaciones existentes en la empresa
					</b>
					, ampliando así su alcance y mejorando la interacción con los
					clientes, principalmente aplicaciones web de mensajería.
				</List.Item>
			</List>
		),
	},
	{
		enterpriseName: "Freelancer",
		durationTime: "Julio 2022 – Diciembre 2022",
		location: "Remoto",
		jobPosition: "Fullstack Developer",
		jobDescriptionShort:
			"Desarrollé una solución integral para un pequeño establecimiento local con Next.js y MySQL, que incluyó:",
		icon: MegaphoneIcon,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Desarrollé y optimicé proyectos de diversa índole</b> asumiendo
					roles de soporte para corregir y mejorar funcionalidades existentes,
					así como resolver bugs, reduciendo hasta un 15% los tiempos de carga
					de los productos del cliente.
				</List.Item>
				<List.Item>
					<b>Inicié y lideré proyectos desde cero</b>, priorizando la calidad y
					la eficiencia en cada etapa del desarrollo. Utilicé tecnologías como
					React, Node.js y MongoDB para crear aplicaciones web robustas.
				</List.Item>
				<List.Item>
					<b>Mantuve una comunicación eficiente con los clientes</b> para
					asegurar su satisfacción con el producto.
				</List.Item>
			</List>
		),
	},
	{
		enterpriseName: "Ultrabodegon",
		durationTime: "Enero 2022– Julio 2022",
		location: "Remoto",
		jobPosition: "Fullstack Developer",
		jobDescriptionShort:
			"Desarrollé una solución integral para un pequeño establecimiento local con Next.js y MySQL, que incluyó:",
		icon: BuildingLibraryIcon,
		jobDescription: (
			<>
				<b>
					Desarrollé una solución integral para un pequeño establecimiento local
					con Next.js y MySQL, que incluyó
				</b>
				:
				<List spacing="md" center mt={"1rem"}>
					<List.Item>
						<b>Administración de inventario</b>: Implementación de un sistema
						eficiente para gestionar el stock de productos.
					</List.Item>
					<List.Item>
						<b>Visualización de productos</b>: Creación de una interfaz amigable
						para mostrar la lista de productos a los usuarios.
					</List.Item>
					<List.Item>
						<b>Flujo de compras</b>: Diseño de un proceso de compra intuitivo y
						fluido.
					</List.Item>
					<List.Item>
						<b>Estadísticas de compra</b>: Generación de informes detallados
						sobre las compras de los usuarios.
					</List.Item>
					<List.Item>
						<b>Diseño dinámico y responsivo</b>: Asegurando una experiencia de
						usuario óptima en dispositivos web y móviles.
					</List.Item>
				</List>
			</>
		),
	},
] as {
	enterpriseName: string;
	durationTime: string;
	location: "Remoto";
	jobDescriptionShort: string;
	jobDescription: JSX.Element;
	jobPosition: string;
	icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}[];
