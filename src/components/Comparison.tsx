import pricing from "../data/pricing.json";
import { SectionTitle } from "./common";

function formatPrice(value: number) {
	return `${value.toLocaleString("fr-FR")}\u00a0€`;
}

const rooms = [
	{ key: "large" as const, label: "Grande salle" },
	{ key: "medium" as const, label: "Moyenne salle" },
	{ key: "small" as const, label: "Petite salle" },
];

export function Comparison() {
	return (
		<div id="tarifs" className="mt-12">
			<SectionTitle>Comparatif des tarifs</SectionTitle>
			<p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
				Tarifs applicables au {pricing.effectiveDate}*
			</p>

			{/* Desktop table */}
			<div className="hidden md:block overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-700">
				<table className="w-full text-sm text-left">
					<thead>
						<tr className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200">
							<th className="px-4 py-3 font-semibold">Durée</th>
							<th className="px-4 py-3 font-semibold text-right">Grande salle</th>
							<th className="px-4 py-3 font-semibold text-right">Moyenne salle</th>
							<th className="px-4 py-3 font-semibold text-right">Petite salle</th>
							<th className="px-4 py-3 font-semibold">Observations</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-stone-200 dark:divide-stone-700">
						{pricing.rows.map((row) => (
							<tr
								key={row.duration}
								className="bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-colors"
							>
								<td className="px-4 py-3 font-medium text-stone-800 dark:text-stone-100">
									{row.duration}
								</td>
								<td className="px-4 py-3 text-right tabular-nums">{formatPrice(row.large)}</td>
								<td className="px-4 py-3 text-right tabular-nums">{formatPrice(row.medium)}</td>
								<td className="px-4 py-3 text-right tabular-nums">{formatPrice(row.small)}</td>
								<td className="px-4 py-3 text-stone-600 dark:text-stone-400 whitespace-pre-line">
									{row.observations}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile cards */}
			<div className="md:hidden space-y-4">
				{pricing.rows.map((row) => (
					<div
						key={row.duration}
						className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 overflow-hidden"
					>
						<div className="bg-stone-100 dark:bg-stone-800 px-4 py-2.5">
							<span className="font-semibold text-stone-800 dark:text-stone-100">
								{row.duration}
							</span>
						</div>
						<div className="px-4 py-3 space-y-2 text-sm">
							{rooms.map((room) => (
								<div key={room.key} className="flex justify-between">
									<span className="text-stone-600 dark:text-stone-400">{room.label}</span>
									<span className="font-medium tabular-nums">{formatPrice(row[room.key])}</span>
								</div>
							))}
							{row.observations && (
								<p className="text-xs text-stone-500 dark:text-stone-400 pt-1 border-t border-stone-100 dark:border-stone-800 whitespace-pre-line">
									{row.observations}
								</p>
							)}
						</div>
					</div>
				))}
			</div>

			<p className="text-xs text-stone-500 dark:text-stone-400 mt-4">* {pricing.footnote}</p>
		</div>
	);
}
