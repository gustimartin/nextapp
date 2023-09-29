import Link from "next/link";
const NotFound = () => {
  return (
    <div className=" flex justify-center items-center h-[calc(100vh-7rem)]">
      <div className=" text-center">
        <h1 className=" text-4xl font-bold">Not Found</h1>
        <Link href="/" className=" text-gray-600">
          Back to Tasks
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
