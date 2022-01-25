import { ThemeContextProvider } from "./ThemeContext";

export default function GlobalContext(props: any) {
  return (
    <ThemeContextProvider>
      {props.children}
    </ThemeContextProvider>
  );
}
