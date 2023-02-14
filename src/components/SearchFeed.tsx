import { useLoaderData } from "react-router-dom";
import { Videos } from ".";

const SearchFeed = () => {
  const { items } = useLoaderData() as any;

  return (
    <div>
      <Videos video={items} />
    </div>
  );
};

export default SearchFeed;
