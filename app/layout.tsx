import type { Metadata } from "next";
import { Inter, Manrope, Josefin_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "HelpDesk",
	description: "Support system",
};

const inter = Inter({
	subsets: ["latin"],
	fallback: ["system-ui", "arial"],
});

const manrope = Manrope({
	subsets: ["latin"],
	fallback: ["system-ui", "arial"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={manrope.className}>
			<body className="min-h-dvh antialiased bg-background text-text">
				<main className="mx-auto flex min-h-dvh w-full max-w-4xl items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
					{children}
				</main>
			</body>
		</html>
	);
}
