"use client";
import React from "react";
import { useRouter } from "next/navigation";
const TaskCard = ({ task }) => {
  const router = useRouter();
  return (
    <div
      className=" border-2 border-[#808000] h-full rounded-md hover cursor-pointer hover:bg-[#808000] shadow-sm shadow-[#808000] hover:text-amber-50"
      onClick={() => {
        router.push(`/task/edit/${task.id}`);
      }}
    >
      <h1 className=" font-semibold text-xl p-2">{task.title}</h1>
      <hr className="" />
      <p className=" p-2">{task.description}</p>

      <p className=" p-2">{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
