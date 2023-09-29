"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    } else {
      const response = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        header: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className=" h-screen flex justify-center items-center   ">
      <form
        className=" rounded-md bg-zinc-100 p-10 border-2 border-red-700  w-5/6"
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Task Title</label>
        <input
          value={title}
          id="title"
          type="text"
          placeholder=" title"
          className=" border-2 text-gray-800 border-red-700 p-2 mb-4 w-full rounded-md"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="">Task Description</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="description"
          placeholder=" Description"
          className="text-gray-800 border-2 border-red-700 p-2 mb-4 w-full rounded-md"
          name="description"
          cols="30"
          rows="3"
        ></textarea>
        <div className=" flex justify-between">
          <button
            className=" border-2 border-red-700 py-2 px-4 rounded-md bg-zinc-100"
            type="submit"
          >
            Create
          </button>
          {params.id && (
            <button
              className=" border-2 border-red-700 py-2 px-4 rounded-md bg-zinc-100"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                router.refresh();
                router.push("/");
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPage;
