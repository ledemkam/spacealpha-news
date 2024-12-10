import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const objectsPerPage = 24;

export const dateToString = (date: Date): string => {
	return date.toISOString().split("T")[0];
};

export const numberToDate = (number: number): string => {
	const today = new Date();
	if (number === 0) {
		return dateToString(today);
	} else {
		return dateToString(new Date(today.setDate(today.getDate() - number)));
	}
};
