import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HomeHero from "../index.vue";
describe("Testing HomeHero Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(HomeHero);
	});
	it("renders the banner image", () => {
		expect(wrapper.find("#featured-anime-banner").exists()).toBeTruthy();
	});
	it("renders the featured anime title", () => {
		expect(wrapper.find("#featured-anime-title").exists()).toBeTruthy();
	});
	it("renders the featured anime description", () => {
		expect(wrapper.find("#featured-anime-description").exists()).toBeTruthy();
	});
	it("renders the hero button", () => {
		expect(wrapper.find("#hero-button").exists()).toBeTruthy();
	});
});
