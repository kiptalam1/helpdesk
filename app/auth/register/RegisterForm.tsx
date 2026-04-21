"use client";
import React, { ChangeEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [errors, setErrors] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div className="border border-border shadow-sm bg-card px-5 py-8 rounded-lg">
			<form className="flex flex-col gap-4 w-full">
				{/* username */}
				<div className="flex flex-col gap-1.5">
					<label htmlFor="username" className="text-sm font-medium">
						Username
					</label>
					<input
						required
						autoComplete="name"
						placeholder=" Junior Kotestes"
						type="username"
						name="username"
						id="username"
						value={formData.username}
						onChange={handleInputChange}
						className="border border-border rounded-lg bg-transparent  px-3 py-2 text-base outline-none w-full focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-sm placeholder:text-text-muted transition"
					/>
					{errors.username && (
						<p className="text-xs text-red-500">{errors.username}</p>
					)}
				</div>

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
					{errors.email && (
						<p className="text-xs text-red-500">{errors.email}</p>
					)}
				</div>

				{/* password */}
				<div className=" flex flex-col gap-1.5">
					<label htmlFor="password" className="text-sm font-semibold">
						Password
					</label>
					<div className="relative">
						<input
							required
							autoComplete="new-password"
							placeholder="At least 6 characters (Uppercase, lowercase, number)"
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
					{errors.password && (
						<p className="text-xs text-red-500">{errors.password}</p>
					)}
				</div>

				{/* confirm password */}
				<div className=" flex flex-col gap-1.5">
					<label htmlFor="confirmPassword" className="text-sm font-semibold">
						Confirm Password
					</label>
					<div className="relative">
						<input
							required
							autoComplete="new-password"
							placeholder="Confirm your password ..."
							type={showConfirm ? "text" : "password"}
							name="confirmPassword"
							id="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleInputChange}
							className="w-full rounded-lg border border-border bg-transparent px-3 py-2 pr-10 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-sm placeholder:text-text-muted"
						/>

						<button
							type="button"
							aria-label="toggle password visibility"
							onClick={() => setShowConfirm((prev) => !prev)}
							className="absolute inset-y-0 right-2 text-text-muted cursor-pointer hover:text-text duration-150 transition-colors">
							{showConfirm ?
								<FaEyeSlash size={14} />
							:	<FaEye size={14} />}
						</button>
					</div>
					{errors.confirmPassword && (
						<p className="text-xs text-red-500">{errors.confirmPassword}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={loading}
					className="my-4 px-2 py-1 bg-primary rounded-md text-white font-semibold hover:opacity-70 transition-opacity duration-150 cursor-pointer">
					{loading ? "Loading" : "Sign Up"}
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
