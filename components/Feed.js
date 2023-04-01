import React from "react";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3">
      {/* Section */}
      <section>
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>

      {/* secrion */}
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
