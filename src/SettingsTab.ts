import { Service } from "diod";
import { App, PluginSettingTab, Setting } from "obsidian";

import MyPlugin from "./main";

@Service()
export class SettingsTab extends PluginSettingTab {
	constructor(app: App, private readonly plugin: MyPlugin) {
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
					.setValue(this.plugin.settingsStore.settings.setting)
					.onChange(async (value) => {
						await this.plugin.settingsStore.updateSettings({ setting: value });
					})
			);
	}
}
