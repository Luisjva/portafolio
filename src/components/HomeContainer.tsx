"use client";
import React, { useRef, useState } from "react";

const HomeContainer: React.FC<{
	name: string;
	cantOpen?: boolean;
	scrollTop?: number;
	Section: React.FC<{
		open: boolean;
		handleClosed: any;
	}>;
}> = ({ name, Section, cantOpen, scrollTop }) => {
	const [isOpen, setIsOpen] = useState(false);
	const contenedor = useRef<HTMLDivElement>(null);
	const modal = useRef<HTMLDivElement>(null);
	scrollTop = scrollTop || 0;

	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClosed = (e: Event) => {
		e.stopPropagation();
		setIsOpen(false);
	};

	// useEffect(() => {
	// 	const home = document.querySelector(".home");
	// 	const handleScroll = (isOpen: boolean) => {
	// 		if (isOpen && home) home.scrollTop = scrollTop || 0;
	// 	};

	// 	home?.removeEventListener("scroll", () => handleScroll(isOpen));
	// 	home?.addEventListener("scroll", () => handleScroll(isOpen));
	// }, [isOpen]);

	if (cantOpen) {
		return (
			<div className={`home__${name}`}>
				<Section open={isOpen} handleClosed={handleClosed} />
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
					left:
						isOpen && contenedor?.current?.offsetLeft
							? -contenedor?.current?.offsetLeft - 1
							: 0,
					top:
						isOpen && contenedor?.current?.offsetTop
							? -contenedor?.current?.offsetTop + scrollTop
							: 0,
				}}
			>
				<Section open={isOpen} handleClosed={handleClosed} />
			</div>
		</div>
	);
};

export { HomeContainer };
