import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>My Design Collection</title>
      </Head>
      <h1>My Design Collection</h1>
      <h2>Landing Pages</h2>
      <ul>
        <li><Link href="/landing-pages/nayahome">Naya Home</Link></li>
      </ul>
    </>
  )
}