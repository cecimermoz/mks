const RRSS = ['fb', 'tw', 'ig', 'yt']
const MOCKED_FETCH_DATA = [
  {
    icon: RRSS[0],
    followers_totalNumber: 1987,
    followers_perDay: 12,
    user_name: '@nathanf',
  },
  {
    icon: RRSS[1],
    followers_totalNumber: 1044,
    followers_perDay: 99,
    user_name: '@nathanf',
  },
  {
    icon: RRSS[2],
    followers_totalNumber: 11000,
    followers_perDay: 1099,
    user_name: '@realnathanf',
  },
  {
    icon: RRSS[3],
    followers_totalNumber: 8239,
    followers_perDay: -144,
    user_name: 'Nathan F.',
  },
]
const MOCKED_FETCH_DATA_OVERVIEW_TODAY = [
  {
    rrss_description: 'Page views',
    rrss_type: RRSS[0],
    count: 87,
    percent: 3,
  },
  {
    rrss_description: 'Likes',
    rrss_type: RRSS[0],
    count: 52,
    percent: -2,
  },
  {
    rrss_description: 'Likes',
    rrss_type: RRSS[2],
    count: 5462,
    percent: 2257,
  },
  {
    rrss_description: 'Profile views',
    rrss_type: RRSS[2],
    count: 52000,
    percent: 1375,
  },
  {
    rrss_description: 'Retweets',
    rrss_type: RRSS[1],
    count: 117,
    percent: 303,
  },
  {
    rrss_description: 'Likes',
    rrss_type: RRSS[1],
    count: 507,
    percent: 553,
  },
  {
    rrss_description: 'Likes',
    rrss_type: RRSS[3],
    count: 107,
    percent: -19,
  },
  {
    rrss_description: 'Total views',
    rrss_type: RRSS[3],
    count: 1407,
    percent: -12,
  },
]

export { RRSS, MOCKED_FETCH_DATA, MOCKED_FETCH_DATA_OVERVIEW_TODAY }
