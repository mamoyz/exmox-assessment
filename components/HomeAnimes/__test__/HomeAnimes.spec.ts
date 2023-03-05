import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HomeAnimes from "../index.vue";

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
});
