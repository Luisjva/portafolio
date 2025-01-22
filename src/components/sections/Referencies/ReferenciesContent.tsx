import { colors } from "@/config";
import { personalReferencesList } from "@/constants/personalReferencesList";
import { Avatar, Box, Flex, Grid, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,

		transition: {
			delay: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.5,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const ReferenceItem: React.FC<{
	item: (typeof personalReferencesList)[0];
	open: boolean;
}> = ({ item, open }) => (
	<Box
		key={item.name}
		style={{
			background: open ? colors.grey + "22" : "",
			borderRadius: "1rem",
			padding: "1rem",
			transition: "1s",
		}}
	>
		<Flex gap={"sm"} align={"center"}>
			<Avatar src={item.img} alt="it's me" size={"lg"} />
			<Box>
				<Text style={{ fontWeight: 600, fontSize: "1.15rem" }}>
					{item.name}
				</Text>
				<Text style={{ color: "#fff7", fontSize: ".95rem" }}>
					{item.jobPosition}
				</Text>
			</Box>
		</Flex>
		<Text mt={"1rem"} opacity={0.8}>
			{item.content}
		</Text>
	</Box>
);

export const ReferenciesContent: React.FC<{ open: boolean }> = ({ open }) => {
	return (
		<motion.div
			className={`modal-closed ${open && "modal-open"}`}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={item}>
				<Text style={{ fontWeight: 600, fontSize: "1.2rem" }}>
					Personal References
				</Text>
			</motion.div>
			<motion.div variants={item} style={{ marginTop: open ? "2rem" : "" }}>
				<Grid>
					<Grid.Col span={12}>
						<ReferenceItem item={personalReferencesList[0]} open={open} />
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Grid>
							{personalReferencesList
								.filter((item, index) => index !== 0 && index % 2)
								.map((item) => (
									<Grid.Col key={item.name} span={12}>
										<ReferenceItem item={item} open={open} />
									</Grid.Col>
								))}
						</Grid>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6 }}>
						<Grid>
							{personalReferencesList
								.filter((item, index) => index !== 0 && !(index % 2))
								.map((item) => (
									<Grid.Col key={item.name} span={12}>
										<ReferenceItem item={item} open={open} />
									</Grid.Col>
								))}
						</Grid>
					</Grid.Col>
				</Grid>
			</motion.div>
		</motion.div>
	);
};
