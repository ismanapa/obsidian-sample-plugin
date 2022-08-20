import { Plugin } from "obsidian";

import { CommandBus } from "./commands/CommandBus";
import { GreetingCommand } from "./commands/greetings/GreetingCommand";
import { buildContainer } from "./infrastructure/di/container";
import { commandMap } from "./infrastructure/di/RegisterCommandHandler";
import { SettingsStore } from "./infrastructure/SettingsStore";
import { SettingsTab } from "./SettingsTab";

export default class MyPlugin extends Plugin {
	settingsStore: SettingsStore;

	async onload(): Promise<void> {
		this.settingsStore = new SettingsStore(this);
		await this.settingsStore.loadSettings();
		this.addSettingTab(new SettingsTab(this.app, this));

		buildContainer(this);

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
