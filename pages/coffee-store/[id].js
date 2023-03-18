import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div>
      <span>{id}</span>
      <Link href={"/"}>Back to home</Link>
      <Link href={"/coffee-store/lorem"}>go to special page</Link>
    </div>
  );
};

export default CoffeeStore;
