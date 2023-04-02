import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "DinoYt",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption:
      "Dino Yt is the first person in the world of the Internet and the first person in the Internet",
  },
  {
    id: "123",
    username: "DinoYt",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption:
      "Dino Yt is the first person in the world of the Internet and the first person in the Internet",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
