// src/app/api/getRepos/route.js
export const dynamic = "force-static";

export async function GET(req) {
  const response = await fetch("https://api.github.com/users/<username>/repos");
  const repositories = await response.json();

  return new Response(JSON.stringify(repositories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
