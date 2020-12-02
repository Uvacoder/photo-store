import { Icon } from 'rsuite';
import './SocialMediaTray.css';

const SocialMediaTray = () => {

  const IconLink = ({
    href,
    icon
  }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon icon={icon} size="2x" />
    </a>
  );

  return (
    <div class="icon-container">
      <IconLink icon="facebook-square"
                href="https://www.facebook.com/atelier.mistral.photo/"
      />
      <IconLink icon="instagram"
                href="https://www.instagram.com/atelier.mistral/"
      />
    </div>
  );
}

export default SocialMediaTray;