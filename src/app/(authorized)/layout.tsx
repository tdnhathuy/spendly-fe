import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={cn(
        "w-full  flex flex-col items-center justify-center bg-red-300 h-svh overflow-hidden",
        "bg-slate-800"
      )}
    >
      <div className="h-fit flex-1 w-xl bg-white flex ">
        {children}
      </div>
    </section>
  );
}
