import type { ReactNode } from "react";

export function Section({
	id,
	bg = "white",
	maxW = "6xl",
	center,
	children,
}: {
	id?: string;
	bg?: "white" | "gray" | "glass";
	maxW?: "2xl" | "4xl" | "6xl";
	center?: boolean;
	children: ReactNode;
}) {
	const maxWClass = {
		"2xl": "max-w-2xl",
		"4xl": "max-w-4xl",
		"6xl": "max-w-6xl",
	}[maxW];

	if (bg === "glass") {
		return (
			<section id={id} className="relative py-16 px-4 overflow-hidden">
				{/* Glass background with gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/70 via-gray-50/60 to-white/70 dark:from-stone-900/80 dark:via-stone-800/70 dark:to-stone-900/80 backdrop-blur-sm" />
				{/* Decorative blurred shapes */}
				<div className="absolute -top-20 -left-20 w-80 h-80 bg-gray-200/50 dark:bg-orange-500/10 rounded-full blur-3xl" />
				<div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gray-300/40 dark:bg-amber-500/10 rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-100/30 dark:bg-stone-700/20 rounded-full blur-3xl" />
				{/* Content */}
				<div className={`relative ${maxWClass} mx-auto ${center ? "text-center" : ""}`}>
					{children}
				</div>
			</section>
		);
	}

	const bgClass = bg === "white" ? "bg-white dark:bg-stone-900" : "bg-stone-50 dark:bg-stone-950";
	return (
		<section id={id} className={`py-16 px-4 ${bgClass}`}>
			<div className={`${maxWClass} mx-auto ${center ? "text-center" : ""}`}>{children}</div>
		</section>
	);
}
