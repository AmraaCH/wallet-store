import GoTopBtn from "../../components/button/GotoTopBtn";
import MailSentBtn from "../../components/button/MailSendBtn";
import { EMAILL } from "./constant";

export const quickBtnsData = [
  {
    id: 1,
    datatooltip: EMAILL,
    tooltiptype: 'left',
    icon: <MailSentBtn name='이메일 주소 복사' />
  },
  {
    id: 3,
    datatooltip: '위로가기',
    tooltiptype: 'left',
    icon: <GoTopBtn name='위로가기' />
  }
]