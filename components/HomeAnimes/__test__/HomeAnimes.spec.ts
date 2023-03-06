import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HomeAnimes from "../index.vue";
import mockAnimes from "../../../mocks/mockAnimes.json";
describe("Testing HomeAnimes Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(HomeAnimes);
	});

	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});

	it("renders AnimeSlider component", () => {
		expect(wrapper.findComponent({ name: "AnimeSlider" }).exists()).toBeTruthy();
		expect(wrapper.findAllComponents({ name: "AnimeSlider" }).length).toBe(2);
	});
	it("loads props", () => {
		const wrapperWithProps = shallowMount(HomeAnimes, {
			props: {
				animes: {
					trending: mockAnimes,
					top: mockAnimes,
				},
			},
		});
		expect(wrapperWithProps.vm.animes.trending.length).toBe(5);
		expect(wrapperWithProps.vm.animes.trending.top).toBe(5);
	});
});
