import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the ALX Listing App</h1>
        <Card />
        <div className="mt-4">
          <Button />
        </div>
      </main>
    </>
  );
}
