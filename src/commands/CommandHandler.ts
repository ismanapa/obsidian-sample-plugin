import { Command } from "./Command";

export abstract class CommandHandler {
	abstract handle(command: Command): Promise<void> | void;
}
