export const airing = (anime) => {
	const airingAt = (date) => {
		return "Airing at " + new Date(date * 1000).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
	};
	return anime?.nextAiringEpisode ? airingAt(anime?.nextAiringEpisode.airingAt) : "Not Airing";
};
