import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
	title: "Sign In",
	description: "Log into the app",
};

export default function LoginPage() {
	return (
		<div className="w-full mx-auto max-w-md space-y-4">
			<div className="space-y-1 text-center">
				<h1 className="text-3xl font-semibold text-primary">Sign In</h1>
				<p className="text-sm text-text-muted">Access your Help Desk account</p>
			</div>
			<LoginForm />
		</div>
	);
}
