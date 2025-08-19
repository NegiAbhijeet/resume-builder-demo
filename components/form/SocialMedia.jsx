import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

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
    updated[index] = updated[updated.length - 1];
    updated.pop();
    setResumeData({ ...resumeData, socialMedia: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      {resumeData.socialMedia.map((social, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={addSocialMedia}
        remove={removeSocialMedia}
      />
    </div>
  );
};

export default SocialMedia;
