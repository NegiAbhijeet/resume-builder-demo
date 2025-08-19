import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdDelete, MdAdd } from "react-icons/md";

const Certification = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "certifications";

  const handleSkills = (e, index) => {
    const updated = [...resumeData[skillType]];
    updated[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: updated });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      [skillType]: [...resumeData[skillType], ""],
    });
  };

  const removeSkill = (index) => {
    const updated = [...resumeData[skillType]];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, [skillType]: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      {resumeData[skillType].map((cert, index) => (
        <div
          key={index}
          className="relative border p-4 rounded bg-gray-50 flex items-center gap-3"
        >
          <input
            type="text"
            placeholder="Certification"
            value={cert}
            onChange={(e) => handleSkills(e, index)}
            className="pi flex-1"
          />
          <button
            type="button"
            onClick={() => removeSkill(index)}
            aria-label="Delete Certification"
            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            <MdDelete className="text-lg" />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addSkill}
        aria-label="Add Certification"
        className="primary-btn"
      >
        <MdAdd className="text-xl" />
        <span>Add Certification</span>
      </button>
    </div>
  );
};

export default Certification;
