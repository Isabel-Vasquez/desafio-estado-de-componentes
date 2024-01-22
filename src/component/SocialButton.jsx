import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ icon }) => {
  let socialIcon = null;

  if (icon === 'faFacebook') {
    socialIcon = faFacebook;
  } else if (icon === 'faTwitter') {
    socialIcon = faTwitter;
  } else if (icon === 'faInstagram') {
    socialIcon = faInstagram;
  }

  return (
    <button className='button-rs rounded-circle ms-4 bg-white border-1'>
      {socialIcon && <FontAwesomeIcon icon={socialIcon} />}
    </button>
  );
};

export default SocialButton;
