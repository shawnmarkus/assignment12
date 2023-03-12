import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import data from "../data/Videolist.json";
import Style from "../css/VideoPlayer.module.css";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

const VideoPlayer = () => {
  const { videoId, idx } = useParams();

  const [commentData, setCommentData] = useState([]);

  // const isLiked = useRef();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeBtn = () => {
    if (!isLiked) {
      console.log("liked it");
      localStorage.setItem("likedVideo", JSON.stringify([videoId]));
      setIsLiked(true);
      data[idx]["noOfLikes"] = 1 + data[idx]["noOfLikes"];
    }
  };

  useEffect(() => {
    try {
      const data = localStorage.getItem(videoId);
      const jsonData = JSON.parse(data);
      setCommentData(jsonData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    const retrieveData = JSON.parse(localStorage.getItem("likedVideo"));
    console.log("retrieved data", retrieveData);
    if (retrieveData) {
      console.log(
        "print kr bhai",
        retrieveData.filter((itrId) => itrId === videoId)
      );
      setIsLiked(
        retrieveData.filter((itrId) => itrId === videoId) ? true : false
      );
    } else {
      setIsLiked(false);
    }
  }, [isLiked]);

  return (
    <div className="container ">
      <ReactPlayer
        controls={true}
        muted={false}
        width="100%"
        height="100%"
        url={data[idx]["url"]}
      />

      <div className={Style.likeBtn}>
        <div className="d-flex" onClick={handleLikeBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            height="30"
            width="30"
          >
            <path
              fill={isLiked ? "blue" : ""}
              d="M35.8 42H13.6V16.4L27.5 2l1.95 1.55q.3.25.45.7.15.45.15 1.1v.5L27.8 16.4h14.95q1.2 0 2.1.9.9.9.9 2.1v4.1q0 .35.075.725t-.075.725l-6.3 14.5q-.45 1.05-1.475 1.8Q36.95 42 35.8 42Zm-19.2-3h19.85l6.3-14.95V19.4H24.1l2.65-12.45-10.15 10.7Zm0-21.35V39Zm-3-1.25v3H6.95V39h6.65v3H3.95V16.4Z"
            />
          </svg>
          &nbsp;
          <p>{data[idx]["noOfLikes"]}</p>
        </div>
      </div>

      <div className={Style.commentsSection}>
        <CommentSection
          currentUser={{
            currentUserId: "01a",
            currentUserImg:
              "https://ui-avatars.com/api/name=Riya&background=random",
            currentUserProfile:
              "https://ui-avatars.com/api/name=Riya&background=random",
            currentUserFullName: "Shivam Sharma",
          }}
          commentData={commentData}
          onSubmitAction={(data) => {
            // console.log("check submit ", JSON.stringify(data, null, 2));
            let currentData = commentData;

            // console.log(" check the current value ==========> ", currentData);

            if (!currentData) {
              setCommentData([data]);
              localStorage.setItem(videoId, JSON.stringify([data]));

              // console.log("its an array");
            } else {
              // console.log("its not array");
              currentData = [...currentData, data];
              setCommentData(currentData);
              localStorage.setItem(videoId, JSON.stringify(currentData));
            }
          }}
          onReplyAction={(data) => {
            let currentData = commentData;
            setCommentData(currentData);
            localStorage.setItem(videoId, JSON.stringify(currentData));
          }}
          currentData={(commentData) => {
            console.log("curent  commentData", commentData);
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
