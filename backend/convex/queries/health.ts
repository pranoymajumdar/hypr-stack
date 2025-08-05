import { query } from "../_generated/server";

export const check = query({
    handler: async () => {
       return {status: "Running"}
    }
})