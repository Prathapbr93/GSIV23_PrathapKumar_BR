const api = {
  getUpcomingMovies: async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response)
    const data = await response.json();
    return data;
  },
};

export default api;
