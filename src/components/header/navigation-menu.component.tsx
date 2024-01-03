import { pages } from "@/src/data";
import Link from "next/link";
import { Fragment } from "react";

// TODO: add motion interaction on hover
export const NavigationMenu = ({
  path,
  filter,
}: {
  path: string;
  filter: boolean;
}) => {
  const showNavElement = (pagePath: string) => {
    return path !== "/" || (path === "/" && pagePath !== "/");
  };

  return (
    <>
      {pages.map((page) => (
        <Fragment key={page.path}>
          {((filter && showNavElement(page.path)) || !filter) && (
            <Link href={page.path}>{page.name}</Link>
          )}
        </Fragment>
      ))}
    </>
  );
};
