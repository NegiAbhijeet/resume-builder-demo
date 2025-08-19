import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdDelete, MdAdd } from "react-icons/md";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleProjects = (e, index) => {
    const updated = [...resumeData.projects];
    updated[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: updated });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const updated = [...resumeData.projects];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, projects: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      {resumeData.projects.map((project, index) => (
        <div
          key={index}
          className="relative border p-4 space-y-4 rounded bg-gray-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => handleProjects(e, index)}
              className="pi"
            />
            <input
              type="text"
              name="link"
              placeholder="Project Link"
              value={project.link}
              onChange={(e) => handleProjects(e, index)}
              className="pi"
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleProjects(e, index)}
            className="pi h-28 w-full"
            maxLength={250}
          />
          <textarea
            name="keyAchievements"
            placeholder="Key Achievements"
            value={project.keyAchievements}
            onChange={(e) => handleProjects(e, index)}
            className="pi h-32 w-full"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="startYear"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
              className="pi"
            />
            <input
              type="date"
              name="endYear"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
              className="pi"
            />
          </div>
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={() => removeProjects(index)}
              aria-label="Delete Project"
              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              <MdDelete className="text-lg" />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addProjects}
        aria-label="Add Project"
        className="primary-btn"
      >
        <MdAdd className="text-xl" />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default Projects;
