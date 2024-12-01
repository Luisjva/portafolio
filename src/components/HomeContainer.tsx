"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ActionIcon } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

const HomeContainer: React.FC<{
	name: string;
	cantOpen?: boolean;
	scrollTop?: number;
	Section: React.FC<{
		open: boolean;
	}>;
}> = ({ name, Section, cantOpen, scrollTop }) => {
	const [isOpen, setIsOpen] = useState(false);
	const contenedor = useRef<HTMLDivElement>(null);
	const modal = useRef<HTMLDivElement>(null);
	scrollTop = scrollTop || 0;
	const [left, setLeft] = useState<number | null>(null);
	const [top, setTop] = useState<number | null>(null);

	const handleOpen = () => {
		const container = document.querySelector(".home") as any;
		console.log("open", container);
		if (container) {
			container.style.overflow = "hidden";
		}

		setIsOpen(true);
	};
	const handleClosed = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const container = document.querySelector(".home") as any;
		e.stopPropagation();
		if (container) {
			container.style.overflow = "auto";
		}
		setIsOpen(false);
	};

	useEffect(() => {
		if (!cantOpen) {
			window.addEventListener("resize", () => {
				const contenedor = document.querySelector(`.home__${name}`) as any;
				setLeft(-contenedor?.offsetLeft - 1);
				setTop(-contenedor?.offsetTop + scrollTop);
			});
		}
	}, []);

	if (cantOpen) {
		return (
			<div className={`home__${name}`}>
				<Section open={isOpen} />
			</div>
		);
	}

	return (
		<div
			className={`home__section home__${name}`}
			onClick={handleOpen}
			ref={contenedor}
		>
			<div
				className={`home__section__modal ${
					isOpen ? "home__section__modal--open" : ""
				}`}
				ref={modal}
				style={{
					left: !isOpen
						? 0
						: left
						? left
						: contenedor?.current?.offsetLeft
						? -contenedor?.current?.offsetLeft - 1
						: 0,
					top: !isOpen
						? 0
						: top
						? top
						: contenedor?.current?.offsetTop
						? -contenedor?.current?.offsetTop + scrollTop
						: 0,
				}}
			>
				<span className="close-button">
					<ActionIcon
						variant="light"
						radius="sm"
						onClick={(e) => handleClosed(e)}
					>
						<XMarkIcon style={{ width: "70%", height: "70%" }} />
					</ActionIcon>
				</span>
				<Section open={isOpen} />
			</div>
		</div>
	);
};

export { HomeContainer };
