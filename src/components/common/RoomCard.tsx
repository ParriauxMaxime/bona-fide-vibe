import type rooms from "../../data/rooms.json";
import { ImageCarousel } from "./ImageCarousel";

export function RoomCard({
	room,
	onOpenLightbox,
}: {
	room: (typeof rooms)[number];
	onOpenLightbox: (images: string[], index: number) => void;
}) {
	return (
		<article className="flex flex-col bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
			<ImageCarousel
				images={room.images.map((src) => `${__PUBLIC_PATH__}${src.slice(1)}`)}
				onImageClick={(index) =>
					onOpenLightbox(
						room.images.map((src) => `${__PUBLIC_PATH__}${src.slice(1)}`),
						index,
					)
				}
			/>
			<div className="flex flex-col grow p-6">
				<div className="flex items-start justify-between gap-2 mb-2">
					<h3 className="text-xl font-semibold text-stone-800 dark:text-white">{room.name}</h3>
				</div>
				<p className="text-stone-600 dark:text-stone-300 mb-4 text-left">{room.description}</p>
				<div className="flex flex-wrap gap-4 text-sm text-stone-500 dark:text-stone-400 mb-4">
					<span>{room.capacity} personnes</span>
					<span>{room.surface} m²</span>
					<span className="font-semibold text-stone-800 dark:text-white">
						A partir de {room.price}€
					</span>
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
				<a
					href={`${__PUBLIC_PATH__}media/${room.id}/contract.pdf`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 mt-auto pt-4 text-sm text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-4 h-4"
						aria-hidden="true"
					>
						<path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
						<path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
					</svg>
					Contrat de location
				</a>
			</div>
		</article>
	);
}
