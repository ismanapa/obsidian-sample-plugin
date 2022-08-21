import { Container, ContainerBuilder } from "diod";
import { App, Plugin } from "obsidian";

import { GreetingCommandHandler } from "../../commands/greetings/GreetingCommandHandler";
import MyPlugin from "../../main";
import { SettingsTab } from "../../SettingsTab";
import { SettingsStore } from "../SettingsStore";

const builder = new ContainerBuilder();

let container: Container;

// Register your commands and dependencies
builder.registerAndUse(GreetingCommandHandler);

builder.registerAndUse(SettingsTab);

builder.registerAndUse(SettingsStore).asSingleton();

export const buildContainer = (plugin: MyPlugin): Container => {
	builder.register(Plugin).useFactory(() => plugin);
	builder.register(App).useFactory(() => plugin.app);
	container = builder.build();

	return container;
};

export { container };
