import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import tw from 'tailwind-styled-components';
import FooterMenu from '../project/FooterMenu';

// 스타일
const Container = tw.section`
  bg-white
  w-full
  min-h-screen
  flex
  flex-col
  items-center
  pt-32
  pb-20
`;

const Navbar = tw.nav`
  fixed
  top-0
  left-0
  w-full
  h-20
  px-10
  flex
  items-center
  justify-between
  bg-white
  border-b
  border-gray-200
  z-50
  relative
`;

const CenterContent = tw.div`
  absolute
  left-1/2
  transform -translate-x-1/2
  text-center
`;

const Title = tw.h1`
  text-3xl font-bold text-black
`;

const Subtitle = tw.p`
  text-sm text-gray-500
`;

const MenuButton = tw.button`
  ml-auto
  text-black
`;

const Dropdown = tw.ul`
  absolute
  right-10
  top-20
  bg-white
  shadow-lg
  border
  rounded
  flex
  flex-col
  gap-2
  px-6
  py-4
  z-50
`;


const Image = tw.img`
  w-full
  max-w-[600px]
  h-auto
  object-cover
  mb-10
`;

const RightWrap = tw.section`
  pl-10
  mt-20
  w-full
`;
function Fw() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar>
        

        <MenuButton onClick={toggleMenu}>
          <Menu size={24} />
        </MenuButton>

        {isOpen && (
          <Dropdown>
             <li onClick={() => navigate('/25fw')}
                className="cursor-pointer hover:text-gray-500 transition-colors duration-200">
                  25F/W
              </li>
              <li onClick={() => navigate('/Sena')}
                className="cursor-pointer hover:text-gray-500 transition-colors duration-200">
                  세나
              </li>
              <li onClick={() => navigate('/Hyewon')}
                className="cursor-pointer hover:text-gray-500 transition-colors duration-200">
                  조혜원
              </li>
              <li onClick={() => navigate('/Jooha')}
                className="cursor-pointer hover:text-gray-500 transition-colors duration-200">
                  김주하
              </li>
          </Dropdown>
        )}
      </Navbar>
        <CenterContent>
          <Title>ohmé</Title>
          <Subtitle>조혜원</Subtitle>
        </CenterContent>
      <Container>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h1.jpg"/>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h2.jpg"/>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h3.JPG"/>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h4.png"/>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h5.JPG"/>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h6.JPG"/>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h7.JPG"/>
        <Image src="https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/h/h8.png"/>
       <RightWrap>
          <FooterMenu />
       </RightWrap>
      </Container>
    </>
  );
}

export default Fw;
