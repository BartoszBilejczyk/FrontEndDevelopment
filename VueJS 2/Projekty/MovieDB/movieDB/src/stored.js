let stored = {
  apiKey: '02db3ee444ae78d83c46eeea92a9e2a0',
  listTypes: [
    {
      title: 'Popular Movies',
      shortTitle: 'Popular',
      query: 'popular',
      type: 'collection',
      isCategory: true,
      icon: 'done'
    },
    {
      title: 'Top Rated Movies',
      shortTitle: 'Top Rated',
      query: 'top_rated',
      type: 'collection',
      isCategory: true,
      icon: 'cached'
    },
    {
      title: 'Latest Movies',
      shortTitle: 'Latest',
      query: 'latest',
      type: 'collection',
      isCategory: true,
      icon: 'cached'
    },
    {
      title: 'Upcoming Movies',
      shortTitle: 'Upcoming',
      query: 'upcoming',
      type: 'collection',
      isCategory: true,
      icon: 'cached'
    },
    {
      title: 'Now Playing Movies',
      shortTitle: 'Now Playing',
      query: 'now_playing',
      type: 'collection',
      isCategory: true,
      icon: 'cached'
    },
    {
      title: 'Search Results',
      query: 'search',
      type: 'collection',
      isCategory: false
    }
  ]
}

export default stored
