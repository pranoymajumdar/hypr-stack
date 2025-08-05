import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";

export default defineSchema(
	{
		...authTables
	},
	// If you ever get an error about schema mismatch
	// between your data and your schema, and you cannot
	// change the schema to match the current data in your database,
	// you can:
	//  1. Use the dashboard to delete tables or individual documents
	//     that are causing the error.
	//  2. Change this option to `false` and make changes to the data
	//     freely, ignoring the schema. Don't forget to change back to `true`!
	{ schemaValidation: true },
);
