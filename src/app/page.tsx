import { PublicHeader } from "@/components/homepage/PublicHeader";
import { Landing } from "@/components/landing";

export default function App() {
  return (
    <div className="flex flex-col">
      <PublicHeader />
      <Landing />
    </div>
  );
}
