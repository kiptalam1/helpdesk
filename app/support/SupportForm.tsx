import React from "react";
import Form from "next/form";
function SupportForm() {
	return (
		<div className=" rounded-lg bg-card border border-border p-4">
			<h2 className="text-center text-lg font-bold">Support Form</h2>
			<Form
				action=""
				className="flex flex-col gap-4 w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Name</label>
					<input
						required
						placeholder="Enter your full name ..."
						type="text"
						name="name"
						id="name"
						className="border border-border rounded-lg px-2 py-1 text-base outline-none focus:ring ring-primary placeholder:text-sm placeholder:italic"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="email">Email</label>
					<input
						required
						placeholder="Enter your email address ..."
						type="email"
						name="email"
						id="email"
						className="border border-border rounded-lg px-2 py-1 text-base outline-none focus:ring ring-primary placeholder:text-sm placeholder:italic"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="subject">Subject</label>
					<input
						required
						placeholder="maximum of 5 words ..."
						type="text"
						name="subject"
						id="subject"
						className="border border-border rounded-lg px-2 py-1 text-base outline-none focus:ring ring-primary placeholder:text-sm placeholder:italic"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message">Message</label>
					<textarea
						placeholder="Describe the issue ..."
						required
						name="message"
						id="message"
						className="border border-border rounded-lg px-2 py-1 text-base outline-none focus:ring ring-primary min-h-16 max-h-50 overflow-y-scroll placeholder:text-sm placeholder:italic"
					/>
				</div>

				<button
					type="submit"
					className="px-2 py-1 bg-primary rounded-md text-white font-semibold hover:opacity-70 transition-opacity duration-150 cursor-pointer">
					Submit
				</button>
			</Form>
		</div>
	);
}

export default SupportForm;
