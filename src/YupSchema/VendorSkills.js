import * as yup from 'yup'

const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const VendorSkills = yup.object().shape({
    skill: yup.string().matches(regex, 'Skill is not valid').required('skill is required'),
    googleDrive: yup.string().matches(regex, 'Google Drive link is not valid').required('googleDrive is required'),
    linkedIn: yup.string().matches(regex, 'LinkedIn link is not valid').required('linkedIn is required'),
    github: yup.string().matches(regex, 'Github link is not valid').required('github is required'),
    about: yup.string().matches(regex, 'About is not valid').required('about is required'),
    profilePhoto: yup.mixed().required('Image is required').test(
        'fileFormat',
        'Unsupported file format',
        (value) => {
          if (value && value.type) {
            return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
          }
          return false;
        }
      ),
}) 