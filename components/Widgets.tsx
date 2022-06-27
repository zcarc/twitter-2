import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      {/* Search */}
      <div className="mt-2 flex items-center space-x-2 bg-gray-100 rounded-full p-3">
        <SearchIcon className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default Widgets;
