import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { isMobile } from '../../../utils/isMobile';
import ScrollArrow from '../../../components/main/ScrollArrow';
import InfoWrap from '../../../components/main/InfoWrap';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../../utils/constant/constant';
import TextWrap from '../../../components/main/TextWrap';
import { MainComponent } from './Main.styled';
import MainBackground from '../../../components/atoms/background/MainBackground';
import { Menu, X } from 'lucide-react'; // 햄버거/닫기 아이콘

function Main() {
  const { pathname } = useLocation();
  const vhRef = useRef(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const isPosition = useSelector((state: RootState) => state.position.isPosition);
  const ismobile = isMobile ? 'true' : 'false';

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobile) {
      vhRef.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
    }
  }, []);

  useEffect(() => {
    const mainSection = mainRef.current?.getBoundingClientRect();
    if (mainSection?.top === 0) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (pathname === '/') {
          document.body.style.overflow = '';
        }
      }, 3000);
    }
  }, []);

  return (
    <motion.div className={`top-0 ${isPosition}`}>
      <MainComponent ref={mainRef} ismobile={ismobile}>
        {/* 햄버거 메뉴 버튼 */}
        <div className="absolute top-6 right-10 z-20">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 메뉴 리스트 (오픈 시 표시) */}
        {menuOpen && (
          <div className="absolute top-16 right-10 z-10 bg-white border border-gray-300 shadow-lg rounded px-6 py-4">
            <ul className="flex flex-col gap-3 text-black text-sm font-medium tracking-widest uppercase">
              <li>25F/W</li>
              <li>세나</li>
              <li>조혜원</li>
              <li>김주하</li>
            </ul>
          </div>
        )}

        <MainBackground
          initial={{ ...OPACITY_0, scale: 1.25 }}
          animate={{ ...OPACITY_1, scale: 1 }}
          transition={{ ...ANI_TRANSITION, delay: 3 }}
        />

        <ScrollArrow delay={3.9} />
        <TextWrap />
        <InfoWrap delay={3} />
      </MainComponent>
    </motion.div>
  );
}

export default Main;
