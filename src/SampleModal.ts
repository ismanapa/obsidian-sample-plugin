import { Modal } from "obsidian";

export class SampleModal extends Modal {
	onOpen(): void {
		const { contentEl } = this;
		contentEl.setText("Woah!");
	}

	onClose(): void {
		const { contentEl } = this;
		contentEl.empty();
	}
}
