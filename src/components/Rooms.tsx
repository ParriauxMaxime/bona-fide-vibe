import { Suspense, lazy, useState } from "react";
import rooms from "../data/rooms.json";
import { Comparison } from "./Comparison";
import { RoomCard, Section, SectionTitle } from "./common";

const Lightbox = lazy(() => import("./common/Lightbox").then((m) => ({ default: m.Lightbox })));

export function Rooms() {
	const [lightbox, setLightbox] = useState<{
		images: string[];
		index: number;
	} | null>(null);

	return (
		<Section id="salles" bg="glass">
			<SectionTitle>Nos salles</SectionTitle>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{rooms.map((room) => (
					<RoomCard
						key={room.id}
						room={room}
						onOpenLightbox={(images, index) => setLightbox({ images, index })}
					/>
				))}
			</div>
			<Comparison />
			{lightbox && (
				<Suspense fallback={null}>
					<Lightbox
						images={lightbox.images}
						initialIndex={lightbox.index}
						onClose={() => setLightbox(null)}
					/>
				</Suspense>
			)}
		</Section>
	);
}
