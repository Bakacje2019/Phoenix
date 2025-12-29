import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';

export default function Home() {
  return (
    <>
      <Head>
        <title>Phoenix AI Space</title>
        <meta name="description" content="Unified AI workspace powered by a mixture of agents" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Phoenix AI Space</h1>
          <p className="mb-6">Start a conversation with your Super Agent and explore the power of multi‑modal AI.</p>
          <Chat />
        </main>
        <Footer />
      </div>
    </>
  );
}