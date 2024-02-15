import { COMMENTS, KZ_IMG_PATH, RETWEETS, LIKES, SHARE } from "../image";
export default function Tweet(tweet) {
  return (
    <div className="mx-3" style={{ borderBottom: "2px solid whitesmoke" }}>
      <p className="mx-5" style={{ fontSize: 13, fontWeight: "600" }}>
        You might like it! <span style={{ color: "blue" }}>See more!</span>
      </p>
      <div className="d-flex">
        <img
          src={KZ_IMG_PATH}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <div className="mx-3">
          <p style={{ fontWeight: 600 }}>
            {tweet.authorName}{" "}
            <span style={{ color: "grey" }}>{tweet.authorUserName}</span>
          </p>
          <p>{tweet.content}</p>
        </div>
      </div>
      <div
        className="d-flex m-auto justify-content-between "
        style={{ width: "80%" }}
      >
        <div className="d-flex ">
          <div style={{ width: 20 }}>{COMMENTS}</div>
          <p>{tweet.replice}</p>
        </div>
        <div className="d-flex ">
          <div style={{ width: 20 }}>{RETWEETS}</div>
          <p>{tweet.retweets}</p>
        </div>
        <div className="d-flex ">
          <div style={{ width: 20 }}>{LIKES}</div>
          <p>{tweet.likes}</p>
        </div>
        <div className="d-flex ">
          <div style={{ width: 20 }}>{SHARE}</div>
        </div>
      </div>
    </div>
  );
}
