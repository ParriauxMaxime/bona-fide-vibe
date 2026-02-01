import owner from "../data/owner.json";

export function Header({
	darkMode,
	setDarkMode,
}: {
	darkMode: boolean;
	setDarkMode: (v: boolean) => void;
}) {
	return (
		<header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
			<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
				<h1 className="text-lg font-semibold text-stone-800 dark:text-white">
					<span className="sm:hidden">{owner.associationName.replace("Association des", "")}</span>
					<span className="hidden sm:inline">{owner.associationName}</span>
				</h1>
				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded text-stone-600 cursor-pointer dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
						aria-label="Toggle dark mode"
					>
						{darkMode ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						)}
					</button>
					<a
						href="#contact"
						className="bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded font-medium text-white text-sm"
					>
						<span className="sm:hidden">Contact</span>
						<span className="hidden sm:inline">Nous contacter</span>
					</a>
				</div>
			</div>
		</header>
	);
}
