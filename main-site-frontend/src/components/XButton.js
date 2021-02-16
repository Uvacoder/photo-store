import styled from 'styled-components';

const XButtonCircle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: white;
  opacity: 0.6;
  transition: opacity 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const X = styled.div`
  position: absolute;
  left: 14%;
  width: 70%;
  top: 44%;
  height: 12%;
  background-color: #3f3f3f;
  opacity: 1;
  transition: background-color 0.2;
  &:hover {
    background-color: black;
  }
`;

const X1 = styled(X)`
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
`;

const X2 = styled(X)`
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`;

const XButton = ({
  className,
  onClick,
  width,
  height
}) => (
  <div className={className} onClick={onClick}>
    <div style={{ position: "relative", width, height }}>
      <XButtonCircle>
        <X1/>
        <X2/>
      </XButtonCircle>
    </div>
  </div>
)

export default XButton;