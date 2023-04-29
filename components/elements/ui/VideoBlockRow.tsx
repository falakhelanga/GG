import React from "react";
import VideoBlock from "./VideoBlock";
import ReactPlayer from "react-player";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import truncate from "@/helpers.tsx/textTruncate";

const VideoBlockRow = ({ video }: { video: any }) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-6 md:mb-8 mb-8">
      {video.map((item: any) => (
        <div key={item.id} className="w-full flex justify-center  flex-col">
          <div className="w-full   h-full">
            <ReactPlayer
              className="react-player aspect-video "
              height={"100%"}
              width={"100%"}
              url={item.video_url || imageFormatter(item.video)}
              controls
            />
          </div>
          <div className="w-full text-center text-green font-bold md:text-lg md:mt-8 mt-4">
            {truncate(30, item.product.data?.attributes?.name)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoBlockRow;
