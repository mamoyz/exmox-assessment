import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AnimeSlider from "../index.vue";
import mockAnimes from "../../../mocks/mockAnimes.json";
describe("Testing AnimeSlider Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(AnimeSlider, {
			props: {
				title: "Test",
				animes: mockAnimes,
			},
		});
	});

	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});
	it("renders next/prev buttons", () => {
		expect(wrapper.find(".next").exists()).toBeTruthy();
		expect(wrapper.find(".prev").exists()).toBeTruthy();
	});
	it("renders title", () => {
		expect(wrapper.find(".title").exists()).toBeTruthy();
		expect(wrapper.find(".title").text()).toBe("Test");
	});
	it("renders AnimeListItem component", () => {
		expect(wrapper.findComponent({ name: "AnimeListItem" }).exists()).toBeTruthy();
		expect(wrapper.findAllComponents({ name: "AnimeListItem" }).length).toBe(5);
	});
});
