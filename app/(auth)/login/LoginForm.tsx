"use client";

import { ChangeEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div className=" rounded-lg bg-card border border-border px-5 py-8 shadow-sm">
			<form
				// onSubmit={submitRequest}
				className="flex w-full flex-col gap-4">
				{/* email */}
				<div className="flex flex-col gap-1.5">
					<label htmlFor="email" className="text-sm font-medium">
						Email
					</label>
					<input
						required
						autoComplete="email"
						placeholder="you@example.com"
						type="email"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleInputChange}
						className="border border-border rounded-lg bg-transparent  px-3 py-2 text-base outline-none w-full focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-sm placeholder:text-text-muted transition"
					/>
				</div>

				{/* password */}
				<div className=" flex flex-col gap-1.5">
					<label htmlFor="password" className="text-sm font-semibold">
						Password
					</label>
					<div className="relative">
						<input
							required
							autoComplete="current-password"
							placeholder="Enter your password ..."
							type={showPassword ? "text" : "password"}
							name="password"
							id="password"
							value={formData.password}
							onChange={handleInputChange}
							className="w-full rounded-lg border border-border bg-transparent px-3 py-2 pr-10 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-sm placeholder:text-text-muted"
						/>

						<button
							type="button"
							aria-label="toggle password visibility"
							onClick={() => setShowPassword((prev) => !prev)}
							className="absolute inset-y-0 right-2 text-text-muted cursor-pointer hover:text-text duration-150 transition-colors">
							{showPassword ?
								<FaEyeSlash size={14} />
							:	<FaEye size={14} />}
						</button>
					</div>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="my-4 px-2 py-1 bg-primary rounded-md text-white font-semibold hover:opacity-70 transition-opacity duration-150 cursor-pointer">
					{loading ? "Loading" : "Sign In"}
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
