import React from "react";
import Tweet from "./Tweet";

export default function TweetsList({ tweets }) {
  if (!tweets || !Array.isArray(tweets)) {
    return null; // или другая обработка, если нужно
  }

  return tweets.map((tweet, index) => <Tweet {...tweet} key={index} />);
}
