import { ReferenciesContent } from "./ReferenciesContent";

export const Referencies: React.FC<{
	open: boolean;
}> = ({ open }) => {
	return (
		<div className={`modal__closed--default ${open && "modal__open--default"}`}>
			<ReferenciesContent open={open} />
		</div>
	);
};
