import { Container, ContainerBuilder } from "diod";
import { App } from "obsidian";

import { GreetingCommandHandler } from "../../commands/greetings/GreetingCommandHandler";
import MyPlugin from "../../main";

const builder = new ContainerBuilder();

let container: Container;

// Register your commands and dependencies
builder.registerAndUse(GreetingCommandHandler);

export const buildContainer = (plugin: MyPlugin): Container => {
	builder.register(MyPlugin).useFactory(() => plugin);
	builder.register(App).useFactory(() => plugin.app);
	container = builder.build();

	return container;
};

export { container };
