import { CommandHandler } from "./CommandHandler";

export type CommandMap = {
	[key: string]: () => CommandHandler;
};
