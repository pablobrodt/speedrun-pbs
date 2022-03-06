function getFirstVideoLink(videos = {}) {
  const FIRST_VIDEO_INDEX = 0
  const { links } = videos

  const hasAtLeastOneVideo = links?.length > 0

  return hasAtLeastOneVideo ? links[FIRST_VIDEO_INDEX] : {}
}

function getRunDuration(times = {}) {
  const { realtime } = times

  return realtime
}

function getGame(game = {}) {
  const {
    data: {
      id,
      names,
      weblink,
      assets,
    },
  } = game

  return {
    id,
    name: names?.international,
    link: weblink,
    assets,
  }
}

function getCategory(category = {}) {
  const { data } = category
  const { id, name } = data

  return {
    id,
    name,
  }
}

export function personalBestFactory(data = {}) {
  const {
    place,
    run,
    game,
    category,
  } = data

  const {
    videos,
    comment,
    times,
  } = run

  const video = getFirstVideoLink(videos)
  const time = getRunDuration(times)
  const simpleGame = getGame(game)
  const simpleCategory = getCategory(category)

  return {
    place,
    video,
    comment,
    time,
    game: simpleGame,
    category: simpleCategory,
  }
}

const mock = {
  "place": 2,
  "run": {
    "id": "y48o3xqm",
    "weblink": "https://www.speedrun.com/mvci/run/y48o3xqm",
    "game": "v1pr5z68",
    "level": null,
    "category": "jdr1z402",
    "videos": {
      "links": [
        {
          "uri": "https://www.twitch.tv/videos/1283884698"
        }
      ]
    },
    "comment": "6:41 with retime\r\n\r\nShoutouts to @LD_speedruns\r\n\r\nGG com o Zero cruzeirense pai",
    "status": {
      "status": "verified",
      "examiner": "18qp1qdx",
      "verify-date": "2022-02-02T20:20:41Z"
    },
    "players": [
      {
        "rel": "user",
        "id": "863m3p38",
        "uri": "https://www.speedrun.com/api/v1/users/863m3p38"
      }
    ],
    "date": "2022-02-01",
    "submitted": "2022-02-02T00:22:20Z",
    "times": {
      "primary": "PT6M41S",
      "primary_t": 401,
      "realtime": "PT6M41S",
      "realtime_t": 401,
      "realtime_noloads": null,
      "realtime_noloads_t": 0,
      "ingame": null,
      "ingame_t": 0
    },
    "system": {
      "platform": "nzelkr6q",
      "emulated": false,
      "region": "pr184lqn"
    },
    "splits": {
      "rel": "splits.io",
      "uri": "https://splits.io/api/v3/runs/8ybj"
    },
    "values": {
      "onv62o08": "jqzvwx2l",
      "ylpvmdrl": "5q8235kq"
    },
    "links": [
      {
        "rel": "self",
        "uri": "https://www.speedrun.com/api/v1/runs/y48o3xqm"
      },
      {
        "rel": "game",
        "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68"
      },
      {
        "rel": "category",
        "uri": "https://www.speedrun.com/api/v1/categories/jdr1z402"
      },
      {
        "rel": "platform",
        "uri": "https://www.speedrun.com/api/v1/platforms/nzelkr6q"
      },
      {
        "rel": "region",
        "uri": "https://www.speedrun.com/api/v1/regions/pr184lqn"
      },
      {
        "rel": "examiner",
        "uri": "https://www.speedrun.com/api/v1/users/18qp1qdx"
      }
    ]
  },
  "game": {
    "data": {
      "id": "v1pr5z68",
      "names": {
        "international": "Marvel vs Capcom: Infinite",
        "japanese": null,
        "twitch": "Marvel vs Capcom: Infinite"
      },
      "abbreviation": "mvci",
      "weblink": "https://www.speedrun.com/mvci",
      "discord": "",
      "released": 2016,
      "release-date": "2016-12-31",
      "ruleset": {
        "show-milliseconds": false,
        "require-verification": true,
        "require-video": true,
        "run-times": [
          "realtime"
        ],
        "default-time": "realtime",
        "emulators-allowed": false
      },
      "romhack": false,
      "gametypes": [],
      "platforms": [
        "nzelkr6q",
        "o7e2mx6w",
        "8gej2n93"
      ],
      "regions": [
        "pr184lqn",
        "e6lxy1dz",
        "o316x197",
        "mol4z19n",
        "p2g50lnk"
      ],
      "genres": [
        "m65jyv5k"
      ],
      "engines": [
        "81p2nk5d"
      ],
      "developers": [],
      "publishers": [],
      "moderators": {
        "v816253x": "super-moderator",
        "18qp1qdx": "moderator"
      },
      "created": "2016-12-17T10:56:59Z",
      "assets": {
        "logo": {
          "uri": "https://www.speedrun.com/themeasset/6r5gqpwm/logo?v=0b555e9"
        },
        "cover-tiny": {
          "uri": "https://www.speedrun.com/gameasset/v1pr5z68/cover?v=0f68e74"
        },
        "cover-small": {
          "uri": "https://www.speedrun.com/gameasset/v1pr5z68/cover?v=0f68e74"
        },
        "cover-medium": {
          "uri": "https://www.speedrun.com/gameasset/v1pr5z68/cover?v=0f68e74"
        },
        "cover-large": {
          "uri": "https://www.speedrun.com/gameasset/v1pr5z68/cover?v=0f68e74"
        },
        "icon": {
          "uri": "https://www.speedrun.com/themeasset/6r5gqpwm/favicon?v=f66a42a"
        },
        "trophy-1st": {
          "uri": "https://www.speedrun.com/images/1st.png"
        },
        "trophy-2nd": {
          "uri": "https://www.speedrun.com/images/2nd.png"
        },
        "trophy-3rd": {
          "uri": "https://www.speedrun.com/images/3rd.png"
        },
        "trophy-4th": {
          "uri": null
        },
        "background": {
          "uri": "https://www.speedrun.com/themeasset/6r5gqpwm/background?v=4d5beac"
        },
        "foreground": {
          "uri": null
        }
      },
      "links": [
        {
          "rel": "self",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68"
        },
        {
          "rel": "runs",
          "uri": "https://www.speedrun.com/api/v1/runs?game=v1pr5z68"
        },
        {
          "rel": "levels",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68/levels"
        },
        {
          "rel": "categories",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68/categories"
        },
        {
          "rel": "variables",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68/variables"
        },
        {
          "rel": "records",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68/records"
        },
        {
          "rel": "series",
          "uri": "https://www.speedrun.com/api/v1/series/5ndgkenr"
        },
        {
          "rel": "series",
          "uri": "https://www.speedrun.com/api/v1/series/m72ldwn2"
        },
        {
          "rel": "derived-games",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68/derived-games"
        },
        {
          "rel": "romhacks",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68/derived-games"
        },
        {
          "rel": "leaderboard",
          "uri": "https://www.speedrun.com/api/v1/leaderboards/v1pr5z68/category/ndx5jyrk"
        }
      ]
    }
  },
  "category": {
    "data": {
      "id": "jdr1z402",
      "name": "Arcade Mode",
      "weblink": "https://www.speedrun.com/mvci#Arcade_Mode",
      "type": "per-game",
      "rules": "Timer Required in Video\r\n\r\nLoading Time is part of Run Time. \r\n\r\nDifficulty - Very Easy to Very Hard //\r\nDamage - Normal //\r\nTimer - 99 to Infinite\r\n\r\nAll must be shown before starting the run.\r\n\r\nStone Selection During Run - Accepted\r\nRTA - Must be shown during the run\r\n[Selecting Rematch/Restarting Match = Instant Rejection]\r\n\r\nObjective - Complete all 7 Stages. Timer Starts after selecting a stone and timer ends after the final hit on Ultron Omega.",
      "players": {
        "type": "exactly",
        "value": 1
      },
      "miscellaneous": false,
      "links": [
        {
          "rel": "self",
          "uri": "https://www.speedrun.com/api/v1/categories/jdr1z402"
        },
        {
          "rel": "game",
          "uri": "https://www.speedrun.com/api/v1/games/v1pr5z68"
        },
        {
          "rel": "variables",
          "uri": "https://www.speedrun.com/api/v1/categories/jdr1z402/variables"
        },
        {
          "rel": "records",
          "uri": "https://www.speedrun.com/api/v1/categories/jdr1z402/records"
        },
        {
          "rel": "runs",
          "uri": "https://www.speedrun.com/api/v1/runs?category=jdr1z402"
        },
        {
          "rel": "leaderboard",
          "uri": "https://www.speedrun.com/api/v1/leaderboards/v1pr5z68/category/jdr1z402"
        }
      ]
    }
  }
}