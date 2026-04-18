import React from "react";
import SupportForm from "./SupportForm";

function SupportPage() {
	return (
		<div className="space-y-4 ">
			<h1 className="text-center text-3xl font-semibold text-primary">
				Support
			</h1>
			<p className="text-center">Do you have any issues?</p>
			<p className="text-center">
				Kindly fill and submit the form below to receive assistance.
			</p>
			<SupportForm />
		</div>
	);
}

export default SupportPage;
