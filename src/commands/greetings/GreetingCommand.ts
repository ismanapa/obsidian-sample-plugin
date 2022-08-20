import { Command } from "../Command";

export class GreetingCommand extends Command {
	commandName = "GreetingCommand";

	static create(): GreetingCommand {
		return new GreetingCommand();
	}
}
