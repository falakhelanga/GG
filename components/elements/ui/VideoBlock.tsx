import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import React from "react";
import ReactPlayer from "react-player";

const VideoBlock = ({
  video,
  video_url,
}: {
  video: any;
  video_url: string;
}) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="md:w-[80%] w-full   h-full">
        <ReactPlayer
          className="react-player aspect-video "
          height={"100%"}
          width={"100%"}
          url={video_url || imageFormatter(video)}
          controls
        />
      </div>
      <div className="w-full text-center text-green font-bold md:text-lg md:my-8 my-4">
        test
      </div>
    </div>
  );
};

export default VideoBlock;
