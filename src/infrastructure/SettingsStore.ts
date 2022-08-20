import { Plugin } from "obsidian";

export interface Settings {
	setting: string;
}

export const DEFAULT_SETTINGS: Settings = {
	setting: "",
};

export class SettingsStore {
	private _settings: Settings;

	constructor(private readonly plugin: Plugin) {}

	get settings(): Settings {
		return this._settings;
	}

	async loadSettings(): Promise<void> {
		const data = (await this.plugin.loadData()) as Settings;
		this._settings = { ...DEFAULT_SETTINGS, ...data };
	}

	async updateSettings(settings: Partial<Settings>): Promise<void> {
		this._settings = { ...this._settings, ...settings };
		await this.plugin.saveData(this._settings);
	}
}
