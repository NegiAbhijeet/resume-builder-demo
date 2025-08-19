import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdDelete, MdAdd } from "react-icons/md";

const Language = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "languages";

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
      <div className="flex flex-wrap gap-2">
        {resumeData[skillType].map((language, index) => (
          <div
            key={index}
            className="relative flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-sm"
          >
            <input
              type="text"
              placeholder="Language"
              value={language}
              onChange={(e) => handleSkills(e, index)}
              className="bg-transparent outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-600 hover:text-red-800"
              aria-label="Delete Language"
            >
              <MdDelete size={18} />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addSkill}
        aria-label="Add Language"
        className="primary-btn mt-2"
      >
        <MdAdd className="text-xl" />
        <span>Add Language</span>
      </button>
    </div>
  );
};

export default Language;
