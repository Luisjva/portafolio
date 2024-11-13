import { ActionIcon, Box } from "@mantine/core";
// import { AboutMeClosed } from "./AboutMeClosed";
// import { AboutMeOpen } from "./AboutMeOpen";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { colors } from "@/config";
import { MouseEventHandler } from "react";
import { ProjectsContents } from "./ProjectsContents";
// import { ExperienceContent } from "./ExperienceContent";

export const Projects: React.FC<{
	open: boolean;
	handleClosed: MouseEventHandler<HTMLButtonElement> | undefined;
}> = ({ open, handleClosed }) => {
	return (
		<div className={`modal__closed--default ${open && "modal__open--default"}`}>
			{open ? (
				<Box style={{ position: "relative" }}>
					<Box
						style={{
							position: "sticky",
							margin: "1rem 0vw",
							top: "1rem",
							zIndex: 100,
							display: "flex",
							justifyContent: "end",
						}}
					>
						<ActionIcon
							variant="filled"
							aria-label="Settings"
							onClick={handleClosed}
							color={colors.primary}
							style={{ position: "absolute", right: "-5vw" }}
						>
							<XMarkIcon style={{ width: "70%", height: "70%" }} />
						</ActionIcon>
					</Box>
				</Box>
			) : (
				""
			)}
			<ProjectsContents open={open} />
		</div>
	);
};
