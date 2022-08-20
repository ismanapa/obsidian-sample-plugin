import { Command } from "./Command";
import { CommandMap } from "./commandMap";

export class CommandBus {
	constructor(private readonly commandMap: CommandMap) {}

	async execute(command: Command): Promise<void> {
		const handlerGenerator = this.commandMap[command.commandName];

		if (typeof handlerGenerator === "undefined") {
			throw new Error(
				"🌋 Please register your command with the RegisterCommandHandler decorator and add it to dependency injection container"
			);
		}

		const handler = this.commandMap[command.commandName]();

		await handler.handle(command);
	}
}
