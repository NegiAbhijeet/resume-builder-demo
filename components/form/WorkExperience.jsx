import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

const WorkExperience = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleWorkExperience = (e, index) => {
    const updated = [...resumeData.workExperience];
    updated[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, workExperience: updated });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeWorkExperience = (index) => {
    const updated = [...resumeData.workExperience];
    updated[index] = updated[updated.length - 1];
    updated.pop();
    setResumeData({ ...resumeData, workExperience: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Work Experience
      </h2>
      {resumeData.workExperience.map((item, index) => (
        <div key={index} className="space-y-4">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={item.company}
            onChange={(e) => handleWorkExperience(e, index)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
          />
          <input
            type="text"
            name="position"
            placeholder="Job Title"
            value={item.position}
            onChange={(e) => handleWorkExperience(e, index)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={item.description}
            maxLength={250}
            onChange={(e) => handleWorkExperience(e, index)}
            className="w-full px-4 py-2 h-32 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-brand focus:outline-none"
          />
          <textarea
            name="keyAchievements"
            placeholder="Key Achievements"
            value={item.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
            className="w-full px-4 py-2 h-40 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-brand focus:outline-none"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="startYear"
              value={item.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
            />
            <input
              type="date"
              name="endYear"
              value={item.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.workExperience.length}
        add={addWorkExperience}
        remove={removeWorkExperience}
      />
    </div>
  );
};

export default WorkExperience;
