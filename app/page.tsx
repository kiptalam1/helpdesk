import Link from "next/link";

export default function Home() {
	return (
		<div className="flex w-full  flex-col gap-6 py-12 items-center text-center">
			<h1 className="text-4xl font-bold text-primary tracking-tight sm:text-5xl">
				Help Desk
			</h1>
			<p className="max-w-xl  text-base leading-relaxed text-text/80 sm:text-lg text-balance">
				A central inbox for managing all customer messages and support requests
				in one place.
			</p>
			<div className="flex w-full max-w-sm flex-col items-center sm:flex-row gap-3 sm:max-w-none sm:items-center sm:justify-center">
				<button
					type="button"
					className="cursor-pointer rounded-md border border-border px-5 py-2.5 font-semibold transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-px hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:translate-y-0 active:shadow-none">
					Create Account
				</button>
				<span className="text-sm italic text-text/60">or</span>
				<Link href="/login">
					<button
						type="button"
						className="cursor-pointer rounded-md bg-primary px-5 py-2.5 font-semibold text-white transition-[transform,box-shadow,filter] duration-150 hover:-translate-y-px hover:shadow-sm hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:translate-y-0 active:shadow-none">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
}
