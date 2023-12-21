import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Evently</h1>
      <Button variant={"destructive"} className={"px-10"}>
        Hello
      </Button>
    </main>
  );
}
