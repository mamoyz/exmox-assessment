import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import SearchPage from "../index.vue";
import mockAnime from "../../../mocks/mockAnimes.json";

describe("Testing Search Page", () => {
	vi.mock("vue-router", () => ({
		useRoute: vi.fn(() => ({
			query: {
				keyword: "test keyword",
			},
		})),
	}));

	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(SearchPage);
	});
	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});
	it("renders the title", () => {
		expect(wrapper.find(".title").exists()).toBeTruthy();
		expect(wrapper.find(".title").text()).toBe("Search Results for test keyword");
	});
	it("renders not found message", () => {
		wrapper.vm.animes = [];
		expect(wrapper.find(".not-found").exists()).toBeTruthy();
		expect(wrapper.find(".not-found").text()).toBe("No animes found for test keyword");
	});
	// it("renders animes in results", () => {
	// 	expect(wrapper.findAllComponents({ name: "AnimeListItem" }).length).toBe(5);
	// });
});
