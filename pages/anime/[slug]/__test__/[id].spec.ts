import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AnimePage from "../[id].vue";
import mockAnime from "../../../../mocks/mockAnimes.json";

describe("Testing Anime Page", () => {
	vi.mock("#imports", () => {
		return {
			useAsyncData() {},
		};
	});

	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(AnimePage);
		vi.spyOn(wrapper.vm, "fetchAnimeInfo");
		wrapper.vm.fetchAnimeInfo = vi.fn(() => {
			return mockAnime[0];
		});
		wrapper.vm.animeInfo = mockAnime[0];
	});

	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});

	it("fetches anime by ID", async () => {
		await wrapper.vm.fetchAnimeInfo();
		expect(wrapper.vm.fetchAnimeInfo).toBeCalledTimes(1);
	});

	it("renders anime title", () => {
		expect(wrapper.find(".title").exists()).toBeTruthy();
		expect(wrapper.find(".title").text()).toBe("Blue Lock");
	});

	it("renders anime image", () => {
		expect(wrapper.find(".image").exists()).toBeTruthy();
		expect(wrapper.find(".image").attributes("src")).toBe("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx137822-4dVWMSHLpGf8.png");
	});

	it("renders anime score", () => {
		expect(wrapper.find(".score").exists()).toBeTruthy();
		expect(wrapper.find(".score").text()).toBe("81");
	});

	it("renders anime genres", () => {
		expect(wrapper.find(".genres").exists()).toBeTruthy();
		expect(wrapper.find(".genres").text()).toBe("Action, Drama, Sports");
	});

	it("renders anime airing status", () => {
		expect(wrapper.find(".status").exists()).toBeTruthy();
	});
});
