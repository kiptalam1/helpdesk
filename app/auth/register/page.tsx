import React from "react";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
	return (
		<div className="w-full mx-auto max-w-md space-y-4 ">
			<div className="space-y-1 text-center">
				<h1 className="text-3xl font-semibold text-primary">Sign Up</h1>
				<p className="text-sm text-text-muted">Create Help Desk account</p>
			</div>
			<RegisterForm />
		</div>
	);
}

export default RegisterPage;
