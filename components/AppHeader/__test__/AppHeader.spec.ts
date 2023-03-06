import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppHeader from "../index.vue";
describe("Testing Header Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(AppHeader);
	});

	it("renders the logo", () => {
		expect(wrapper.find("#app-logo").exists()).toBeTruthy();
	});

	it("renders the search bar", () => {
		expect(wrapper.find("#search-bar").exists()).toBeTruthy();
		expect(wrapper.find("#search-bar input").exists()).toBeTruthy();
	});

	it("renders favorites button", () => {
		expect(wrapper.find("#favorites-button").exists()).toBeTruthy();
	});

	it("extends searchbar width on focus", async () => {
		expect(wrapper.find("#search-bar input").classes()).not.toContain("pr-24");
		await wrapper.find("#search-bar input").trigger("focus");
		expect(wrapper.find("#search-bar input").classes()).toContain("pr-24");
	});

	it("submits search query", async () => {
		vi.spyOn(wrapper.vm, "handleSearch");
		await wrapper.find("#search-bar form").trigger("submit");
		expect(wrapper.vm.handleSearch).toBeCalled();
	});

	it("updates input value on type", async () => {
		await wrapper.find("#search-bar input").setValue("test");
		expect(wrapper.vm.searchQuery).toBe("test");
	});
});
