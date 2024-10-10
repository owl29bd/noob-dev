"use client";

import SectionCardLayout from "@/components/common/card/SectionCardLayout";
import TodoStatsCard from "@/components/todo/TodoStats";
import useTodoAction from "@/hooks/todo/useTodoAction";
import React from "react";

export default function TodoFeatureLandingPage() {
  const { useGetTodos } = useTodoAction();
  const { data, isLoading } = useGetTodos();

  const totalTodos = data?.totalData || 0;
  const completedTodos =
    data?.data.filter((todo) => todo.isCompleted).length || 0;
  const incompleteTodos = totalTodos - completedTodos;

  if (data) {
    console.log("Data received:", data);
  } else {
    console.log("No data received.");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-6">
      <SectionCardLayout
        title="Todo"
        subtitle="This is a simple todo application to manage your tasks. You can add
            new tasks, mark them as completed and delete them."
        actionElementRight={
          <TodoStatsCard
            completed={completedTodos}
            incomplete={incompleteTodos}
            total={totalTodos}
          />
        }
      >
        <div className="">Manage your tasks</div>
      </SectionCardLayout>
    </div>
  );
}
