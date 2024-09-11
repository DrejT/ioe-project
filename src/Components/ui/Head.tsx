import { Rss } from "lucide-react";
import MenuDrawer from "./MenuDrawer";
import { Button } from "@/components/ui/button";

export default function Head() {
  return (
    <div className="bg-blue-500 flex justify-between px-2 py-2 text-white">
      <div className="flex">
        <Button variant={"outline"} className="bg-blue-500 px-2 m-0">
          <MenuDrawer />
        </Button>
      </div>
      <div className="flex p-2">
        {/* status{" "} */}
        <div className="px-2">
          <Rss color="#6aea37" absoluteStrokeWidth />
        </div>
      </div>
      {/* <div>ioe app</div> */}
    </div>
  );
}
