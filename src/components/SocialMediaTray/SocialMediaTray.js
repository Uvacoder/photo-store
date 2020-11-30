import { Icon } from 'rsuite';
import './SocialMediaTray.css';

const SocialMediaTray = () => (
  <div class="icon-container">
    <IconLink icon="facebook-square"
              href="https://www.facebook.com/atelier.mistral.photo/"
    />
    <IconLink icon="instagram"
              href="https://www.instagram.com/atelier.mistral/"
    />
  </div>
);

const IconLink = props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <Icon icon={props.icon} size="2x" />
  </a>
)

export default SocialMediaTray;