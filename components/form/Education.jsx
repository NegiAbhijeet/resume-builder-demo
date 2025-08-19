import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdDelete, MdAdd } from "react-icons/md";

const Education = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleEducation = (e, index) => {
    const updated = [...resumeData.education];
    updated[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, education: updated });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { school: "", degree: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeEducation = (index) => {
    const updated = [...resumeData.education];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, education: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      {resumeData.education.map((edu, index) => (
        <div
          key={index}
          className="relative border p-4 space-y-4 rounded bg-gray-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="school"
              placeholder="School / University"
              value={edu.school}
              onChange={(e) => handleEducation(e, index)}
              className="pi"
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree / Program"
              value={edu.degree}
              onChange={(e) => handleEducation(e, index)}
              className="pi"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="startYear"
              value={edu.startYear}
              onChange={(e) => handleEducation(e, index)}
              className="pi"
            />
            <input
              type="date"
              name="endYear"
              value={edu.endYear}
              onChange={(e) => handleEducation(e, index)}
              className="pi"
            />
          </div>
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={() => removeEducation(index)}
              aria-label="Delete Education"
              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              <MdDelete className="text-lg" />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        aria-label="Add Education"
        className="primary-btn"
      >
        <MdAdd className="text-xl" />
        <span>Add Education</span>
      </button>
    </div>
  );
};

export default Education;
