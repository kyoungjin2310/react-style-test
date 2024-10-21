import Light from "./light";
import Dark from "./dark";

export const defaultTheme = Light;
export const darkTheme = Dark;

export type Theme = typeof defaultTheme;
