import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const Summary = () => {
  const { resumeData, handleChange } = useContext(ResumeContext);

  return (
    <div className="space-y-4 mb-6">
      <textarea
        name="summary"
        placeholder="Write a short professional summary..."
        value={resumeData.summary}
        onChange={handleChange}
        maxLength={500}
        className="min-h-[140px] resize-none pi"
      />
    </div>
  );
};

export default Summary;
