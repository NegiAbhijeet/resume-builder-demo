import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
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

  const removeProjects = () => {
    const updated = [...resumeData.projects];
    updated.pop();
    setResumeData({ ...resumeData, projects: updated });
  };

  return (
    <div className="space-y-6 mb-6">
      {resumeData.projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
          <input
            type="text"
            placeholder="Project Title"
            name="title"
            className="pi"
            value={project.title}
            onChange={(e) => handleProjects(e, index)}
          />
          <input
            type="text"
            placeholder="Project Link"
            name="link"
            className="pi"
            value={project.link}
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            placeholder="Description"
            name="description"
            className="pi h-28"
            value={project.description}
            maxLength="250"
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            placeholder="Key Achievements"
            name="keyAchievements"
            className="pi h-32"
            value={project.keyAchievements}
            onChange={(e) => handleProjects(e, index)}
          />
          <div className="flex gap-2">
            <input
              type="date"
              placeholder="Start Date"
              name="startYear"
              className="pi"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
            />
            <input
              type="date"
              placeholder="End Date"
              name="endYear"
              className="pi"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
        </div>
      ))}

      <FormButton
        size={resumeData.projects.length}
        add={addProjects}
        remove={removeProjects}
      />
    </div>
  );
};

export default Projects;
