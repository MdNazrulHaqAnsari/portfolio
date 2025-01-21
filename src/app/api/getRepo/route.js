export async function GET() {
  const username = process.env.GITHUB_USERNAME; // From .env.local
  const token = process.env.GITHUB_TOKEN; // From .env.local

  try {
    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!repoResponse.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch repositories" }), {
        status: repoResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const repositories = await repoResponse.json();

    const projects = await Promise.all(
      repositories.map(async (repo) => {
        const demoResponse = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/contents/demo.jpg`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (demoResponse.ok) {
          return {
            name: repo.name,
            html_url: repo.html_url,
            demo_url: `https://raw.githubusercontent.com/${username}/${repo.name}/main/demo.jpg`,
          };
        }
      })
    );

    return new Response(JSON.stringify(projects.filter(Boolean)), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
