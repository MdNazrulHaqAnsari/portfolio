/* export const metadata = {
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
*/
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/getRepositories");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="border p-4 rounded shadow">
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.demo_url}
                alt={`${project.name} preview`}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
