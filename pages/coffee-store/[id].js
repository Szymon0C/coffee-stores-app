import Link from "next/link";
import { useRouter } from "next/router";

import coffeeStore from "../../data/coffee-stores";

const CoffeeStore = () => {
  const { query } = useRouter();
  const { id: urlId } = query;
  const coffee = coffeeStore.filter(({ id: coffeeId }) => coffeeId == urlId)[0];
  const { name, websiteUrl, address, imgUrl, neighbourhood } = coffee;

  return (
    <div>
      <h2>{name}</h2>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
};

export default CoffeeStore;
