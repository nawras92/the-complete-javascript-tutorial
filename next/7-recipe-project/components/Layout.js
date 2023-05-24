import Head from 'next/head';
import Header from './Header';
import { Changa } from 'next/font/google';
import PageHeader from './PageHeader';

const changa = Changa({
  variable: '--changa-font',
  subsets: ['arabic'],
  weight: ['200', '300', '500', '700', '800'],
});

export default function Layout(props) {
  const { title, description = 'page description', children } = props;
  return (
    <div className={changa.className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <PageHeader title={title} />
      <main>{children}</main>
    </div>
  );
}
