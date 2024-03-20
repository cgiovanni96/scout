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
    <div className="bg-primary-700 lg:pt-28">
      <div className="w-3/4 mx-auto lg:min-h-[200px] flex items-center">
        <h1 className="font-bold text-white lg:text-6xl">{title}</h1>
      </div>
    </div>
  );
};
