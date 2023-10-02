import React from "react";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div>
      <div className="  p-4">
        <h2 className=" p-2 text-2xl font-bold"> Next Tasks</h2>
        <p className=" text-xl p-2">
          {" "}
          Next.js project using Tailwind.css, React.js and prisma as a
          connection to SQL database. In this project you can create, delete or
          modify tasks that you put up for your self.
        </p>
        <Link href="https://github.com/gustimartin/nextapp" target="_blank">
          <button className=" m-2 px-4 rounded-sm shadow-sm shadow-[#808000] py-2 text-amber-50 bg-[#808000]">
            {" "}
            Code
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
