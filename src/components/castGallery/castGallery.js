import { CastList, CastItem, Paragraph } from './castGallery.styled';
import imageNotFound from '../../images/no_image_card.png';

export const CastGallery = ({ credits }) => {
  //let flag = 0;
  return (
    <>
      <CastList>
        {/*console.log('this is credits in castGallery: '+credits)*/}
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path === null
                      ? imageNotFound
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                />
                <Paragraph>{name}</Paragraph>
                <Paragraph>Character: {character}</Paragraph>
              </CastItem>
            );
          })}
      </CastList>
    </>
  );
};