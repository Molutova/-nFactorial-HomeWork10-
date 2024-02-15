import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../image";
import Tweet from "./Tweet";

export default function TweetsList() {
  const tweets = [
    {
      authorName: "Free KZ today",
      authorUserName: "@kz",
      img: KZ_IMG_PATH,
      content:
        "UPDATE: Abay says he has not considered becoming finance minister again",
      retweets: 1000,
      replice: 200,
      likes: 300,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Front-End Developer course starts today ",
      retweets: 4000,
      replice: 2300,
      likes: 560,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Front-End Developer course starts today ",
      retweets: 20,
      replice: 20,
      likes: 560,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Front-End Developer course starts today ",
      retweets: 5000,
      replice: 2300,
      likes: 50,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Front-End Developer course starts today ",
      retweets: 40,
      replice: 230,
      likes: 50,
    },
  ];
  return tweets.map((tweet, index) => <Tweet {...tweet} key={index} />);
}
