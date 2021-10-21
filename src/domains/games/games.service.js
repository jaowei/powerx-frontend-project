export const getGames = (page, pageSize) => {
  return fetch(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${page}&page_size=${pageSize}`,
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

export const getGamesByGenre = (page, pageSize, genre, search) => {
  let queryString = `page=${page}&page_size=${pageSize}`
  
  if (genre) {
    queryString += `&genres=${genre}`
  } 
  
  if (search.length > 1) {
    queryString += `&search=${search}`
  }

  let url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&${queryString}`

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

export const getGameDetails = (gameId) => {
  return fetch(
    `https://api.rawg.io/api/games/${gameId}?key=${process.env.REACT_APP_API_KEY}`,
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

export const getGameMedia = (gameId, mediaType) => {
  return fetch(
    `https://api.rawg.io/api/games/${gameId}/${mediaType}?key=${process.env.REACT_APP_API_KEY}`,
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