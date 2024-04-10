import type { MDXComponents } from "mdx/types";
import { ImageGrid } from "@/src/components/image-grid";
import { Location } from "@/src/components/location";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl text-primary-900 font-bold leading-none">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl text-primary-700 font-bold leading-none">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h1 className="text-4xl text-primary-900 font-bold leading-none mt-8">
        {children}
      </h1>
    ),
    ul: ({ children }) => (
      <ul className="flex flex-col gap-2  list-inside list-disc">{children}</ul>
    ),
    a: ({ children, ...props }) => (
      <a
        className="text-primary-700 font-bold underline cursor-pointer"
        {...props}
      >
        {children}
      </a>
    ),

    ImageGrid,
    Location,
    ...components,
  };
}
