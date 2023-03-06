import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import FavoriteButton from "../index.vue";

describe("Testing FavoriteButton Component", () => {
	const activeWrapper = shallowMount(FavoriteButton, {
		props: {
			active: true,
		},
	});
	const dectiveWrapper = shallowMount(FavoriteButton, {
		props: {
			active: false,
		},
	});

	it("renders the component", () => {
		expect(activeWrapper.exists()).toBeTruthy();
	});
	it("renders the button with active class", () => {
		expect(activeWrapper.find(".favorite-button").classes()).toContain("active");
	});

	it("renders the button with dective class", () => {
		expect(dectiveWrapper.find(".favorite-button").classes()).not.toContain("active");
	});

	it("adds anime to watchlist", () => {
		vi.spyOn(dectiveWrapper.vm, "handleClick");
		dectiveWrapper.find(".favorite-button").trigger("click");
		expect(dectiveWrapper.vm.handleClick).toBeCalled();
		expect(deactiveWrapper.classes()).toContain("active");
	});

	it("remove anime from watchlist", () => {
		vi.spyOn(activeWrapper.vm, "handleClick");
		activeWrapper.find(".favorite-button").trigger("click");
		expect(activeWrapper.vm.handleClick).toBeCalled();
		expect(activeWrapper.classes()).not.toContain("active");
	});

	
});
