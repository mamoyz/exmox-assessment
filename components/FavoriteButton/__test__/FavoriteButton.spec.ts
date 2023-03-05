import { describe, it, expect, beforeEach } from "vitest";
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
});
