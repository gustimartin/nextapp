import { NextResponse } from "next/server";
import { prisma } from "../../libs/prisma";
export async function GET() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return NextResponse.json("get task");
}
export async function POST(request) {
  const { title, description } = await request.json();
  const createTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(createTask);
}
export function PUT() {
  return NextResponse.json("edit task");
}
export function DELETE() {
  return NextResponse.json("delete task");
}
