import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import data from "../data/Videolist.json";
import Style from "../css/VideoPlayer.module.css";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

const VideoPlayer = () => {
  const { videoId, idx } = useParams();

  const [commentData, setCommentData] = useState([]);

  // comment data
  // const commentData = [
  //   {
  //     userId: "02b",
  //     comId: "017",
  //     fullName: "Lily",
  //     userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
  //     text: "I think you have a point",
  //     avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
  //     replies: [],
  //   },
  // ];

  // useEffect(() => {
  //   console.log("index=> ", videoId, idx);
  // });

  useEffect(() => {
    try {
      const data = localStorage.getItem(videoId);
      const jsonData = JSON.parse(data);
      // console.log("item digged out", JSON.stringify(jsonData, null, 2));
      setCommentData(jsonData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="container ">
      <ReactPlayer
        controls={true}
        muted={false}
        width="100%"
        height="100%"
        url={data[idx]["url"]}
      />

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
