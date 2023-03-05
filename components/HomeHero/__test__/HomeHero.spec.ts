import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HomeHero from "../index.vue";
describe("Testing HomeHero Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(HomeHero, {
			props: {
				featuredAnime: {
					title: "Test Title",
					description: "Test Description",
					bannerImage: "https://via.placeholder.com/150",
					id: "12345",
				},
			},
		});
	});
	it("renders the banner image", () => {
		expect(wrapper.find("#featured-anime-banner").exists()).toBeTruthy();
		expect(wrapper.find("#featured-anime-banner").attributes("src")).toBe("https://via.placeholder.com/150");
	});
	it("renders the featured anime title", () => {
		expect(wrapper.find("#featured-anime-title").exists()).toBeTruthy();
		expect(wrapper.find("#featured-anime-title").text()).toBe("Test Title");
	});
	it("renders the featured anime description", () => {
		expect(wrapper.find("#featured-anime-description").exists()).toBeTruthy();
		expect(wrapper.find("#featured-anime-description").text()).toBe("Test Description");
	});
	it("renders the hero button", () => {
		expect(wrapper.find("#hero-button").exists()).toBeTruthy();
		expect(wrapper.find("#hero-button").attributes("to")).toContain("12345");
	});
});
