import Head from 'next/head';
import Header from './Header';
export default function Layout(props) {
  const { title, description = 'page description', children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
