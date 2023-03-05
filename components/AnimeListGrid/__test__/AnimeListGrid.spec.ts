import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AnimeListGrid from "../index.vue";
import mockAnimes from "../../../mocks/mockAnimes.json";
describe("Testing AnimeSlider Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(AnimeListGrid, {
			props: {
				animes: mockAnimes,
			},
		});
	});
	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});

	it("renders AnimeListItem component", () => {
		expect(wrapper.findComponent({ name: "AnimeListItem" }).exists()).toBeTruthy();
		expect(wrapper.findAllComponents({ name: "AnimeListItem" }).length).toBe(5);
	});
});
