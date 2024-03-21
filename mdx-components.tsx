import type { MDXComponents } from "mdx/types";

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
    ...components,
  };
}
