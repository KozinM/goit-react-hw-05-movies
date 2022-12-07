import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './layout/layout';
const Home = lazy(() => import('../pages/home/home'));
const Movies = lazy(() => import('../pages/movies/movies'));
const MovieDetails = lazy(() => import('../pages/moviesDetails/movieDetails'));
const Cast = lazy(() => import('../components/cast/cast'));
const Reviews = lazy(() => import('../components/reviews/reviews'));


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path='*' element={<Navigate to="/" replace/>}/> 
    </Route>
  </Routes>
  );
}

export default App;