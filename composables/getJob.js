export const getJob = async (id) => {
  const config = useRuntimeConfig();
  const feedBase = config.public.apiBase;
  const feedUrl = feedBase + "feed/positions.json?id=" + id;
  //console.log(feedUrl);
  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
