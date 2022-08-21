import "reflect-metadata";

import { Plugin } from "obsidian";

import { CommandBus } from "./commands/CommandBus";
import { GreetingCommand } from "./commands/greetings/GreetingCommand";
import { buildContainer, container } from "./infrastructure/di/container";
import { commandMap } from "./infrastructure/di/RegisterCommandHandler";
import { SettingsStore } from "./infrastructure/SettingsStore";
import { SettingsTab } from "./SettingsTab";

export default class MyPlugin extends Plugin {
	async onload(): Promise<void> {
		buildContainer(this);

		const settingsStore = container.get(SettingsStore);
		await settingsStore.loadSettings();

		this.addSettingTab(container.get(SettingsTab));

		const commandBus = new CommandBus(commandMap);

		this.addCommand({
			id: "greeting",
			name: "Greeting",
			callback: async () => {
				await commandBus.execute(GreetingCommand.create());
			},
		});
	}
}
