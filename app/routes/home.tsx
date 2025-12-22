import type { Route } from "./+types/home";
import { BowlTouch } from "../welcome/touch";
import { Crush } from "../welcome/crush";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title ?? "볼터치" },
    { name: "description", content: data?.description ?? "Bowling Club Page" },
  ];
}

export function loader({ request, context }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const host = request.headers.get("host") || url.host;

  // 도메인에 따라 클럽명 결정
  let clubName = "BowlTouch";
  if (host.includes("crush")) {
    clubName = "Crush";
  }

  return {
    message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
    clubName,
    title: clubName === "Crush" ? "Bowling Club Crush" : "Bowling Club BowlTouch",
    description: clubName === "Crush" ? "크러쉬 공지 페이지입니다." : "볼터치 공지 페이지입니다.",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { clubName, message } = loaderData;

  if (clubName === "Crush") {
    return <Crush />;
  }

  // BowlTouch (Default)
  return <BowlTouch message={message} />;
}
