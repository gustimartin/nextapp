import TaskCard from "@/components/TaskCard";
import { prisma } from "./libs/prisma";

async function fetchTasks() {
  return await prisma.task.findMany();
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const tasks = await fetchTasks();
  return (
    <section className=" container mx-auto">
      {" "}
      <main className="grid grid-cols-2 gap-4  p-4 md:grid-cols-4  ">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </main>
    </section>
  );
}
