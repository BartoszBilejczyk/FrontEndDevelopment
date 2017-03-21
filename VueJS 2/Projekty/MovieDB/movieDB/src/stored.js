let stored = {
  apiKey: '02db3ee444ae78d83c46eeea92a9e2a0',
  listTypes: [
    {
      title: 'Popularne',
      shortTitle: 'Popularne',
      query: 'popular',
      type: 'collection',
      isCategory: true,
      icon: 'favorite'
    },
    {
      title: 'Najwyżej ocenione',
      shortTitle: 'Najwyżej ocenione',
      query: 'top_rated',
      type: 'collection',
      isCategory: true,
      icon: 'file_upload'
    },
    {
      title: 'Nadchodzące',
      shortTitle: 'Nadchodzące',
      query: 'upcoming',
      type: 'collection',
      isCategory: true,
      icon: 'add'
    },
    {
      title: 'Obecnie grane w kinach',
      shortTitle: 'Obecnie grane',
      query: 'now_playing',
      type: 'collection',
      isCategory: true,
      icon: 'live_tv'
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
