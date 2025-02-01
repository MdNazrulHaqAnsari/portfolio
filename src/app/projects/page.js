"use client";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(null); // null = loading, [] = no projects
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/getRepo");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]); // Treat errors as no projects
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="w-screen mt-5 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Skeleton Loader */}
        {loading &&
          Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-black rounded-lg p-4 border-2 border-x-red-100 shadow-lg flex flex-col animate-pulse"
              >
                <div className="h-48 bg-gray-700 rounded w-full"></div>
                <div className="my-4 h-6 bg-gray-700 w-3/4 mx-auto rounded"></div>
                <div className="flex justify-center gap-4">
                  <div className="h-10 w-24 bg-gray-700 rounded"></div>
                  <div className="h-10 w-24 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}

        {/* No Projects Message */}
        {!loading && projects.length === 0 && (
          <div className="col-span-full text-center text-white text-xl font-semibold">
            No Public Projects Yet!
          </div>
        )}

        {/* Projects List */}
        {!loading &&
          projects.map((project) => (
            <div
              key={project.name}
              className="bg-black rounded-lg p-4 border-2 border-x-red-100 shadow-lg flex flex-col"
            >
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src={project.demo_url}
                  alt={`${project.name} preview`}
                  className="h-48 object-cover"
                />
                <h2 className="my-4 uppercase text-xl font-semibold text-center text-white">
                  {project.name}
                </h2>
              </a>
              <div className="flex justify-center gap-4">
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-center"
                >
                  View Demo
                </a>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 text-white px-4 py-2 rounded-full text-center"
                >
                  View Repo
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
