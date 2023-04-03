import React from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";
import stories from "./invStories";

function Stories() {
  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {stories.map((profile) => (
        <Story key={profile.id} img={profile.img} username={profile.username} />
      ))}
    </div>
  );
}

export default Stories;
