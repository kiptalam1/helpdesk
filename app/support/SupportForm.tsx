"use client";

import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client"; 
import { toast } from "sonner";


function SupportForm() {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		subject: "",
		content: "",
	});

	const supabase = createClient();
	// for controlled input;
	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function submitRequest(e: SyntheticEvent) {
		e.preventDefault();

		try {
			setLoading(true);
			const toastId = toast.loading("Submitting...");
			const { error } = await supabase.from("requests").insert([
				{
					username: formData.username,
					email: formData.email,
					subject: formData.subject,
					content: formData.content,
				},
			]);

			if (error) {
				console.error(error);
				toast.error("Failed to submit request. Please try again.", {
					id: toastId,
				});
			} else {
				toast.success("Request submitted successfully", { id: toastId });
				setFormData({
					username: "",
					email: "",
					subject: "",
					content: "",
				});
			}
		} finally {
			setLoading(false);
		}
	}
	return (
		<div className=" rounded-lg bg-card border border-border px-4 py-6">
			<h2 className="text-center text-lg font-bold">Support Form</h2>
			<form
				onSubmit={submitRequest}
				className="flex flex-col gap-4 w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
				<div className="flex flex-col gap-1">
					<label htmlFor="username">Name</label>
					<input
						required
						placeholder="Enter your full name ..."
						type="text"
						name="username"
						id="username"
						value={formData.username}
						onChange={handleInputChange}
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
						value={formData.email}
						onChange={handleInputChange}
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
						value={formData.subject}
						onChange={handleInputChange}
						className="border border-border rounded-lg px-2 py-1 text-base outline-none focus:ring ring-primary placeholder:text-sm placeholder:italic"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="content">Message</label>
					<textarea
						placeholder="Describe the issue ..."
						required
						name="content"
						id="content"
						value={formData.content}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								[e.target.name]: e.target.value,
							}))
						}
						className="border border-border rounded-lg px-2 py-1 text-base outline-none focus:ring ring-primary min-h-16 max-h-50 overflow-y-scroll placeholder:text-sm placeholder:italic"
					/>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="my-4 px-2 py-1 bg-primary rounded-md text-white font-semibold hover:opacity-70 transition-opacity duration-150 cursor-pointer">
					{loading ? "Submitting" : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default SupportForm;
