import { rest } from 'msw';

const user = {
  "error": false,
  "amount": 10,
  "jokes": [
    {
      "category": "Programming",
      "type": "twopart",
      "setup": "Why do Java programmers hate communism?",
      "delivery": "They don't want to live in a classless society.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 53,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Pun",
      "type": "twopart",
      "setup": "Two peanuts were walking.",
      "delivery": "One was assaulted.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 169,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "twopart",
      "setup": "What's the object-oriented way to become wealthy?",
      "delivery": "Inheritance.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 46,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Christmas",
      "type": "twopart",
      "setup": "What does Santa suffer from if he gets stuck in a chimney?",
      "delivery": "Claustrophobia!",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 241,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Pun",
      "type": "twopart",
      "setup": "Why shouldn't you visit an expensive wig shop?",
      "delivery": "It's too high a price \"toupee.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": true,
      "id": 268,
      "lang": "en"
    },
    {
      "category": "Pun",
      "type": "twopart",
      "setup": "The other day my wife asked me to pass her lipstick, but I accidentally gave her a glue stick.",
      "delivery": "She still isn't talking to me.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": true,
      "id": 284,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "twopart",
      "setup": "Why are modern programming languages so materialistic?",
      "delivery": "Because they are object-oriented.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 21,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Christmas",
      "type": "twopart",
      "setup": "Why does Santa have three gardens?",
      "delivery": "So he can 'ho ho ho'!",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 242,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Misc",
      "type": "twopart",
      "setup": "What's the difference between a hot potato and a flying pig?",
      "delivery": "One's a heated yam, the other's a yeeted ham.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 141,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Pun",
      "type": "twopart",
      "setup": "Why do cows wear bells?",
      "delivery": "Because their horns don't work!",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 222,
      "safe": true,
      "lang": "en"
    }
  ]
}

// export default userJson = JSON.parse(user);
export default user;

