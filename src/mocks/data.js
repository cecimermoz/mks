const RRSS = ['fb', 'tw', 'ig', 'yt']
const MOCKED_FETCH_DATA = [
  {
    icon: RRSS[0],
    followers_totalNumber: 1987,
    followers_perDay: 12,
    followers_lastDays: 120,
    user_name: '@nathanf',
    chart_data: [10, 24, 67, 12, 5, 37, 28, 16, 17, 12],
  },
  {
    icon: RRSS[1],
    followers_totalNumber: 1044,
    followers_lastDays: 300,
    followers_perDay: 99,
    user_name: '@nathanf',
    chart_data: [20, 42, 67, 22, 52, 37, 28, 16, 170, 99],
  },
  {
    icon: RRSS[2],
    followers_totalNumber: 11000,
    followers_lastDays: 3504,
    followers_perDay: 1099,
    user_name: '@realnathanf',
    chart_data: [220, 142, 267, 122, 52, 137, 128, 216, 532, 1099],
  },
  {
    icon: RRSS[3],
    followers_totalNumber: 8239,
    followers_lastDays: 202,
    followers_perDay: -144,
    user_name: 'Nathan F.',
    chart_data: [100, 102, 97, 120, 32, 27, 10, -22, -25, -144],
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
