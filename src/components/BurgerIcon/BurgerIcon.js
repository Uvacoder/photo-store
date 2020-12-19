import './BurgerIcon.css';

const BurgerIcon = ({
  isOpen,
  onClick
}) => (
  <div className={isOpen ? "change-to-x" : ""} onClick={onClick}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
);

export default BurgerIcon;