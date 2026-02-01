import type { ReactNode } from "react";

export function ParallaxSection({
	id,
	maxW = "6xl",
	center,
	children,
	variant = "warm",
}: {
	id?: string;
	maxW?: "2xl" | "4xl" | "6xl";
	center?: boolean;
	children: ReactNode;
	variant?: "warm" | "cool";
}) {
	const gradientClass =
		variant === "warm"
			? "from-gray-50 via-white to-gray-100 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900"
			: "from-gray-100 via-gray-50 to-white dark:from-stone-950 dark:via-stone-900 dark:to-stone-950";

	const maxWClass = {
		"2xl": "max-w-2xl",
		"4xl": "max-w-4xl",
		"6xl": "max-w-6xl",
	}[maxW];

	return (
		<section id={id} className="relative overflow-hidden">
			{/* Parallax background with gradient */}
			<div
				className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}
				style={{ backgroundAttachment: "fixed" }}
			/>

			{/* Decorative shapes with enhanced parallax */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gray-300/50 dark:bg-orange-500/20 rounded-full blur-3xl"
					style={{ transform: "translateZ(0)" }}
				/>
				<div
					className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-gray-200/60 dark:bg-amber-500/15 rounded-full blur-3xl"
					style={{ transform: "translateZ(0)" }}
				/>
				<div
					className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gray-300/40 dark:bg-orange-900/25 rounded-full blur-3xl"
					style={{ transform: "translateZ(0)" }}
				/>
			</div>

			{/* Subtle grid pattern overlay */}
			<div
				className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
				style={{
					backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
					backgroundSize: "32px 32px",
					backgroundAttachment: "fixed",
				}}
			/>

			{/* Content */}
			<div className={`relative py-20 px-4 ${maxWClass} mx-auto ${center ? "text-center" : ""}`}>
				{children}
			</div>
		</section>
	);
}
