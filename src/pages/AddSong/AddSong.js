import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createSong } from "../../data/songSlice";

export default function AddSong() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function save(formData) {
    dispatch(createSong(formData));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <TextField label="Song Name" {...register("songName")} />
        <br />
        <br />
        <TextField label="Rating" {...register("rating")} />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}

//we can also do put and patch, and delete here.
