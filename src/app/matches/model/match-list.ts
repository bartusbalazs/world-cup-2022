import {Match} from "./match.model";

export const MATCHES: Match[] =
  // /matches/0
  [
    {
      id:0,
      groupId: 0,
      startTime: "2022-11-20 17:00",
      stadium: "Al Bayt Stadium, Al Khor",
      homeTeam: {id: 9, name: "Qatar", rankingPoints: 1441.41, flagPath: "https://www.worldometers.info/img/flags/qa-flag.gif"},
      awayTeam: {id: 26, name: "Ecuador", rankingPoints: 1463.74, flagPath: "https://www.worldometers.info/img/flags/ec-flag.gif"}
    },
    {
      id:1,
      groupId: 0,
      startTime: "2022-11-21 17:00",
      stadium: "Al Thumama Stadium, Doha",
      homeTeam: {id: 16, name: "Senegal", rankingPoints: 1593.45, flagPath: "https://www.worldometers.info/img/flags/sg-flag.gif"},
      awayTeam: {id: 11, name: "Netherlands", rankingPoints: 1679.41, flagPath: "https://www.worldometers.info/img/flags/nl-flag.gif"}
    },
    {
      id:2,
      groupId: 0,
      startTime: "2022-11-25 14:00",
      stadium: "Al Thumama Stadium, Doha",
      homeTeam: {id: 9, name: "Qatar", rankingPoints: 1441.41, flagPath: "https://www.worldometers.info/img/flags/qa-flag.gif"},
      awayTeam: {id: 16, name: "Senegal", rankingPoints: 1593.45, flagPath: "https://www.worldometers.info/img/flags/sg-flag.gif"}
    },
    {
      id:3,
      groupId: 0,
      startTime: "2022-11-25 17:00",
      stadium: "Khalifa International Stadium, Al Rayyan",
      homeTeam: {id: 11, name: "Netherlands", rankingPoints: 1679.41, flagPath: "https://www.worldometers.info/img/flags/nl-flag.gif"},
      awayTeam: {id: 26, name: "Ecuador", rankingPoints: 1463.74, flagPath: "https://www.worldometers.info/img/flags/ec-flag.gif"}
    },
    {
      id:4,
      groupId: 0,
      startTime: "2022-11-29 16:00",
      stadium: "Khalifa International Stadium, Al Rayyan",
      homeTeam: {id: 26, name: "Ecuador", rankingPoints: 1463.74, flagPath: "https://www.worldometers.info/img/flags/ec-flag.gif"},
      awayTeam: {id: 16, name: "Senegal", rankingPoints: 1593.45, flagPath: "https://www.worldometers.info/img/flags/sg-flag.gif"}
    },
    {
      id:5,
      groupId: 0,
      startTime: "2022-11-29 16:00",
      stadium: "Al Bayt Stadium, Al Khor",
      homeTeam: {id: 11, name: "Netherlands", rankingPoints: 1679.41, flagPath: "https://www.worldometers.info/img/flags/nl-flag.gif"},
      awayTeam: {id: 9, name: "Qatar", rankingPoints: 1441.41, flagPath: "https://www.worldometers.info/img/flags/qa-flag.gif"}
    }
    ,

// /matches/1

  {
    id:6,
    groupId: 1,
    startTime: "2022-11-21 14:00",
    stadium: "Khalifa International Stadium, Al Rayyan",
    homeTeam: {id: 8, name: "England", rankingPoints: 1737.46, flagPath: "https://flagpedia.net/data/flags/h80/gb-eng.webp"},
    awayTeam: {id: 17, name: "Iran", rankingPoints: 1558.64, flagPath: "https://www.worldometers.info/img/flags/ir-flag.gif"}
  },
  {
    id:7,
    groupId: 1,
    startTime: "2022-11-21 20:00",
    stadium: "Ahmed bin Ali Stadium, Al Rayyan",
    homeTeam: {id: 14, name: "USA", rankingPoints: 1635.01, flagPath: "https://www.worldometers.info/img/flags/us-flag.gif"},
    awayTeam: {id: 29, name: "Wales", rankingPoints: 1582.13, flagPath: "https://flagpedia.net/data/flags/h80/gb-wls.webp"}
  },
  {
    id:8,
    groupId: 1,
    startTime: "2022-11-25 11:00",
    stadium: "Ahmed bin Ali Stadium, Al Rayyan",
    homeTeam: {id: 29, name: "Wales", rankingPoints: 1582.13, flagPath: "https://flagpedia.net/data/flags/h80/gb-wls.webp"},
    awayTeam: {id: 17, name: "Iran", rankingPoints: 1558.64, flagPath: "https://www.worldometers.info/img/flags/ir-flag.gif"}
  },
  {
    id:9,
    groupId: 1,
    startTime: "2022-11-25 20:00",
    stadium: "Al Bayt Stadium, Al Khor",
    homeTeam: {id: 8, name: "England", rankingPoints: 1737.46, flagPath: "https://flagpedia.net/data/flags/h80/gb-eng.webp"},
    awayTeam: {id: 14, name: "USA", rankingPoints: 1635.01, flagPath: "https://www.worldometers.info/img/flags/us-flag.gif"}
  },
  {
    id:10,
    groupId: 1,
    startTime: "2022-11-29 20:00",
    stadium: "Ahmed bin Ali Stadium, Al Rayyan",
    homeTeam: {id: 29, name: "Wales", rankingPoints: 1582.13, flagPath: "https://flagpedia.net/data/flags/h80/gb-wls.webp"},
    awayTeam: {id: 8, name: "England", rankingPoints: 1737.46, flagPath: "https://flagpedia.net/data/flags/h80/gb-eng.webp"}
  },

  {
    id:11,
    groupId: 1,
    startTime: "2022-11-29 20:00",
    stadium: "Al Thumama Stadium, Al Khor",
    homeTeam: {id: 17, name: "Iran", rankingPoints: 1558.64, flagPath: "https://www.worldometers.info/img/flags/ir-flag.gif"},
    awayTeam: {id: 14, name: "USA", rankingPoints: 1635.01, flagPath: "https://www.worldometers.info/img/flags/us-flag.gif"}
  }
  ,

// /matches/2

  {
    id:12,
    groupId: 2,
    startTime: "2022-11-22 11:00",
    stadium: "Lusail Iconic Stadium, Lusail",
    homeTeam: {id: 2, name: "Argentina", rankingPoints: 1770.65, flagPath: "https://www.worldometers.info/img/flags/ar-flag.gif"},
    awayTeam: {id: 27, name: "Saudi Arabia", rankingPoints: 1435.74, flagPath: "https://www.worldometers.info/img/flags/sa-flag.gif"}
  },
  {
    id:13,
    groupId: 2,
    startTime: "2022-11-22 17:00",
    stadium: "Stadium 974, Doha",
    homeTeam: {id: 10, name: "Mexico", rankingPoints: 1649.57, flagPath: "https://www.worldometers.info/img/flags/mx-flag.gif"},
    awayTeam: {id: 21, name: "Poland", rankingPoints: 1546.18, flagPath: "https://www.worldometers.info/img/flags/pl-flag.gif"}
  },
  {
    id:14,
    groupId: 2,
    startTime: "2022-11-26 14:00",
    stadium: "Education City Stadium, Al Rayyan",
    homeTeam: {id: 21, name: "Poland", rankingPoints: 1546.18, flagPath: "https://www.worldometers.info/img/flags/pl-flag.gif"},
    awayTeam: {id: 27, name: "Saudi Arabia", rankingPoints: 1435.74, flagPath: "https://www.worldometers.info/img/flags/sa-flag.gif"}
  },
  {
    id:15,
    groupId: 2,
    startTime: "2022-11-26 20:00",
    stadium: "Lusail Iconic Stadium, Lusail",
    homeTeam: {id: 2, name: "Argentina", rankingPoints: 1770.65, flagPath: "https://www.worldometers.info/img/flags/ar-flag.gif"},
    awayTeam: {id: 10, name: "Mexico", rankingPoints: 1649.57, flagPath: "https://www.worldometers.info/img/flags/mx-flag.gif"}
  },
  {
    id:16,
    groupId: 2,
    startTime: "2022-11-30 20:00",
    stadium: "Stadium 974, Doha",
    homeTeam: {id: 21, name: "Poland", rankingPoints: 1546.18, flagPath: "https://www.worldometers.info/img/flags/pl-flag.gif"},
    awayTeam: {id: 2, name: "Argentina", rankingPoints: 1770.65, flagPath: "https://www.worldometers.info/img/flags/ar-flag.gif"}
  },

  {
    id:17,
    groupId: 2,
    startTime: "2022-11-30 20:00",
    stadium: "Lusail Iconic Stadium, Lusail",
    homeTeam: {id: 27, name: "Saudi Arabia", rankingPoints: 1435.74, flagPath: "https://www.worldometers.info/img/flags/sa-flag.gif"},
    awayTeam: {id: 10, name: "Mexico", rankingPoints: 1649.57, flagPath: "https://www.worldometers.info/img/flags/mx-flag.gif"}
  }
  ,


// /matches/3

  {
    id:18,
    groupId: 3,
    startTime: "2022-11-22 14:00",
    stadium: "Education City Stadium, Al Rayyan",
    homeTeam: {id: 4, name: "Denmark", rankingPoints: 1665.47, flagPath: "https://www.worldometers.info/img/flags/da-flag.gif"},
    awayTeam: {id: 23, name: "Tunisia", rankingPoints: 1507.86, flagPath: "https://www.worldometers.info/img/flags/ts-flag.gif"}
  },
  {
    id:19,
    groupId: 3,
    startTime: "2022-11-22 20:00",
    stadium: "Al Janoub Stadium, Al Wakrah",
    homeTeam: {id: 3, name: "France", rankingPoints: 1764.85, flagPath: "https://www.worldometers.info/img/flags/fr-flag.gif"},
    awayTeam: {id: 31, name: "Australia", rankingPoints: 1483.73, flagPath: "https://www.worldometers.info/img/flags/as-flag.gif"}
  },
  {
    id:20,
    groupId: 3,
    startTime: "2022-11-26 11:00",
    stadium: "Al Janoub Stadium, Al Wakrah",
    homeTeam: {id: 23, name: "Tunisia", rankingPoints: 1507.86, flagPath: "https://www.worldometers.info/img/flags/ts-flag.gif"},
    awayTeam: {id: 31, name: "Australia", rankingPoints: 1483.73, flagPath: "https://www.worldometers.info/img/flags/as-flag.gif"}
  },
  {
    id:21,
    groupId: 3,
    startTime: "2022-11-26 17:00",
    stadium: "Stadium 974, Doha",
    homeTeam: {id: 3, name: "France", rankingPoints: 1764.85, flagPath: "https://www.worldometers.info/img/flags/fr-flag.gif"},
    awayTeam: {id: 4, name: "Denmark", rankingPoints: 1665.47, flagPath: "https://www.worldometers.info/img/flags/da-flag.gif"}
  },
  {
    id:22,
    groupId: 3,
    startTime: "2022-11-30 16:00",
    stadium: "Education City Stadium, Al Rayyan",
    homeTeam: {id: 23, name: "Tunisia", rankingPoints: 1507.86, flagPath: "https://www.worldometers.info/img/flags/ts-flag.gif"},
    awayTeam: {id: 3, name: "France", rankingPoints: 1764.85, flagPath: "https://www.worldometers.info/img/flags/fr-flag.gif"}
  },

  {
    id:23,
    groupId: 3,
    startTime: "2022-11-30 16:00",
    stadium: "Al Janoub Stadium, Al Wakrah",
    homeTeam: {id: 31, name: "Australia", rankingPoints: 1483.73, flagPath: "https://www.worldometers.info/img/flags/as-flag.gif"},
    awayTeam: {id: 4, name: "Denmark", rankingPoints: 1665.47, flagPath: "https://www.worldometers.info/img/flags/da-flag.gif"}
  }
  ,

// /matches/4

  {
    id:24,
    groupId: 4,
    startTime: "2022-11-23 14:00",
    stadium: "Khalifa International Stadium, Al Rayyan",
    homeTeam: {id: 7, name: "Germany", rankingPoints: 1658.96, flagPath: "https://www.worldometers.info/img/flags/gm-flag.gif"},
    awayTeam: {id: 18, name: "Japan", rankingPoints: 1552.77, flagPath: "https://www.worldometers.info/img/flags/ja-flag.gif"}
  },
  {
    id:25,
    groupId: 4,
    startTime: "2022-11-23 17:00",
    stadium: "Al Thumama Stadium, Al Khor",
    homeTeam: {id: 5, name: "Spain", rankingPoints: 1716.93, flagPath: "https://www.worldometers.info/img/flags/sp-flag.gif"},
    awayTeam: {id: 30, name: "Costa Rica", rankingPoints: 1500.06, flagPath: "https://www.worldometers.info/img/flags/cs-flag.gif"}
  },
  {
    id:26,
    groupId: 4,
    startTime: "2022-11-27 11:00",
    stadium: "Ahmed bin Ali Stadium, Al Rayyan",
    homeTeam: {id: 18, name: "Japan", rankingPoints: 1552.77, flagPath: "https://www.worldometers.info/img/flags/ja-flag.gif"},
    awayTeam: {id: 30, name: "Costa Rica", rankingPoints: 1500.06, flagPath: "https://www.worldometers.info/img/flags/cs-flag.gif"}
  },
  {
    id:27,
    groupId: 4,
    startTime: "2022-11-27 20:00",
    stadium: "Al Bayt Stadium, Al Khor",
    homeTeam: {id: 5, name: "Spain", rankingPoints: 1716.93, flagPath: "https://www.worldometers.info/img/flags/sp-flag.gif"},
    awayTeam: {id: 7, name: "Germany", rankingPoints: 1658.96, flagPath: "https://www.worldometers.info/img/flags/gm-flag.gif"}
  },
  {
    id:28,
    groupId: 4,
    startTime: "2022-12-01 20:00",
    stadium: "Khalifa International Stadium, Al Rayyan",
    homeTeam: {id: 18, name: "Japan", rankingPoints: 1552.77, flagPath: "https://www.worldometers.info/img/flags/ja-flag.gif"},
    awayTeam: {id: 5, name: "Spain", rankingPoints: 1716.93, flagPath: "https://www.worldometers.info/img/flags/sp-flag.gif"}
  },

  {
    id:29,
    groupId: 4,
    startTime: "2022-12-01 20:00",
    stadium: "Al Bayt Stadium, Al Khor",
    homeTeam: {id: 30, name: "Costa Rica", rankingPoints: 1500.06, flagPath: "https://www.worldometers.info/img/flags/cs-flag.gif"},
    awayTeam: {id: 7, name: "Germany", rankingPoints: 1658.96, flagPath: "https://www.worldometers.info/img/flags/gm-flag.gif"}
  }
  ,


// /matches/5

  {
    id:30,
    groupId: 5,
    startTime: "2022-11-23 11:00",
    stadium: "Al Bayt Stadium, Al Khor",
    homeTeam: {id: 19, name: "Morocco", rankingPoints: 1558.9, flagPath: "https://www.worldometers.info/img/flags/mo-flag.gif"},
    awayTeam: {id: 15, name: "Croatia", rankingPoints: 1632.15, flagPath: "https://www.worldometers.info/img/flags/hr-flag.gif"}
  },
  {
    id:31,
    groupId: 5,
    startTime: "2022-11-23 20:00",
    stadium: "Ahmed bin Ali Stadium, Al Rayyan",
    homeTeam: {id: 1, name: "Belgium", rankingPoints: 1821.92, flagPath: "https://www.worldometers.info/img/flags/be-flag.gif"},
    awayTeam: {id: 25, name: "Canada", rankingPoints: 1473.82, flagPath: "https://www.worldometers.info/img/flags/ca-flag.gif"}
  },
  {
    id:32,
    groupId: 5,
    startTime: "2022-11-27 14:00",
    stadium: "Al Thumama Stadium, Al Khor",
    homeTeam: {id: 1, name: "Belgium", rankingPoints: 1821.92, flagPath: "https://www.worldometers.info/img/flags/be-flag.gif"},
    awayTeam: {id: 19, name: "Morocco", rankingPoints: 1558.9, flagPath: "https://www.worldometers.info/img/flags/mo-flag.gif"}
  },
  {
    id:33,
    groupId: 5,
    startTime: "2022-11-27 17:00",
    stadium: "Khalifa International Stadium, Al Rayyan",
    homeTeam: {id: 15, name: "Croatia", rankingPoints: 1632.15, flagPath: "https://www.worldometers.info/img/flags/hr-flag.gif"},
    awayTeam: {id: 25, name: "Canada", rankingPoints: 1473.82, flagPath: "https://www.worldometers.info/img/flags/ca-flag.gif"}
  },
  {
    id:34,
    groupId: 5,
    startTime: "2022-12-01 16:00",
    stadium: "Ahmed bin Ali Stadium, Al Rayyan",
    homeTeam: {id: 15, name: "Croatia", rankingPoints: 1632.15, flagPath: "https://www.worldometers.info/img/flags/hr-flag.gif"},
    awayTeam: {id: 1, name: "Belgium", rankingPoints: 1821.92, flagPath: "https://www.worldometers.info/img/flags/be-flag.gif"}
  },

  {
    id:35,
    groupId: 5,
    startTime: "2022-12-01 16:00",
    stadium: "Al Thumama Stadium, Al Khor",
    homeTeam: {id: 25, name: "Canada", rankingPoints: 1473.82, flagPath: "https://www.worldometers.info/img/flags/ca-flag.gif"},
    awayTeam: {id: 19, name: "Morocco", rankingPoints: 1558.9, flagPath: "https://www.worldometers.info/img/flags/mo-flag.gif"}
  },

// /matches/6

  {
    id:36,
    groupId: 6,
    startTime: "2022-11-24 11:00",
    stadium: "Al Janoub Stadium, Al Wakrah",
    homeTeam: {id: 13, name: "Switzerland", rankingPoints: 1621.43, flagPath: "https://www.worldometers.info/img/flags/sz-flag.gif"},
    awayTeam: {id: 24, name: "Cameroon", rankingPoints: 1484.95, flagPath: "https://www.worldometers.info/img/flags/cm-flag.gif"}
  },
  {
    id:37,
    groupId: 6,
    startTime: "2022-11-24 20:00",
    stadium: "Lusail Iconic Stadium, Lusail",
    homeTeam: {id: 0, name: "Brazil", rankingPoints: 1837.56, flagPath: "https://www.worldometers.info/img/flags/br-flag.gif"},
    awayTeam: {id: 20, name: "Serbia", rankingPoints: 1549.53, flagPath: "https://www.worldometers.info/img/flags/ri-flag.gif"}
  },
  {
    id:38,
    groupId: 6,
    startTime: "2022-11-28 11:00",
    stadium: "Al Janoub Stadium, Al Wakrah",
    homeTeam: {id: 24, name: "Cameroon", rankingPoints: 1484.95, flagPath: "https://www.worldometers.info/img/flags/cm-flag.gif"},
    awayTeam: {id: 20, name: "Serbia", rankingPoints: 1549.53, flagPath: "https://www.worldometers.info/img/flags/ri-flag.gif"}
  },
  {
    id:39,
    groupId: 6,
    startTime: "2022-11-28 17:00",
    stadium: "Stadium 974, Doha",
    homeTeam: {id: 0, name: "Brazil", rankingPoints: 1837.56, flagPath: "https://www.worldometers.info/img/flags/br-flag.gif"},
    awayTeam: {id: 13, name: "Switzerland", rankingPoints: 1621.43, flagPath: "https://www.worldometers.info/img/flags/sz-flag.gif"}
  },
  {
    id:40,
    groupId: 6,
    startTime: "2022-12-02 20:00",
    stadium: "Lusail Iconic Stadium, Lusail",
    homeTeam: {id: 24, name: "Cameroon", rankingPoints: 1484.95, flagPath: "https://www.worldometers.info/img/flags/cm-flag.gif"},
    awayTeam: {id: 0, name: "Brazil", rankingPoints: 1837.56, flagPath: "https://www.worldometers.info/img/flags/br-flag.gif"}
  },
  {
    id:41,
    groupId: 6,
    startTime: "2022-12-02 20:00",
    stadium: "Stadium 974, Doha",
    homeTeam: {id: 20, name: "Serbia", rankingPoints: 1549.53, flagPath: "https://www.worldometers.info/img/flags/ri-flag.gif"},
    awayTeam: {id: 13, name: "Switzerland", rankingPoints: 1621.43, flagPath: "https://www.worldometers.info/img/flags/sz-flag.gif"}
  },

// /matches/7

  {
    id:42,
    groupId: 7,
    startTime: "2022-11-24 14:00",
    stadium: "Al Bayt Stadium, Al Khor",
    homeTeam: {id: 12, name: "Uruguay", rankingPoints: 1643.71, flagPath: "https://www.worldometers.info/img/flags/uy-flag.gif"},
    awayTeam: {id: 22, name: "South Korea", rankingPoints: 1526.2, flagPath: "https://www.worldometers.info/img/flags/ks-flag.gif"}
  },
  {
    id:43,
    groupId: 7,
    startTime: "2022-11-24 17:00",
    stadium: "Al Thumama Stadium, Doha",
    homeTeam: {id: 6, name: "Portugal", rankingPoints: 1678.65, flagPath: "https://www.worldometers.info/img/flags/po-flag.gif"},
    awayTeam: {id: 28, name: "Ghana", rankingPoints: 1389.68, flagPath: "https://www.worldometers.info/img/flags/gh-flag.gif"}
  },
  {
    id:44,
    groupId: 7,
    startTime: "2022-11-28 14:00",
    stadium: "Al Thumama Stadium, Doha",
    homeTeam: {id: 22, name: "South Korea", rankingPoints: 1526.2, flagPath: "https://www.worldometers.info/img/flags/ks-flag.gif"},
    awayTeam: {id: 28, name: "Ghana", rankingPoints: 1389.68, flagPath: "https://www.worldometers.info/img/flags/gh-flag.gif"}
  },
  {
    id:45,
    groupId: 7,
    startTime: "2022-11-28 20:00",
    stadium: "Khalifa International Stadium, Al Rayyan",
    homeTeam: {id: 6, name: "Portugal", rankingPoints: 1678.65, flagPath: "https://www.worldometers.info/img/flags/po-flag.gif"},
    awayTeam: {id: 12, name: "Uruguay", rankingPoints: 1643.71, flagPath: "https://www.worldometers.info/img/flags/uy-flag.gif"}
  },
  {
    id:46,
    groupId: 7,
    startTime: "2022-12-02 16:00",
    stadium: "Khalifa International Stadium, Al Rayyan",
    homeTeam: {id: 22, name: "South Korea", rankingPoints: 1526.2, flagPath: "https://www.worldometers.info/img/flags/ks-flag.gif"},
    awayTeam: {id: 6, name: "Portugal", rankingPoints: 1678.65, flagPath: "https://www.worldometers.info/img/flags/po-flag.gif"}
  },
  {
    id:47,
    groupId: 7,
    startTime: "2022-12-02 16:00",
    stadium: "Al Bayt Stadium, Al Khor",
    homeTeam: {id: 28, name: "Ghana", rankingPoints: 1389.68, flagPath: "https://www.worldometers.info/img/flags/gh-flag.gif"},
    awayTeam: {id: 12, name: "Uruguay", rankingPoints: 1643.71, flagPath: "https://www.worldometers.info/img/flags/uy-flag.gif"}
  }
]
