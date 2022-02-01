import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Dashboard />
    </div>
  );
}
