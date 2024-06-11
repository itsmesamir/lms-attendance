import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";

export const classNames = (...args: any) =>
  overrideTailwindClasses(clsx(...args));
