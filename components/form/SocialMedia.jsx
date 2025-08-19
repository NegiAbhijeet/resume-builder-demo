import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdDelete, MdAdd } from "react-icons/md";

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleSocialMedia = (e, index) => {
    const updated = [...resumeData.socialMedia];
    updated[index][e.target.name] = e.target.value.replace("https://", "");
    setResumeData({ ...resumeData, socialMedia: updated });
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const updated = [...resumeData.socialMedia];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, socialMedia: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      {resumeData.socialMedia.map((social, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center"
        >
          <input
            type="text"
            name="socialMedia"
            placeholder="Social Media (e.g. LinkedIn)"
            value={social.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
            className="pi"
          />
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={social.link}
            onChange={(e) => handleSocialMedia(e, index)}
            className="pi"
          />
          <button
            type="button"
            onClick={() => removeSocialMedia(index)}
            aria-label="Delete"
            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            <MdDelete className="text-lg" />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addSocialMedia}
        aria-label="Add Social Media"
        className="primary-btn"
      >
        <MdAdd className="text-xl" />
        <span>Add Social Media</span>
      </button>
    </div>
  );
};

export default SocialMedia;
