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
      {resumeData.workExperience.map((item, index) => (
        <div key={index} className="space-y-4">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={item.company}
            onChange={(e) => handleWorkExperience(e, index)}
            className="pi"
          />
          <input
            type="text"
            name="position"
            placeholder="Job Title"
            value={item.position}
            onChange={(e) => handleWorkExperience(e, index)}
            className="pi"
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={item.description}
            maxLength={250}
            onChange={(e) => handleWorkExperience(e, index)}
            className="min-h-[140px] resize-none pi"
          />
          <textarea
            name="keyAchievements"
            placeholder="Key Achievements"
            value={item.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
            className="min-h-[140px] resize-none pi"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="startYear"
              value={item.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
              className="pi"
            />
            <input
              type="date"
              name="endYear"
              value={item.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
              className="pi"
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
