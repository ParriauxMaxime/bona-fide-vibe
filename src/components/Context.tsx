import building from "../data/building.json";
import { ParallaxSection, SectionTitle } from "./common";

export function Context() {
	return (
		<ParallaxSection maxW="6xl" variant="warm">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<SectionTitle>{building.name}</SectionTitle>
					<p className="text-lg text-stone-600 dark:text-stone-300 mb-6 text-justify">
						{building.description[0]}
						<br />
						{building.description[1]}
					</p>
					<a
						href={building.mapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-white/80 dark:bg-stone-800 hover:bg-white dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 px-4 py-2 rounded-lg shadow-sm transition-colors"
					>
						<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
						</svg>
						{building.address}, {building.postalCode} {building.city}
					</a>
				</div>

				<div className="relative flex justify-center lg:justify-end">
					<div className="aspect-[4/3] w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
						<img
							src={`${__PUBLIC_PATH__}media/outside.webp`}
							alt="Bâtiment des Salles Saint-Pierre à Pontarlier"
							className="w-full h-full object-cover"
							decoding="async"
						/>
					</div>
					<div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gray-300/30 dark:bg-orange-500/20 rounded-full blur-xl" />
					<div className="absolute -top-2 -right-2 w-20 h-20 bg-gray-200/40 dark:bg-amber-500/20 rounded-full blur-xl" />
				</div>
			</div>
		</ParallaxSection>
	);
}
