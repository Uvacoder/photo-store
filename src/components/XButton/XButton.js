import './XButton.css';

export default ({
  className,
  onClick,
  width,
  height
}) => (
  <div className={className} onClick={onClick}>
    <div style={{ position: "relative", width, height }}>
      <div className="x-btn-circle" >
        <div className="x x-1" />
        <div className="x x-2" />
      </div>
    </div>
  </div>
)
