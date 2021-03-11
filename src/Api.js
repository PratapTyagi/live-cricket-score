import React from "react";
import axios from "axios";

const API_KEY = "gaK7tfeiO1d1shQ2LqXJx2qYV4L2";

export const getMatches = async () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

  return await axios.get(url).catch((err) => console.log(err));
};

export const showDetails = async (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

  return await axios.get(url).catch((err) => console.log(err));
};
