import Image from 'next/image';

export default function TestImage() {
  const imgStyle1 = {
    maxWidth: '100%',
    display: 'inline-block',
  };
  const imgStyle2 = {
    maxWidth: '100%',
    display: 'inline-block',
    objectFit: 'cover', // image gets resized to container by cropping the image.
  };
  const imgStyle3 = {
    maxWidth: '100%',
    display: 'inline-block',
    objectFit: 'contain', // image keeps its ratio, but resized to fit the container
  };
  return (
    <div>
      <h1>Trying out the next image tag</h1>
      <div style={{ position: 'relative', height: '50vh' }}>
        <Image
          src="/images/img1.jpg"
          alt="just an image"
          style={imgStyle1}
          fill
        />
      </div>
      <div style={{ position: 'relative', height: '50vh' }}>
        <Image
          src="/images/img1.jpg"
          alt="just an image"
          style={imgStyle2}
          fill
        />
      </div>
      <div style={{ position: 'relative', height: '50vh' }}>
        <Image
          src="/images/img1.jpg"
          alt="just an image"
          style={imgStyle3}
          fill
        />
      </div>
    </div>
  );
}

// Regular Image
// export default function TestImage() {
//   const imgStyle = {
//     maxWidth: '100%',
//     display: 'inline-block',
//   };
//   return (
//     <div id="container">
//       <h1>Trying out the next image tag</h1>
//       <img src="/images/img1.jpg" alt="just an image" style={imgStyle} />
//     </div>
//   );
// }
// Next Image Tag with width/height
// export default function TestImage() {
//   const imgStyle = {
//     maxWidth: '100%',
//     display: 'inline-block',
//   };
//   return (
//     <div id="container">
//       <h1>Trying out the next image tag</h1>
//       <Image
//         src="/images/img1.jpg"
//         alt="just an image"
//         style={imgStyle}
//         width={600}
//         height={400}
//       />
//     </div>
//   );
// }
// Next Image Priority Attr
// export default function TestImage() {
//   const imgStyle = {
//     maxWidth: '100%',
//     display: 'inline-block',
//   };
//   return (
//     <div id="container">
//       <h1>Trying out the next image tag</h1>
//       <Image
//         src="/images/img1.jpg"
//         alt="just an image"
//         style={imgStyle}
//         width={600}
//         height={400}
//         priority={true}
//       />
//     </div>
//   );
// }
// Next Image Quality Attr
// export default function TestImage() {
//   const imgStyle = {
//     maxWidth: '100%',
//     display: 'inline-block',
//   };
//   return (
//     <div id="container">
//       <h1>Trying out the next image tag</h1>
//       <Image
//         src="/images/img1.jpg"
//         alt="just an image"
//         style={imgStyle}
//         width={600}
//         height={400}
//         quality={95} // 0 - 100
//       />
//     </div>
//   );
// }
// Next Image PlaceHolder Attr
// export default function TestImage() {
//   const imgStyle = {
//     maxWidth: '100%',
//     display: 'inline-block',
//   };
//   return (
//     <div id="container">
//       <h1>Trying out the next image tag</h1>
//       <Image
//         src="/images/img1.jpg"
//         alt="just an image"
//         style={imgStyle}
//         width={600}
//         height={400}
//         placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
//       />
//     </div>
//   );
// }
// Fill:  resize image to container/even if it got streched or squished
// export default function TestImage() {
//   const imgStyle = {
//     maxWidth: '100%',
//     display: 'inline-block',
//   };
//   return (
//     <div style={{ position: 'relative', height: '50vh' }}>
//       <h1>Trying out the next image tag</h1>
//       <Image src="/images/img1.jpg" alt="just an image" style={imgStyle} fill />
//     </div>
//   );
// }
