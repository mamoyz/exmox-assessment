import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import SearchPage from "../index.vue";
import mockAnime from "../../../mocks/mockAnimes.json";

describe("Testing Search Page", () => {
	vi.mock("#imports", () => {
		return {
			useAsyncData() {},
		};
	});
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(SearchPage);
		wrapper.vm.keyword = "test keyword";
		wrapper.vm.animes = mockAnime;
	});
	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});
	it("renders the title", () => {
		expect(wrapper.find(".title").exists()).toBeTruthy();
		expect(wrapper.find(".title").text()).toBe("Search Results for test keyword");
	});
	it("renders not found message", () => {
		wrapper.vm.keyword = [];
		wrapper.vm.animes = [];

		expect(wrapper.find(".not-found").exists()).toBeTruthy();
		expect(wrapper.find(".not-found").text()).toBe("No animes found for test keyword");
	});
	it("renders animes in watchlist", () => {
		wrapper.vm.animes = mockAnime;
		expect(wrapper.findAllComponents({ name: "AnimeListItem" }).length).toBe(5);
	});
});
