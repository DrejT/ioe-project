import { ReactNode } from "react";
import RadialChart from "./RadialChart";

export default function Analytics() {
  return (
    <div>
      <div className="flex justify-around">
        <CardWrapper>
          <Card temp={23} statName={"Avg device temp"} />
        </CardWrapper>
        <CardWrapper>
          <Card temp={28} statName={"HIghest temp yet"} />
        </CardWrapper>
      </div>
      <div>
        <CardWrapper width="large">
          <RadialChart />
        </CardWrapper>
      </div>
    </div>
  );
}

function CardWrapper({
  children,
  width = "small",
}: {
  children: ReactNode;
  width?: "small" | "large";
}) {
  return (
    <div className={`${width === "small" ? "w-1/2" : "w-full"} min-h-20 p-2 `}>
      <div className="border border-s-grey rounded-lg">{children}</div>
    </div>
  );
}

function Card({ temp, statName }: { temp: number; statName: string }) {
  return (
    <div className="py-4 px-2">
      <em className="text-sm">{statName}</em>
      <p className="text-2xl font-bold px-2">{temp}&deg;C</p>
    </div>
  );
}
