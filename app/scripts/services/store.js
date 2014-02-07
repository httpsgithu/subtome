'use strict';

angular.module('subtome')
.factory('store', function() {
  var apps = [
  {
    name: 'Feedly',
    tags: ['chrome', 'firefox', 'mobile'],
    description: 'Feedly is a news aggregator application for various Web browsers and mobile devices running iOS and Android.',
    url: 'http://feedly.com/',
    icon: 'http://feedly.com/favicon.ico',
    registration: {
      name: 'Feedly',
      url: 'http://www.feedly.com/home#subscription/feed/{feed}'
    }
  },
  {
    name: 'The Old Reader',
    tags: ['web', 'popular', 'advanced'],
    description: 'The Old Reader was built to be a Google Reader replacement, and it does it well!',
    url: 'http://theoldreader.com/',
    icon: 'http://theoldreader.com/favicon.ico',
    registration: {
      name: 'The Old Reader',
      url: 'http://theoldreader.com/feeds/subscribe?url={feed}'
    },
    installed: false
  },
  {
    name: 'Feedbin',
    tags: ['web'],
    description: 'A fast, simple RSS feed reader that delivers a great reading experience.',
    url: 'https://feedbin.me/',
    icon: 'https://feedbin.me/favicon.ico',
    registration: {
      name: 'Feedbin',
      url: 'https://feedbin.me/?subscribe={feed}'
    }
  },
  {
    name: 'BazQux Reader',
    tags: ['web', 'comments'],
    description: 'RSS feed reader that shows comments to posts and supports reading of Facebook and Google+ pages.',
    url: 'https://bazqux.com/',
    icon: 'https://bazqux.com/favicon.ico',
    registration: {
      name: 'BazQux',
      url: 'https://bazqux.com/add?url={feed}'
    }
  },
  {
    name: 'NewsBlur',
    tags: ['web', 'mobile', 'advanced', 'open source'],
    description: 'NewsBlur is a personal news reader bringing people together to talk about the world.',
    url: 'http://www.newsblur.com/',
    icon: 'http://newsblur.com/favicon.ico',
    registration: {
      name: 'NewsBlur',
      url: 'http://www.newsblur.com/?url={feed}'
    },
    installed: true
  },
  {
    name: 'Digg',
    tags: ['web', 'mobile'],
    description: 'Digg is still one of the most famous news site out there. The Digg reader lets you digg stories up.',
    url: 'https://digg.com/reader/',
    icon: 'https://digg.com//static/images/reader/digg_favicon_reader.png',
    registration: {
      name: 'Digg Reader',
      url: 'http://digg.com/reader/search/{feed}'
    }
  },
  {
    name: 'Rivered',
    tags: ['web'],
    description: 'An uncluttered River of News; no unread item count, no complexity. Just the content you subscribe to.',
    url: 'http://www.rivered.io/',
    icon: 'http://www.rivered.io/favicon.ico',
    registration: {
      name: 'Rivered',
      url: 'http://www.rivered.io/add?url={feed}'
    }
  },
  {
    name: 'Bloglovin',
    tags: ['web', 'iOS', 'blog'],
    description: 'Bloglovin was created to make reading blogs awesome.',
    url: 'http://www.bloglovin.com/',
    icon: 'http://www.bloglovin.com/images/favicon.ico',
    registration: {
      name: 'Bloglovin',
      url: 'http://www.bloglovin.com/search/{feed}'
    }
  },
  {
    name: 'Blogtrottr',
    tags: ['email', 'digests'],
    description: 'Blogtrottr delivers updates from all of your favourite news, feeds, and blogs directly to your email inbox.',
    url: 'http://blogtrottr.com/',
    icon: 'http://blogtrottr.com/favicon.ico',
    registration: {
      name: 'Blogtrottr',
      url: 'http://blogtrottr.com/?subscribe={feed}'
    }
  },
  {
    name: 'Feedleap',
    tags: ['web', 'kippt', 'bookmark', 'open source'],
    description: 'FeedLeap lets you subscribe to your favorite RSS feeds and store new entries as Clips in any Kippt List you want.',
    url: 'https://feedleap.herokuapp.com',
    icon: 'https://feedleap.herokuapp.com/static/favicon.ico',
    registration: {
      name: 'Feedleap',
      url: 'https://feedleap.herokuapp.com/feeds/new/?feed={feed}&source=subtome'
    }
  },
  {
    name: 'FeedHQ',
    tags: ['web', 'mobile', 'open source'],
    description: 'FeedHQ is a feed reader built with readability and mobility in mind',
    url: 'https://feedhq.org/',
    icon: 'https://feedhq.org/static/core/img/icon-rss.png',
    registration: {
      name: 'FeedHQ',
      url: 'https://feedhq.org/subscribe/?feeds={feeds}&url={url}'
    }
  },
  {
    name: 'AOL Reader',
    tags: ['web', 'mobile', 'tablets'],
    description: 'All your favorite websites, in one place',
    url: 'http://reader.aol.com/',
    icon: 'http://www.aol.com/favicon.ico',
    registration: {
      name: 'AOL Reader',
      url: 'http://reader.aol.com/#quickadd/{feed}'
    }
  },
  {
    name: 'InoReader',
    tags: ['web', 'advanced'],
    description: 'Light and Fast RSS/Atom Reader inspired by Google Reader',
    url: 'https://inoreader.com/',
    icon: 'https://inoreader.com/images/icons/72_x_72_pixels.png',
    registration: {
      name: 'InoReader',
      url: 'https://www.inoreader.com/?add_feed={feed}'
    }
  },
  {
    name: "MnmlRdr",
    tags: ["web", "mobile", "minimal", "lightweight"],
    description: "A fast and lightweight feed reader without \"feature clutter\" so you can focus on the content.",
    url:"https://mnmlrdr.com/",
    icon:"https://mnmlrdr.com/static/images/logo.png",
    registration:{
      name: "MnmlRdr",
      url: "https://mnmlrdr.com/settings/subscriptions/add?feed={feed}"
    }
  },
  {
    name: "Netvibes",
    tags: ["web", "dashboard", "analytics"],
    description: "Netvibes is the all-in-one dashboard intelligence platform.",
    url:"http://www.netvibes.com",
    icon:"http://cdn.netvibes.com/img/favicon-12.png",
    registration:{
      name: "Netvibes",
      url: "http://www.netvibes.com/subscribe.php?url={feed}"
    }
  },
  {
    name: "Squirro",
    tags: ["web", "intelligence", "assistant"],
    description: "Squirro is the leader in Context Intelligence, combining structured and unstructured data to provide the 'Why' behind the data.",
    url:"http://squirro.com/",
    icon:"http://squirro.com/files/2213/3673/7722/favicon.ico",
    registration:{
      name: "Squirro",
      url: "https://squirro.com/app/#add/query/{feed}"
    }
  },
  {
    name: "Player FM",
    tags: ["podcast", "mobile", "web"],
    description: "Listen to talk shows on hundreds of topics, everything from Politics to Pokemon! ",
    url:"http://player.fm/",
    icon:"http://player.fm/favicon.ico",
    registration:{
      name: "Player FM",
      url: "http://player.fm/series?url={feed}&referrer={url}&related_feeds={feeds}"
    }
  },
  {
    name: "My Yahoo",
    tags: ["yahoo", "legacy"],
    description: "My Yahoo is a customizable web page with news, stock quotes, weather, and many other features.",
    url:"http://my.yahoo.com/",
    icon:"http://my.yahoo.com/favicon.ico",
    registration:{
      name: "My Yahoo",
      url: "http://add.my.yahoo.com/rss?url={feed}"
    }
  },
  {
    name: "Kouio",
    tags: ["web", "mobile", "tablets"],
    description: "Kouio is the RSS reader you've always wanted.",
    url:"https://kouio.com/",
    icon:"https://kouio.com/favicon.ico",
    registration:{
      name: "Kouio",
      url: "https://kouio.com/subscribe?url={feed}"
    }
  },
  {
    name: "RSS feed redirect",
    tags: ["developer"],
    description: "Redirects you to the raw RSS feed. This is for advanced users only.",
    url:"",
    icon:"https://upload.wikimedia.org/wikipedia/en/4/43/Feed-icon.svg",
    registration:{
      name: "RSS feed",
      url: "/#/redirect?to={feed}"
    }
  }
  ];
  return apps;
});
