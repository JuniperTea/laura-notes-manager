import React from "react";
import { commonDelete } from "../../shared/utils/utils";
import { setSongs } from "../../data/songSlice";
import { useDispatch } from "react-redux";

export default function SongItem({ song }) {
  const dispatch = useDispatch();

  function deleteSong() {
    if (window.confirm("you sure?")) {
      commonDelete("/songs/" + song._id).then(response => {
        dispatch(setSongs(response));
      });
    }
  }
  return (
    <div className="song-item" onClick={deleteSong}>
      <div>{song.songName}</div>
      <div>{song.rating}</div>
    </div>
  );
}

//each componetn must have it's own code.  not good practice to have dependencies.
