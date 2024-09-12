import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export default function MenuDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="top-0 left-0 right-auto w-60 m-0">
        <div className="min-h-screen flex-col content-between">
          {/* <div className=""> */}
          <div className="h-1/3 rounded-xl p-5">
            <DrawerTitle className="font-bold text-xl">
              Welcome Back,
              <br /> User
            </DrawerTitle>
            <DrawerDescription>
              Check out the details of your smart laptop table
            </DrawerDescription>
          </div>

          <div className="absolute bottom-0 p-0 m-0 ">
            {" "}
            {/* Adds margin-top to create space */}
            <Button
              variant={"destructive"}
              className="bg-red-500 text-white font-semibold min-w-60 rounded-none"
            >
              Logout
            </Button>
            {/* </div> */}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
