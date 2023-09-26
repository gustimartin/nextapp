import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET(request, { params }) {
  const taskId = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(taskId);
}
export async function PUT(request, { params }) {
  const data = await request.json();
  const modifyTask = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(modifyTask);
}
export async function DELETE(request, { params }) {
  try {
    const deleteTask = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json("delete id task");
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
