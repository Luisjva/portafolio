"use client";
import React, { useRef, useState } from "react";

const HomeContainer: React.FC<{
	name: string;
	Section: React.FC<{
		open: boolean;
		handleClosed: any;
	}>;
}> = ({ name, Section }) => {
	const [isOpen, setIsOpen] = useState(false);
	const contenedor = useRef<HTMLDivElement>(null);
	const modal = useRef<HTMLDivElement>(null);

	console.log(contenedor, modal);

	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClosed = (e: Event) => {
		e.stopPropagation();
		setIsOpen(false);
	};

	return (
		<div
			className={`home__section ${name}`}
			onClick={handleOpen}
			ref={contenedor}
		>
			<div
				className={`home__section__modal ${
					isOpen ? "home__section__modal--open" : ""
				}`}
				ref={modal}
				style={{
					left:
						isOpen && contenedor?.current?.offsetLeft
							? -contenedor?.current?.offsetLeft - 1
							: 0,
					top:
						isOpen && contenedor?.current?.offsetTop
							? -contenedor?.current?.offsetTop
							: 0,
				}}
			>
				<Section open={isOpen} handleClosed={handleClosed} />
			</div>
		</div>
	);
};

export { HomeContainer };
