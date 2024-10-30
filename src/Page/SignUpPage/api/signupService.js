const signupService = () =>{
  const fetchMovie = async () => {
    const response = await fetch(
      `${BASE_URL}/movie/${category}?language=ko-KR&page=${page}`,
      apiConfig("GET"),
    );

    let result = [];
    const status = response.status;
    switch (status) {
      case 200:
        result = await response.json();
        break;
      default:
        alert("api error");
        result = null;
        break;
    }
    setMovieList(result);
  };

  fetchMovie();
}

export default signupService;