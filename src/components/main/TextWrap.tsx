import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, Y_0, Y_P10 } from '../../utils/constant/constant';
import { BoldTxt } from '../atoms/text/BoldText';
import { AnimationP, BgText, MainSubText, MainTitle } from '../atoms/text/Text.styled';

export const TxtBox = tw.section`
  absolute
  top-1/2
  left-1/2
  translate-x-[-50%]
  translate-y-[-50%]
  flex
  items-center
  flex-col
  w-full
  text-center
`;

export const IntroAnimationDiv = tw(motion.div)`
  relative
  w-full
`;

export const StTxt = tw.strong`
  font-black
`;


function TextWrap() {
  const WINDOW_HEIGHT = window.innerHeight - (2 * window.innerHeight);

  return (
    <TxtBox>
      <IntroAnimationDiv
        initial={{ ...Y_0, scale: 1.25 }}
        animate={{ y: -(WINDOW_HEIGHT), scale: 1 }}
        transition={{ ...ANI_TRANSITION, delay: 2 }}
      >
        <MainTitle
          initial={{ ...OPACITY_0, y: WINDOW_HEIGHT }}
          animate={{ ...OPACITY_1, y: WINDOW_HEIGHT }}
          transition={ANI_TRANSITION}
        >
          <BgText>
            <AnimationP
              initial={{ y: 150 }}
              animate={{ ...Y_0 }}
              transition={{ ...ANI_TRANSITION, delay: 1 }}
            >ohmé</AnimationP>
          </BgText>
        </MainTitle>
      </IntroAnimationDiv>

      <MainSubText
        initial={{ ...OPACITY_0, ...Y_0 }}
        animate={{ ...OPACITY_1, ...Y_P10 }}
        transition={{ ...ANI_TRANSITION, delay: 3 }}
      >
        Your <BoldTxt>wish</BoldTxt> is our <BoldTxt>command</BoldTxt>
      </MainSubText>
      <MainSubText
        initial={{ ...OPACITY_0, ...Y_0 }}
        animate={{ ...OPACITY_1, ...Y_P10 }}
        transition={{ ...ANI_TRANSITION, delay: 3.5 }}
      >
        To bring your <BoldTxt>imagination</BoldTxt> into <BoldTxt>life</BoldTxt>
      </MainSubText>
    </TxtBox >
  )
}

export default TextWrap;