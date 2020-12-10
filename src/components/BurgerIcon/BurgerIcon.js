import './BurgerIcon.css';

const BurgerIcon = ({
  isOpen,
  onClick
}) => {

  const divClass = isOpen
    ? "burger-container change"
    : "burger-container"
  ;

  return (
    <div className={divClass} onClick={onClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default BurgerIcon;