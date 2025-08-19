import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const Summary = () => {
  const { resumeData, handleChange } = useContext(ResumeContext);

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Summary
      </h2>
      <textarea
        name="summary"
        placeholder="Write a short professional summary..."
        value={resumeData.summary}
        onChange={handleChange}
        maxLength={500}
        className="w-full px-4 py-3 min-h-[140px] resize-none rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
      />
    </div>
  );
};

export default Summary;
