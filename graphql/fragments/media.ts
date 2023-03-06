export const mediaObject = `
    id
    title {
      userPreferred
    }
    coverImage {
      large
      medium
    }
    bannerImage
    season
    seasonYear
    description
    type
    format
    status(version: 2)
    genres
    isAdult
    averageScore
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }`;
export const media = `
fragment media on Media {
    ${mediaObject}
}
`;
