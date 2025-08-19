import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdDelete, MdAdd } from "react-icons/md";

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
    updated.splice(index, 1);
    setResumeData({ ...resumeData, workExperience: updated });
  };

  return (
    <div className="space-y-6 mb-6">
      {resumeData.workExperience.map((item, index) => (
        <div
          key={index}
          className="relative border p-4 rounded bg-gray-50 space-y-4 shadow-sm"
        >
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
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeWorkExperience(index)}
              aria-label="Delete Work Experience"
              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              <MdDelete className="text-lg" />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addWorkExperience}
        aria-label="Add Work Experience"
        className="primary-btn"
      >
        <MdAdd className="text-xl" />
        <span>Add Work Experience</span>
      </button>
    </div>
  );
};

export default WorkExperience;
