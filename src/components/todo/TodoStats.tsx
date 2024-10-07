import { CheckCircle2, Circle, ListTodo } from "lucide-react";

interface TodoStatsProps {
  total: number;
  completed: number;
  incomplete: number;
}

export default function TodoStatsCard(
  { total, completed, incomplete }: TodoStatsProps = {
    total: 10,
    completed: 7,
    incomplete: 3,
  }
) {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex items-center align-middle">
          <ListTodo className="w-5 h-5 text-primary" />
          <p className="text-md font-bold">{total}</p>
        </div>
        <div className="flex items-center">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <p className="text-md font-bold">{completed}</p>
        </div>
        <div className="flex items-center">
          <Circle className="w-5 h-5 text-red-500" />
          <p className="text-md font-bold">{incomplete}</p>
        </div>
      </div>
    </div>
  );
}
