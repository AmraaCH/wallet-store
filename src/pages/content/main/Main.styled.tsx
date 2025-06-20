import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

type IsMobile = {
  ismobile: string
}

export const MainComponent = tw.main<IsMobile>`
  relative
  h-screen
  flex
  items-center
  flex-col
  justify-between
  bg-#FFFFF0
  px-10
  pt-10
  sticky
  top-0
  overflow-hidden

  ${props => props.ismobile === 'true' ? 'max-sm:h-[calc(var(--vh,1vh)*100)]' : 'max-sm:h-screen'}
  max-sm:pt-5
  max-sm:px-5
`;

export const MainBg = tw(motion.div)`
  absolute
  top-0
  bottom-0
  left-0
  right-0
  bg-main         // ✅ Tailwind config에서 등록한 배경 이미지 사용
  bg-no-repeat
  bg-contain      // ✅ 이미지 잘리지 않도록
  bg-center
  bg-white       // ✅ 여백이 생길 수 있으니 배경색 추가
`;

<MainBg
  style={{
    backgroundImage: `url("https://raw.githubusercontent.com/AmraaCH/wallet-store/main/src/assets/images/bk1.jpg")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#ffffff'
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
/>




export const Img = tw(motion.img) <IsMobile>`
  absolute
  bottom-0
  w-auto
  h-[calc(100vh-40vh)]
  transition-all

  ${props => props.ismobile === 'true' ? 'max-sm:h-[calc(100vh-50vh)]' : 'max-sm:h-[calc(100vh-40vh)]'}
`;

