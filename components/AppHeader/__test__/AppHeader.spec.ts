import { describe, it, expect, beforeEach } from "vitest";
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


});
