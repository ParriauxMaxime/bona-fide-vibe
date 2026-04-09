import { useEffect, useState } from "react";
import { Contact } from "./components/Contact";
import { Context } from "./components/Context";
import { Header } from "./components/Header";
import { Rooms } from "./components/Rooms";

export function App() {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<div className="min-h-screen bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 font-sans">
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<main>
				<Context />
				<Rooms />
				<Contact />
			</main>
		</div>
	);
}
