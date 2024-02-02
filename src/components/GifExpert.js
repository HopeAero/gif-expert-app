import React, { useState } from "react";
import { AddCategory } from "./addCategory/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};
