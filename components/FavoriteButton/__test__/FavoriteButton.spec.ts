import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import FavoriteButton from "../index.vue";

describe("Testing FavoriteButton Component", () => {
	const activeWrapper = shallowMount(FavoriteButton, {
		props: {
			active: true,
			id: "1",
		},
	});
	const dectiveWrapper = shallowMount(FavoriteButton, {
		props: {
			active: false,
			id: "1",
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

	it("adds anime to watchlist", async () => {
		vi.spyOn(dectiveWrapper.vm, "handleClick");
		await dectiveWrapper.find(".favorite-button").trigger("click");
		expect(dectiveWrapper.vm.handleClick).toBeCalled();
		expect(dectiveWrapper.classes()).toContain("active");
	});

	it("remove anime from watchlist", async () => {
		vi.spyOn(activeWrapper.vm, "handleClick");
		await activeWrapper.find(".favorite-button").trigger("click");
		expect(activeWrapper.vm.handleClick).toBeCalled();
		expect(activeWrapper.classes()).not.toContain("active");
	});
});
