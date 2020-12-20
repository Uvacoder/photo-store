import styled from 'styled-components';

const Bar = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--social-media-icon-link-color);
  margin: 5px 0;
  transition: 0.4s;
  ${props => props.asXBar1 && '-webkit-transform: translate(0px, 9px) rotate(-45deg)'};
  ${props => props.asXBar1 && 'transform: translate(0px, 9px) rotate(-45deg)'};
  ${props => props.asXBar2 && 'opacity: 0'};
  ${props => props.asXBar3 && '-webkit-transform: translate(0px, -9px) rotate(45deg)'};
  ${props => props.asXBar3 && 'transform: translate(0px, -9px) rotate(45deg)'};
`;

const BurgerIcon = ({
  isOpen,
  onClick
}) => (
  <div onClick={onClick}>
    <Bar asXBar1={isOpen} />
    <Bar asXBar2={isOpen} />
    <Bar asXBar3={isOpen} />
  </div>
);

export default BurgerIcon;