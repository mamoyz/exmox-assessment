import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import FavoriteButton from "../index.vue";

describe("Testing FavoriteButton Component", () => {
	let activeWrapper: any = null;
	let dectiveWrapper: any = null;

	beforeEach(() => {
		activeWrapper = shallowMount(FavoriteButton, {
			props: {
				active: true,
				id: "1",
			},
		});
		dectiveWrapper = shallowMount(FavoriteButton, {
			props: {
				active: false,
				id: "1",
			},
		});
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
		expect(activeWrapper.classes()).toContain("active");
		vi.spyOn(dectiveWrapper.vm, "handleClick");
		await dectiveWrapper.find(".favorite-button").trigger("click");
		expect(dectiveWrapper.vm.handleClick).toBeCalled();
	});

	it("remove anime from watchlist", async () => {
		expect(dectiveWrapper.classes()).not.toContain("active");
		vi.spyOn(activeWrapper.vm, "handleClick");
		await activeWrapper.find(".favorite-button").trigger("click");
		expect(activeWrapper.vm.handleClick).toBeCalled();
	});
});
