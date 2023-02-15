import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <h1 className="text-hl">Sans serif</h1>
        <h1 className="font-serif text-hl">Serif</h1>
        <h1 className="font-mono text-hl">Mono</h1>
      </main>
    </>
  );
}
