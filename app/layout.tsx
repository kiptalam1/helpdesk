import type { Metadata } from "next";
import { Inter, Manrope, Josefin_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {};

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
			<body className="min-h-screen w-full antialiased">
				<main className="max-w-4xl p-4 sm:p-6 md:p-8 lg:p-10">{children}</main>
			</body>
		</html>
	);
}
