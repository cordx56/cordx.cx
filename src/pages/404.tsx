import Link from "next/link";

const NotFound = () => {
  return (
    <div className="main-contents flex justify-center items-center">
      <main>
        <div className="flex flec-col mb-2">
          <div className="px-2 border-r-2 border-rose-500 text-xl">404</div>
          <div className="px-2 text-xl">Not Found</div>
        </div>
        <ul className="flex justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default NotFound;
