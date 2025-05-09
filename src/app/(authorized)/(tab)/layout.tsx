import { TABS } from "@/app/(authorized)/(tab)/config";
import Link from "next/link";

export default function LayoutTab({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-white">
      <div className="flex flex-1">{children}</div>

      <span className="flex bg-red-500 w-full  gap-2">
        {TABS.map((tab) => {
          return (
            <Link
              href={tab.href}
              key={tab.href}
              className="flex flex-1 justify-center items-center  py-2  bg-red-300"
            >
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </span>
    </section>
  );
}
