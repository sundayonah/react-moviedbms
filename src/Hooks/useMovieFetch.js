import { useState, useEffect } from "react";

import API from "../API";

export const useMovieFetch = (klephId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        // get directors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...Movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
        const Movie = await API.fetchMovie(klephId);
        const credits = await API.fetchCredits(klephId);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovie();
  }, [klephId]);
  return { state, loading, error };
};
