import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "./image";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      tweets: [
        {
          id: 0,
          authorName: "Free KZ today",
          authorUserName: "@kz",
          img: KZ_IMG_PATH,
          content:
            "UPDATE: Abay says he has not considered becoming finance minister again",
          retweets: 1000,
          replice: 200,
          likes: 300,
          subject: "politics",
        },
        {
          id: 1,
          authorName: "nFactorial",
          authorUserName: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Front-End Developer course starts today ",
          retweets: 4000,
          replice: 2300,
          likes: 560,
          subject: "education",
        },
        {
          id: 2,
          authorName: "nFactorial",
          authorUserName: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Back End developer courses ",
          retweets: 60,
          replice: 200,
          likes: 560,
          subject: "education",
        },
      ],
      filteredTweets: [
        {
          id: 0,
          authorName: "Free KZ today",
          authorUserName: "@kz",
          img: KZ_IMG_PATH,
          content:
            "UPDATE: Abay says he has not considered becoming finance minister again",
          retweets: 1000,
          replice: 200,
          likes: 300,
          subject: "politics",
        },
        {
          id: 1,
          authorName: "nFactorial",
          authorUserName: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Front-End Developer course starts today ",
          retweets: 4000,
          replice: 2300,
          likes: 560,
          subject: "education",
        },
        {
          id: 2,
          authorName: "nFactorial",
          authorUserName: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Back End developer courses ",
          retweets: 60,
          replice: 200,
          likes: 560,
          subject: "education",
        },
      ],
    };
  }
  handleSearchChange = (e) => {
    this.setState({ content: e.target.value });
  };

  filterTweetsByTopic = (subject) => {
    const { content, tweets } = this.state;
    const filteredTweets = tweets.filter((tweet) =>
      tweet.subject.toLowerCase().includes(content.toLowerCase())
    );
    this.setState({ filteredTweets });
  };

  render() {
    const { tweets, content } = this.state;

    return (
      <div className="w-50 mt-3">
        <h5 className=" mx-3 ">Home</h5>
        <NewTweet />
        <div>
          <input
            type="text"
            placeholder="search..."
            value={content}
            onChange={this.handleSearchChange}
            style={{ borderRadius: 10, fontSize: 18, outline: "none" }}
          />
          <button onClick={this.filterTweetsByTopic}>Search</button>
        </div>
        <TweetsList tweets={this.state.filteredTweets} />
      </div>
    );
  }
}

export default Home;
