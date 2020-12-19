import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons.js';
import './MobileTray.css';
import BurgerIcon from '../BurgerIcon/BurgerIcon.js';

export default ({
  onBurgerClick,
  menuOpen
}) => (
  <div>
    <div className="phantom-tray"/>
    <div className="mobile-tray-container">
      <div className="sm-icons-container">
        <SocialMediaIcons />
      </div>
      <div className="bm-bars-container">
        <BurgerIcon isOpen={menuOpen}
                    onClick={onBurgerClick}
        />
      </div>
    </div>
  </div>
);
