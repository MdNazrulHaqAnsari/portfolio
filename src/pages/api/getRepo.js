export default async function handler(req, res) {
  const username = process.env.USERNAME;
  const token = process.env.TOKEN;

  try {
    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!repoResponse.ok) {
      return res.status(repoResponse.status).json({ error: "Failed to fetch repositories" });
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

    res.status(200).json(projects.filter(Boolean)); // Remove undefined entries
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
