import axios from "axios";
//14ff817e21msh89f7db2e4007dacp18382bjsn09e817c75ff3
//c997c47409msh7fcb16a12dc6ebcp173565jsnc8635a1e1c2d
const options = {
  url: "https://youtube-v31.p.rapidapi.com",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "14ff817e21msh89f7db2e4007dacp18382bjsn09e817c75ff3",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchData = async (url) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/${url}`,
    options
  );

  return data;
};














const Options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "14ff817e21msh89f7db2e4007dacp18382bjsn09e817c75ff3",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const etchData = async (url) => {
  const response = await fetch(
    "https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date",
    Options
  );
  const data = await response.json();

  return data;
};
