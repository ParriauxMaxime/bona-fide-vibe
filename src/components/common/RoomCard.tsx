import type rooms from "../../data/rooms.json";
import { ImageCarousel } from "./ImageCarousel";

export function RoomCard({
	room,
	onOpenLightbox,
}: {
	room: (typeof rooms)[number];
	onOpenLightbox: (images: string[], index: number) => void;
}) {
	const sizeLabel = room.id === "small" ? "Petite" : room.id === "medium" ? "Moyenne" : "Grande";

	return (
		<article className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
			<ImageCarousel
				images={room.images}
				onImageClick={(index) => onOpenLightbox(room.images, index)}
			/>
			<div className="p-6">
				<div className="flex items-start justify-between gap-2 mb-2">
					<h3 className="text-xl font-semibold text-stone-800 dark:text-white">{room.name}</h3>
					<span className="text-xs bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 px-2 py-1 rounded">
						{sizeLabel}
					</span>
				</div>
				<p className="text-stone-600 dark:text-stone-300 mb-4 text-left">{room.description}</p>
				<div className="flex flex-wrap gap-4 text-sm text-stone-500 dark:text-stone-400 mb-4">
					<span>{room.capacity} personnes</span>
					<span>{room.surface} m²</span>
					<span className="font-semibold text-stone-800 dark:text-white">{room.price}€ / jour</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{room.amenities.map((amenity) => (
						<span
							key={amenity}
							className="text-xs bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded"
						>
							{amenity}
						</span>
					))}
				</div>
			</div>
		</article>
	);
}
