import { pages } from "@/src/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

// TODO: add motion interaction on hover
export const NavigationMenu = ({
  path,
  filter,
}: {
  path: string;
  filter: boolean;
}) => {
  const currentPathname = usePathname();

  const showNavElement = (pagePath: string) => {
    return path !== "/" || (path === "/" && pagePath !== "/");
  };

  return (
    <>
      {pages
        .filter((p) => !p.hideFromNav)
        .map((page) => (
          <Fragment key={page.path}>
            {((filter && showNavElement(page.path)) || !filter) && (
              <Link
                href={page.path}
                className={currentPathname === page.path ? "font-bold" : ""}
              >
                {page.name}
              </Link>
            )}
          </Fragment>
        ))}
    </>
  );
};
