import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      {/* story */}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img="https://links.papareact.com/3ke"
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
