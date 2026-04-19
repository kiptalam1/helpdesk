export type Database = {
	public: {
		Tables: {
			messages: {
				Row: {
					id: string;
					subject: string;
					content: string;
					username: string;
					email: string;
					created_at: string;
				};
				Insert: {
					id: string;
					subject: string;
					content: string;
					username: string;
					email: string;
					created_at: string;
				};
				Update: {
					id?: string;
					subject?: string;
					content?: string;
					username?: string;
					email?: string;
					created_at?: string;
				};
			};
		};
	};
};
