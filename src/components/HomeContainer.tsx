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
	const container = useRef<HTMLDivElement>(null);
	const modal = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [leftOpen, setLeftOpen] = useState(0);
	const [topOpen, setTopOpen] = useState(0);
	scrollTop = scrollTop || 0;

	const handleOpen = () => {
		const container = document.querySelector(".home") as any;
		if (container) {
			container.style.overflow = "hidden";
		}

		setIsOpen(true);
	};
	const handleClosed = (e: any) => {
		e.stopPropagation();
		setIsOpen(false);
		const container = document.querySelector(".home") as any;
		if (container) {
			container.style.overflow = "auto";
		}
	};

	const handlePositionOpen = () => {
		const container = document.querySelector(`.home__${name}`) as any;
		if (container?.offsetLeft) {
			setLeftOpen(-container.offsetLeft - 1);
		} else {
			setLeftOpen(0);
		}

		if (container?.offsetTop) {
			setTopOpen(-container.offsetTop + scrollTop);
		} else {
			setTopOpen(0);
		}
	};

	useEffect(() => {
		const homeContainer = document.querySelector(".home");
		window.addEventListener("resize", (e) => {
			handleClosed(e);
			handlePositionOpen();
		});
		homeContainer?.addEventListener("scroll", (e) => {
			e.preventDefault();
			handlePositionOpen();
		});

		return () => {
			window.removeEventListener("resize", handlePositionOpen);
			homeContainer?.removeEventListener("scroll", handlePositionOpen);
		};
	}, []);

	useEffect(() => {
		handlePositionOpen();
	}, [scrollTop]);

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
			ref={container}
		>
			<div
				className={`home__section__modal ${
					isOpen ? "home__section__modal--open" : ""
				}`}
				ref={modal}
				style={{
					left: !isOpen ? 0 : leftOpen,
					top: !isOpen ? 0 : topOpen,
				}}
			>
				<span className="close-button">
					<ActionIcon
						variant="light"
						radius="sm"
						onClick={handleClosed}
						aria-label="close modal"
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
