import '../styles/global.css';

export default function app(props) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}
