import building from "../data/building.json";
import owner from "../data/owner.json";
import { ParallaxSection, SectionTitle } from "./common";

function Phone({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	);
}

function Mail({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

function MapPin({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
	);
}

const mapQuery = encodeURIComponent(
	`${building.address}, ${building.postalCode} ${building.city}, ${building.country}`,
);

export function Contact() {
	return (
		<ParallaxSection id="contact" maxW="6xl" variant="cool">
			<SectionTitle>Réservez votre salle</SectionTitle>
			<p className="text-stone-600 dark:text-stone-300 mb-8 max-w-2xl">
				Contactez-nous pour vérifier les disponibilités et réserver votre salle.
				<br />
				Nous vous répondrons dans les plus brefs délais.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
				<div className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm rounded-xl p-8 border border-stone-200 dark:border-stone-700 flex flex-col justify-center shadow-lg">
					<p className="text-xl font-semibold text-stone-800 dark:text-white mb-6">
						{owner.fullName}
					</p>

					<div className="space-y-4">
						<a
							href={`tel:${owner.phone.replace(/\s/g, "")}`}
							className="flex items-center gap-4 p-3 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors group"
						>
							<div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
								<Phone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
							</div>
							<span className="text-stone-700 dark:text-stone-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
								{owner.phone}
							</span>
						</a>

						<a
							href={`mailto:${owner.email}`}
							className="flex items-center gap-4 p-3 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors group"
						>
							<div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
								<Mail className="w-5 h-5 text-orange-600 dark:text-orange-400" />
							</div>
							<span className="text-stone-700 dark:text-stone-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
								{owner.email}
							</span>
						</a>

						<a
							href={building.mapsUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-4 p-3 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors group"
						>
							<div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
								<MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
							</div>
							<span className="text-stone-700 dark:text-stone-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
								{building.address}, {building.postalCode} {building.city}
							</span>
						</a>
					</div>
				</div>

				<div className="h-80 lg:h-auto min-h-80 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700">
					<iframe
						title="Localisation des Salles Saint-Pierre"
						src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</ParallaxSection>
	);
}
