export const metadata = {
  title: "Projects",
};

async function fetchRepositories() {
  const response = await fetch("https://api.github.com/users/MdNazrulHaqAnsari/repos", {
    next: { revalidate: 60 }, // Revalidate data every 60 seconds
  });
  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return response.json();
}

export default async function ProjectsPage() {
  const repositories = await fetchRepositories();

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://raw.githubusercontent.com/MdNazrulHaqAnsari/${repo.name}/main/demo.jpg`}
                alt={`${repo.name} demo`}
                style={{ width: "200px", height: "auto" }}
              />
              <p>{repo.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
