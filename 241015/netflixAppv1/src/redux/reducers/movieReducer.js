let initialState = {
  // api
  popularMovie: {},
  topRatedMovie: {},
  upComingMovie: {},
  // loading
  loading: true,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovie: payload.popularMovie,
        topRatedMovie: payload.topRatedMovie,
        upComingMovie: payload.upComingMovie,
        loading: false,
      };

    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};

export default movieReducer;
