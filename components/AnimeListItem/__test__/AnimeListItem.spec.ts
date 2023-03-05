import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AnimeListItem from "../index.vue";
import mockAnime from "../../../mocks/mockAnimes.json";
describe("Testing AnimeListItem Component", () => {
	let wrapper: any = null;
	beforeEach(() => {
		wrapper = shallowMount(AnimeListItem, {
			props: {
				anime: mockAnime[0],
			},
		});
	});
	it("renders the component", () => {
		expect(wrapper.exists()).toBeTruthy();
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

	it("renders anime description", () => {
		expect(wrapper.find(".description").exists()).toBeTruthy();
		expect(wrapper.find(".description").text()).toBe("After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to the win. The Japan Football Union is hell-bent on creating a striker who hungers for goals and thirsts for victory, and who can be the decisive instrument in turning around a losing match...and to do so, they've gathered 300 of Japan's best and brightest youth players. Who will emerge to lead the team...and will they be able to out-muscle and out-ego everyone who stands in their way? <br>\n<br>\n(Source: Kodansha USA)<br>\n<br>\n<i>Note: The first episode received a pre-screening at the AnimagiC convention on August 6, 2022.</i>");
	});
	it("renders anime airing status", () => {
		expect(wrapper.find(".status").exists()).toBeTruthy();
	});
});
