import React from "react";
import axios from "axios";

const API_KEY = "gaK7tfeiO1d1shQ2LqXJx2qYV4L2";

const getMatches = async () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

  return await axios.get(url).catch((err) => console.log(err));
};

export default getMatches;
