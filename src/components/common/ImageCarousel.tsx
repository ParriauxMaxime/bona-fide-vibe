import { useRef, useState } from "react";
import { ChevronLeft } from "./ChevronLeft";
import { ChevronRight } from "./ChevronRight";

export function ImageCarousel({
	images,
	onImageClick,
	className = "h-48",
}: {
	images: string[];
	onImageClick: (index: number) => void;
	className?: string;
}) {
	const [index, setIndex] = useState(0);
	const [deltaX, setDeltaX] = useState(0);
	const startX = useRef(0);
	const swiped = useRef(false);

	const onTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
		swiped.current = false;
	};

	const onTouchMove = (e: React.TouchEvent) => {
		setDeltaX(e.touches[0].clientX - startX.current);
	};

	const onTouchEnd = () => {
		if (deltaX < -50) {
			setIndex((i) => (i + 1) % images.length);
			swiped.current = true;
		} else if (deltaX > 50) {
			setIndex((i) => (i - 1 + images.length) % images.length);
			swiped.current = true;
		}
		setDeltaX(0);
	};

	return (
		<div className={`relative bg-stone-100 dark:bg-stone-700 group overflow-hidden ${className}`}>
			<div
				className={`flex h-full ${deltaX === 0 ? "transition-transform duration-300 ease-in-out" : ""}`}
				style={{ transform: `translateX(calc(-${index * 100}% + ${deltaX}px))` }}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				{images.map((src, i) => (
					<button
						type="button"
						key={src}
						onClick={() => {
							if (!swiped.current) onImageClick(index);
						}}
						className="w-full h-full flex-shrink-0 cursor-pointer p-0 border-0 bg-transparent"
						aria-label={`Voir l'image ${i + 1} en plein écran`}
					>
						<img
							src={src}
							alt=""
							className="w-full h-full object-cover"
							loading="lazy"
							decoding="async"
						/>
					</button>
				))}
			</div>
			<button
				type="button"
				onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
				aria-label="Image précédente"
			>
				<ChevronLeft />
			</button>
			<button
				type="button"
				onClick={() => setIndex((i) => (i + 1) % images.length)}
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
				aria-label="Image suivante"
			>
				<ChevronRight />
			</button>
			<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
				{images.map((src, i) => (
					<button
						type="button"
						key={src}
						onClick={() => setIndex(i)}
						className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/75"}`}
						aria-label={`Image ${i + 1}`}
					/>
				))}
			</div>
			<button
				type="button"
				onClick={() => onImageClick(index)}
				className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
				aria-label="Plein écran"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
					/>
				</svg>
			</button>
		</div>
	);
}
