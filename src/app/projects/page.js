// src/app/projects/page.js
export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/MdNazrulHaqAnsari/repos");
  const repositories = await res.json();

  const projects = repositories.map((repo) => ({
    name: repo.name,
    html_url: repo.html_url,
    demo_url: `https://raw.githubusercontent.com/<username>/${repo.name}/main/demo.jpg`,
  }));

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              <img src={project.demo_url} alt={`${project.name} demo`} />
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
          }
