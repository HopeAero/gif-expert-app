import React, { useState } from "react";
import { AddCategory } from "./addCategory/AddCategory";
import { GifGrid } from "./gifGrid/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </ol>
    </div>
  );
};
