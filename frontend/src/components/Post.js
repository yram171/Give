import React from "react";

export default function Post({
  username,
  groupName,
  timeLeft,
  questionText,
  images,
  profilePic,
  //pollOptions
}) {
  return (
      <div className="bg-backgroundGrey rounded-xl shadow p-4">

        {/*Top Section*/}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={profilePic}
              alt={`${username} profile`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">@{username}</p>
              <p className="text-sm text-black">
                posted to <span className="font-semibold">{groupName}</span>
              </p>
            </div>
          </div>
          <span className="text-darkGrey text-sm">{timeLeft} left</span>
        </div>

        {/* Question */}
        <p className="mt-3 font-medium">{questionText}</p>
        
        {/* Images */}
        {images?.length > 0 && (
          <div className="flex space-x-2 mt-3">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-darkGrey h-24 w-1/2 rounded-md overflow-hidden"
              >
                {img && (
                  <img
                    src={img}
                    alt={`Option ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Poll */}
          {/* <div className="mt-4">
            <PollBox options={pollOptions} />
          </div> */}

    </div>
      );
}
