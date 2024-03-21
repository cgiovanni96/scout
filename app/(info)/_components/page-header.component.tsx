"use client";

import { pages } from "@/src/data";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const PageHeader = () => {
  const pathname = usePathname();

  const title = useMemo(
    () => pages.find((p) => p.path === pathname)?.name || "Pagina",
    [pathname],
  );

  return (
    <div className="bg-primary-900  pt-20">
      <div className="w-3/4 mx-auto min-h-[150px] lg:min-h-[200px] flex items-center">
        <h1 className="font-bold  text-white text-5xl lg:text-6xl">{title}</h1>
      </div>
    </div>
  );
};
