import React, { useState } from "react";

export default function ScreenTab() {

  return (
    <div className="w-full rounded-xl">
      <div className="bg-backgroundGrey rounded-3xl p-4 flex flex-col gap-1.5">

        {/* Containers for each option */}
        <div className="flex items-center p-2 rounded-xl  bg-defaultYellow gap-3">
            <div>
              <img
                  src="/Home.png"
                  alt="home icon"
                  style={{ width: "1.5em", height: "1.5em" }}
                />
            </div>
            <div>
              <p className="font-semibold text-base text-black ">Home Feed</p>
            </div>
        </div>
        <div className="flex items-center p-2 rounded-xl  bg-backgroundGrey gap-3 hover:bg-lightYellow">
              <div>
                <img
                  src="/Eye.png"
                  alt="eye icon"
                  style={{ width: "1.5em", height: "1.5em" }}
                />
              </div>
              <div>
                <p className="font-semibold text-base text-black">Explore Polls</p>
              </div>
        </div>
        <div className="flex items-center p-2 rounded-xl  bg-backgroundGrey gap-3 hover:bg-lightYellow">
          <div>
              <img
                src="/Plus.png"
                alt="plus icon"
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </div>
            <div>
              <p className="font-semibold text-base text-black">Create Post</p>
            </div>
          </div>
        </div>
      </div>
  );
}
