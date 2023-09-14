import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import { fetchMovie, fetchCredits } from '../API';
// Image
import NoImage from '../images/no_image.jpg';
const Movie = () => {
   const { movieId } = useParams();
   const [movie, setMovie] = useState({});
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchMovieData = async () => {
         try {
            setLoading(true);
            setError(false);

            const fetchedMovie = await fetchMovie(movieId);
            const credits = await fetchCredits(movieId);
            const directors = credits.crew.filter(
               (member) => member.job === 'Director'
            );

            setMovie({
               ...fetchedMovie,
               actors: credits.cast,
               directors,
            });
            setLoading(false);
         } catch (error) {
            setError(true);
            setLoading(false);
         }
      };

      fetchMovieData();
   }, [movieId]);

   if (loading) return <Spinner />;
   if (error) return <div>Something went wrong...</div>;

   return (
      <>
         <BreadCrumb movieTitle={movie.original_title} />
         <MovieInfo movie={movie} />
         <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
         />
         <Grid header="Actors">
            {movie.actors.map((actor) => (
               <Actor
                  key={actor.credit_id}
                  name={actor.name}
                  character={actor.character}
                  imageUrl={
                     actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                  }
               />
            ))}
         </Grid>
      </>
   );
};

export default Movie;
