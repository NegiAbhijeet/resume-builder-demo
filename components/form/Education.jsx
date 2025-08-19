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
      {resumeData.education.map((edu, index) => (
        <div key={index} className="space-y-4">
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
