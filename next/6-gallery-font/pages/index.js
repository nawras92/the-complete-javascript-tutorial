import Image from 'next/image';
import data from '../data/images';

export default function HomePage() {
  return (
    <div className="images-container">
      {data &&
        data.map((img, index) => {
          return (
            <div className="image-container" key={index}>
              <Image
                src={`/images/${img.source}`}
                alt={img.title}
                fill
                className="image"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
              <div className="image-content">
                <h3 className="image-title">{img.title}</h3>
                <p className="image-text">{img.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
