declare module "*.jsx" {
  const Component: (props: Record<string, unknown>) => JSX.Element;
  export default Component;
}
