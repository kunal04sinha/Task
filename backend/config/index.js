import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config({ path: resolve(__dirname, "../../.env") });
console.log(__dirname, "__dirname");
export const { APP_Port, DB_URL } = process.env;
