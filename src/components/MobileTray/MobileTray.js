import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons.js';
import './MobileTray.css';

const MobileTray = ({
  onBurgerClick
}) => (
  <div>
    <div class="phantom-tray"/>
    <div class="mobile-tray-container">
      <div class="sm-icons-container">
        <SocialMediaIcons />
      </div>
      <div class="bm-bars-container">
        {/* TODO<Button appearance="subtle"
                onClick={onBurgerClick}
        >
          <Icon class="bm-bars" icon="bars" size="2x" />
        </Button> */}
      </div>
    </div>
  </div>
);

export default MobileTray;