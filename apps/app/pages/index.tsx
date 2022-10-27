import Head from "next/head";
import { CounterButton } from "@the-platform/ui";
import { trpc } from "../utils/trpc";

export default function Home() {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web - Turborepo Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web <br className="hidden lg:block" />
          <span className="inline-block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            Turborepo Example
          </span>{" "}
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <CounterButton />
        </div>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {/* {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>} */}
        </div>
      </main>
    </div>
  );
}
