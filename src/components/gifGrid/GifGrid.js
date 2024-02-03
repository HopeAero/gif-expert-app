import React, { Fragment } from "react";
import "./gifGrid.css";
import { GifGridItem } from "./GifGridItem";
import { useFetchGif } from "../../hooks/useFetchGif";
import { Oval } from "react-loader-spinner";

export const GifGrid = ({ category, setCategories }) => {
  const { data, loading } = useFetchGif(category);

  console.log(data);

  return (
    <Fragment>
      <h3>{category}</h3>

      {loading && <Oval color="#00FFFF" secondaryColor="#66FFFF"></Oval>}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} setCategories={setCategories} />
        ))}
      </div>
    </Fragment>
  );
};
