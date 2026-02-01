import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
	return <h2 className="text-3xl font-bold text-stone-800 dark:text-white mb-6">{children}</h2>;
}
