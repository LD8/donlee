import React from "react";
import { useParams } from "react-router-dom";
import { PostLi } from "./PostLi";
import { SMyPosts } from "./BlogPage";

export const FilteredPosts = ({ posts, url }) => {
  const { name } = useParams();
  const filteredPosts = posts.filter((post) => post.tags.includes(name));
  return (
    <SMyPosts id="SMyPosts">
      <section className="brief">
        <h3><em>" {name} "</em></h3>
      </section>

      <section className="posts">
        <ul>
          {filteredPosts.map((post, index) => (
            <PostLi key={index} post={post} url={url} />
          ))}
        </ul>
      </section>
    </SMyPosts>
  );
};
