import "@/styles/globals.css";
import { Mulish } from "@next/font/google";

const mulish = Mulish({
	subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
	return (
		<main className={mulish.className}>
			<Component {...pageProps} />
		</main>
	);
}
