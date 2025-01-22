import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ActionIcon } from "@mantine/core";

export const ContactComponent: React.FC<{ scrollTop: number }> = ({}) => {
	return (
		<ActionIcon
			variant="filled"
			color="#2f355199"
			style={{ width: "100%", height: "100%" }}
			radius={"1rem"}
			aria-label={"Contacto"}
		>
			<EnvelopeIcon style={{ width: "50%", height: "50%" }} />
		</ActionIcon>
	);
};
