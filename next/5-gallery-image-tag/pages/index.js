import Image from 'next/image';
export default function HomePage() {
  const arr = [...Array(20).keys()];
  return (
    <div className="images-container">
      {arr.map((n) => {
        const img = n + 1;
        return (
          <div className="image-container" key={n}>
            <Image
              src={`/images/img${img}.jpg`}
              alt={`Image ${img}`}
              fill
              className="image"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
            <div className="image-content">
              <h3 className="image-title">image : image {img}</h3>
              <p className="image-text">
                Elit fuga architecto consequuntur porro corporis obcaecati
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
