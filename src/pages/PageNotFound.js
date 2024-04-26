import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-6xl text-gray-700 font-bold my-10 dark:text-white">
            404, Page not found.
          </p>
          <div className="max-w-5xl">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
