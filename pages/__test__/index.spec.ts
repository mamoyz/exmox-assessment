import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HomePage from "../index.vue";
// import mockAnimes from "../../mocks/mockAnimes.json";

describe("Testing HomePage Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(HomePage);
	});

	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
	});

	it("renderns HomeHero component", () => {
		expect(wrapper.findComponent({ name: "HomeHero" }).exists()).toBeTruthy();
	});

	it("renders HomeAnimes component", () => {
		expect(wrapper.findComponent({ name: "HomeAnimes" }).exists()).toBeTruthy();
	});

	it("fetches home animes", async () => {
		vi.spyOn(wrapper.vm, "fetchHomeAnimes");
		await wrapper.vm.fetchHomeAnimes();
		expect(wrapper.vm.fetchHomeAnimes).toBeCalledTimes(1);
	});
});
