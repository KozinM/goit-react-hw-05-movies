import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastGallery } from 'components/castGallery/castGallery';
import { Loader } from 'components/loader/loader';
import { getCast } from '../../api/fetchMovies';

import { Section } from './cast.styled';


const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    //console.log("I'm in cast"+'  and this is movie ID:  '+ movieId);
    getCast(movieId)
      .then(response => {
        //console.log("cast was loaded");
        //console.log('this is response in cast: '+ response.cast);
        setCredits(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, some error:{error}</p>}
      {/*console.log('this is credits: '+JSON.stringify(credits))*/}
      <Section>
        <CastGallery credits={credits.cast} />
      </Section>
    </>
  );
};

export default Cast;