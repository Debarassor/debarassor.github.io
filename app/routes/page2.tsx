import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page3" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <p>PAGES3</p>;
}
