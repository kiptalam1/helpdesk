// middleware.ts
import { createClient } from "@/lib/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const { supabase, supabaseResponse } = createClient(request);

	// This is required — refreshes the session on every request
	await supabase.auth.getUser();

	return supabaseResponse;
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
