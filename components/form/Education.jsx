import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

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
    updated[index] = updated[updated.length - 1];
    updated.pop();
    setResumeData({ ...resumeData, education: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Education
      </h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="space-y-4">
          <input
            type="text"
            name="school"
            placeholder="School / University"
            value={edu.school}
            onChange={(e) => handleEducation(e, index)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree / Program"
            value={edu.degree}
            onChange={(e) => handleEducation(e, index)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="startYear"
              value={edu.startYear}
              onChange={(e) => handleEducation(e, index)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
            />
            <input
              type="date"
              name="endYear"
              value={edu.endYear}
              onChange={(e) => handleEducation(e, index)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.education.length}
        add={addEducation}
        remove={removeEducation}
      />
    </div>
  );
};

export default Education;
