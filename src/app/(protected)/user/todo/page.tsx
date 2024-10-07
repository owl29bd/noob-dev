import SectionCardLayout from "@/components/common/card/SectionCardLayout";
import TodoStatsCard from "@/components/todo/TodoStats";
import React from "react";

export default function TodoFeatureLandingPage() {
  return (
    <div className="p-6">
      <SectionCardLayout
        title="Todo"
        subtitle="This is a simple todo application to manage your tasks. You can add
            new tasks, mark them as completed and delete them."
        actionElementRight={
          <TodoStatsCard completed={20} incomplete={10} total={30} />
        }
      >
        <div className="">Manage your tasks</div>
      </SectionCardLayout>
    </div>
  );
}
