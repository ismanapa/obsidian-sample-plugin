import { Newable } from "diod";

import { CommandHandler } from "../../commands/CommandHandler";
import { CommandMap } from "../../commands/commandMap";
import { container } from "./container";

export const commandMap: CommandMap = {};

export const RegisterCommandHandler = (commandName: string) => {
	return <T extends Newable<CommandHandler>>(target: T): T => {
		commandMap[commandName] = () => container.get<CommandHandler>(target);

		return target;
	};
};
