export default function Home() {
	return (
		<div className="flex flex-col gap-5 items-center py-5">
			<h1 className="text-4xl font-bold text-primary">Help Desk</h1>
			<p className="text-center text-xl font-medium wrap-anywhere whitespace-break-spaces my-5">
				A central inbox for managing all customer messages and support requests
				in one place.
			</p>
			<div className="flex flex-col items-center sm:flex-row gap-2 my-5">
				<button
					type="button"
					className="rounded-md px-4 py-1 font-semibold border border-gray-700 will-change-auto hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer">
					Create Account
				</button>
				<span className="text-sm italic">or</span>
				<button
					type="button"
					className="rounded-md px-4 py-1 font-semibold bg-primary will-change-auto hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer">
					Sign In
				</button>
			</div>
		</div>
	);
}
