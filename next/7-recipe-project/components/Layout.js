import Head from 'next/head';
import Header from './Header';
import PageHeader from './PageHeader';

export default function Layout(props) {
  const { title, description = 'page description', children } = props;
  return (
    <div>
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
