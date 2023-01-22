import '../styles/globals.css';
import myFont from '@next/font/local';

const arslan = myFont({
  src: './arslan.ttf',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={arslan.className}>
        {/* <div> */}
        {/* eslint-disable-next-line */}
        {/* <style jsx global> */}
        {/*   {` */}
        {/*     html { */}
        {/*       font-family: ${arslan.style.fontFamily}; */}
        {/*     } */}
        {/*   `} */}
        {/* </style> */}
        <Component {...pageProps} />;
      </div>
    </>
  );
}

// Method 1:  Load Google Fonts the regular way
// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin={true}
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;900&display=swap"
//           rel="stylesheet"
//         />
//         // Do not forget to add font-family rule to your global css
//       </Head>
//       <Component {...pageProps} />;
//     </>
//   );
// }
//
// Method 2: Use Next Google Font
// import { Cairo } from '@next/font/google';

// const cairo = Cairo({
//   subsets: ['arabic', 'latin'],
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       {/* <div className={cairo.className}> */}
//       <div>
//         {/* eslint-disable-next-line */}
//         <style jsx global>
//           {`
//             html {
//               font-family: ${cairo.style.fontFamily};
//             }
//           `}
//         </style>
//         <Component {...pageProps} />;
//       </div>
//     </>
//   );
// }
