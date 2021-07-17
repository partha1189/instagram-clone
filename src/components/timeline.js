/* eslint-disable no-nested-ternary */
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
  // get logged in users photos (hook)
  const { photos } = usePhotos();
  // react skeleton for loadin photos
  // if we have a photo, render them (create post component)
  // if user doest have photos ask them to create some photos

  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          <Skeleton count={4} width={640} height={500} className="mb-5" />
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
  );
}
