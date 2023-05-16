import React, { useEffect } from "react";
import SongItem from "./SongItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../data/songSlice";
import { Skeleton } from "@mui/material";

export default function SongsList() {
  //cannont use useContext because coomonGet will turn into a hook and we don't want that.

  //const [songs, setSongs] = useState([]);
  const { songs } = useSelector(state => state.songs); //if api was already called, this is saved to
  const { isSongLoading } = useSelector(state => state.songs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (songs.length == 0) {
      dispatch(fetchSongs());
    }
  }, []);

  function sortDataByName() {
    let newSongs = [...songs].sort((a, b) =>
      a.songName.toLowerCase() < b.songName.toLowerCase() ? -1 : 0
    );
    // setSongs(newSongs);
  }
  function sortDataByRating() {
    let newSongs = [...songs].sort((a, b) =>
      Number(a.rating) < Number(b.rating) ? -1 : 0
    );
  }
  return (
    <div>
      <button onClick={sortDataByName}>Sort</button>
      {isSongLoading ? (
        <>
          <SongItem song={<Skeleton></Skeleton>} />
          <SongItem song={<Skeleton></Skeleton>} />
          <SongItem song={<Skeleton></Skeleton>} />
        </>
      ) : (
        songs.map(x => <SongItem song={x} />)
      )}
    </div>
  );
}

//client side sorting vs database sorting

//ask question: how big is the data being sorted?  Are you using pagination?  If pagination, then use server side
//if too large data, then also use server side sorting, however, if your client machine is more powerfule than server machines, then use client machine to sort
