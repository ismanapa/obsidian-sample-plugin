import { Service } from "diod";
import { App, Plugin, PluginSettingTab, Setting } from "obsidian";

import { SettingsStore } from "./infrastructure/SettingsStore";

@Service()
export class SettingsTab extends PluginSettingTab {
	constructor(
		app: App,
		private readonly plugin: Plugin,
		private readonly settingsStore: SettingsStore
	) {
		super(app, plugin);
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl("h2", { text: "Settings for my awesome plugin." });

		new Setting(containerEl)
			.setName("Setting #1")
			.setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder("Enter your secret")
					.setValue(this.settingsStore.settings.setting)
					.onChange(async (value) => {
						await this.settingsStore.updateSettings({ setting: value });
					})
			);
	}
}
