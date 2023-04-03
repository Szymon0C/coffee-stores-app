import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import coffeeStore from "../../data/coffee-stores";

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStore?.filter(
        ({ id }) => id.toString() === params.id
      )[0],
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStore.map(({ id }) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

const CoffeeStore = ({ coffeeStore }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, address, neighbourhood } = coffeeStore || {};

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>

      <h2>{name}</h2>
      <Link href={"/"}>Back to home</Link>
      <p>{address}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};

export default CoffeeStore;
