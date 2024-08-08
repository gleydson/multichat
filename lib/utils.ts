import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const BASE_URL = (
	process.env.NODE_ENV === "production"
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: process.env.__NEXT_PRIVATE_ORIGIN
) as string;
