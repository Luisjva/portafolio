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
		durationTime: "January 2023 - Present",
		location: "Remote",
		jobPosition: "Frontend Developer",
		jobDescriptionShort:
			"• Developed various Administrative Panels (HUB/CMS) with on-demand features for multiple clients, aimed at managing high-impact information, built with React.js and Next.js, using tools such as Redux, Mui, Mantine, among others",
		icon: BoltIcon,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Developed various Administrative Panels (HUB/CMS)</b> with
					on-demand features for multiple clients, aimed at managing high-impact
					information, built with React.js and Next.js, using tools such as
					Redux, Mui, Mantine, Socket.io, among others. The implementation of
					these panels increased client productivity by 30% by simplifying
					workflows and automating repetitive tasks.
				</List.Item>
				<List.Item>
					<b>Successfully optimized by 50%</b> the performance of 3 existing
					company projects through the modularization of existing components and
					addition of new components.
				</List.Item>
				<List.Item>
					<b>Designed and developed high-impact landing pages</b> with
					interactive animations for application products and services,
					achieving a 40% increase in user conversion rate. The carefully
					implemented animations enhance the appeal of client services,
					increasing dwell time by 25%.
				</List.Item>
				<List.Item>
					<b>
						Developed a library to streamline the creation of administrative
						panels for applications
					</b>
					, which significantly improved development speed in the company for
					this specific aspect.
				</List.Item>
				<List.Item>
					<b>Developed web versions of existing company applications</b>,
					expanding their reach and improving client interaction, primarily
					messaging web applications.
				</List.Item>
			</List>
		),
	},
	{
		enterpriseName: "Freelancer",
		durationTime: "July 2022 – December 2022",
		location: "Remote",
		jobPosition: "Fullstack Developer",
		jobDescriptionShort:
			"Developed and optimized projects of various kinds, taking on support roles to correct and improve existing functionalities",
		icon: MegaphoneIcon,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Developed and optimized projects of various kinds</b> taking on
					support roles to correct and improve existing functionalities, as well
					as resolve bugs, reducing client product loading times by up to 15%.
				</List.Item>
				<List.Item>
					<b>Initiated and led projects from scratch</b>, prioritizing quality
					and efficiency at each stage of development. Used technologies such as
					React, Node.js, and MongoDB to create robust web applications.
				</List.Item>
				<List.Item>
					<b>Maintained efficient communication with clients</b> to ensure their
					satisfaction with the product.
				</List.Item>
			</List>
		),
	},
	{
		enterpriseName: "Ultrabodegon",
		durationTime: "January 2022– July 2022",
		location: "Remote",
		jobPosition: "Fullstack Developer",
		jobDescriptionShort:
			"Developed a comprehensive solution for a small local establishment using Next.js and MySQL, which included:",
		icon: BuildingLibraryIcon,
		jobDescription: (
			<>
				<b>
					Developed a comprehensive solution for a small local establishment
					using Next.js and MySQL, which included
				</b>
				:
				<List spacing="md" center mt={"1rem"}>
					<List.Item>
						<b>Inventory management</b>: Implementation of an efficient system
						to manage product stock.
					</List.Item>
					<List.Item>
						<b>Product visualization</b>: Creation of a user-friendly interface
						to display the product list to users.
					</List.Item>
					<List.Item>
						<b>Purchase flow</b>: Design of an intuitive and fluid purchase
						process.
					</List.Item>
					<List.Item>
						<b>Purchase statistics</b>: Generation of detailed reports on user
						purchases.
					</List.Item>
					<List.Item>
						<b>Dynamic and responsive design</b>: Ensuring optimal user
						experience on web and mobile devices.
					</List.Item>
				</List>
			</>
		),
	},
] as {
	enterpriseName: string;
	durationTime: string;
	location: "Remote";
	jobDescriptionShort: string;
	jobDescription: JSX.Element;
	jobPosition: string;
	icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}[];
