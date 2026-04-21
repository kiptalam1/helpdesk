import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "HelpDesk",
	description: "Support system",
};


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
					<Toaster richColors position="top-right" />
				</main>
			</body>
		</html>
	);
}
