import { z } from "zod";

export const signUpSchema = z
	.object({
		email: z.email("Invalid email address"),
		username: z.string().min(3, "Username must be atleast 3 characters."),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters.")
			.regex(/[A-Z]/, "Must contain at least one uppercase letter.")
			.regex(/[0-9]/, "Must contain at least one number")
			.regex(/[^a-zA-Z0-9]/, "Must contain at least one special character."),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: "Passwords do not match.",
		path: ["confirmPassword"],
	});
