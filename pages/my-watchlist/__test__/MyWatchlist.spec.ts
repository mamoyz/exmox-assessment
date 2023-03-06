import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import MyWatchListPage from "../index.vue";
import mockAnime from "../../../mocks/mockAnimes.json";

describe("Testing Watchlist Page", () => {
	vi.mock("#imports", () => {
		return {
			useAsyncData() {},
		};
	});

	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(MyWatchListPage);
		wrapper.vm.watchList = mockAnime;
	});

	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});

	it("renders the title", () => {
		expect(wrapper.find(".title").exists()).toBeTruthy();
		expect(wrapper.find(".title").text()).toBe("My Watchlist");
	});

	it("renders not found message", () => {
		wrapper.vm.watchList = [];
		expect(wrapper.find(".not-found").exists()).toBeTruthy();
		expect(wrapper.find(".not-found").text()).toBe("No animes found in your watchlist");
	});

	it("renders animes in watchlist", () => {
		expect(wrapper.findAllComponents({ name: "AnimeListItem" }).length).toBe(5);
	});
});
