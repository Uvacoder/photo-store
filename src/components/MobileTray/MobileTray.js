import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons.js';
import './MobileTray.css';
import BurgerIcon from '../BurgerIcon/BurgerIcon.js';

const MobileTray = ({
  onBurgerClick,
  menuOpen
}) => (
  <div>
    <div class="phantom-tray"/>
    <div class="mobile-tray-container">
      <div class="sm-icons-container">
        <SocialMediaIcons />
      </div>
      <div class="bm-bars-container">
        <BurgerIcon isOpen={menuOpen}
                    onClick={onBurgerClick}
        />
      </div>
    </div>
  </div>
);

export default MobileTray;