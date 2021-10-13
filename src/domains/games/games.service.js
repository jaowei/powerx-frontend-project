export const getGames = (page, pageSize) => {
  return fetch(
    `https://api.rawg.io/api/games?key=0597a16d1e6c43c687884298d71f17cc&page=${page}&page_size=${pageSize}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    })
    .catch((e) => console.log(e));
};

export const getGamesByGenre = (page, pageSize, genre) => {
  let url = `https://api.rawg.io/api/games?key=0597a16d1e6c43c687884298d71f17cc&page=${page}&page_size=${pageSize}`

  if (genre) {
    url = `https://api.rawg.io/api/games?key=0597a16d1e6c43c687884298d71f17cc&page=${page}&page_size=${pageSize}&genres=${genre}`
  }

  return fetch(url,
    {
      method: "GET",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    })
    .catch((e) => console.log(e));
}
