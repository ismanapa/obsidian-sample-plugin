import { App, Notice } from "obsidian";

import { RegisterCommandHandler } from "../../infrastructure/di/RegisterCommandHandler";
import { CommandHandler } from "../CommandHandler";

@RegisterCommandHandler("GreetingCommand")
export class GreetingCommandHandler extends CommandHandler {
	constructor(private readonly app: App) {
		super();
	}

	handle(): void {
		new Notice("👋 Hello! 🥳");
	}
}
