import { useEffect, useState } from "react";
import { ChevronLeft } from "./ChevronLeft";
import { ChevronRight } from "./ChevronRight";

export function Lightbox({
	images,
	initialIndex,
	onClose,
}: {
	images: string[];
	initialIndex: number;
	onClose: () => void;
}) {
	const [index, setIndex] = useState(initialIndex);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
			if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
		};
		window.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [images.length, onClose]);

	return (
		<div
			className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-pointer"
			onClick={onClose}
			onKeyDown={(e) => e.key === "Escape" && onClose()}
			role="presentation"
		>
			<button
				type="button"
				onClick={onClose}
				className="absolute top-4 right-4 text-white/80 hover:text-white p-2 cursor-pointer"
				aria-label="Fermer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<button
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					setIndex((i) => (i - 1 + images.length) % images.length);
				}}
				className="absolute left-4 text-white/80 hover:text-white p-2 cursor-pointer"
				aria-label="Image précédente"
			>
				<ChevronLeft className="h-10 w-10" />
			</button>
			<div
				className="relative overflow-hidden w-[90vw] h-[90vh]"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="presentation"
			>
				<div
					className="flex h-full transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
					{images.map((src) => (
						<div
							key={src}
							className="w-[90vw] h-full flex-shrink-0 flex items-center justify-center"
						>
							<img
								src={src}
								alt=""
								className="max-h-full max-w-full object-contain cursor-default"
								decoding="async"
							/>
						</div>
					))}
				</div>
			</div>
			<button
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					setIndex((i) => (i + 1) % images.length);
				}}
				className="absolute right-4 text-white/80 hover:text-white p-2 cursor-pointer"
				aria-label="Image suivante"
			>
				<ChevronRight className="h-10 w-10" />
			</button>
			<div className="absolute bottom-4 text-white/80 text-sm">
				{index + 1} / {images.length}
			</div>
		</div>
	);
}
