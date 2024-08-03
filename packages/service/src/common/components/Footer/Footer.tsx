import { footerStyles } from "./Footer.css";

export const Footer = () => {
  return (
    <footer css={footerStyles}>
      <div className="inner-wrap">
        <div className="footer-top">
          <div className="footer-logo">
            <img
              src="https://www.hyundai.com/static/images/logo_footer.png"
              alt="현대자동차"
            />
          </div>
          <div className="menu">
            <div className="links">
              <div className="link-group">
                <a href="#" title="모바일 App">
                  모바일 App
                </a>
                <a href="#" title="저작권안내">
                  저작권안내
                </a>
                <a
                  href="https://privacy.hyundai.com/overview/full-policy"
                  title="개인정보처리방침"
                  target="_blank"
                >
                  <strong>개인정보 처리방침</strong>
                </a>
                <a href="#" title="이용약관">
                  이용약관
                </a>
                <a
                  href="https://privacy.Hyundai.com"
                  title="프라이버시 센터"
                  target="_blank"
                >
                  프라이버시 센터
                </a>
              </div>
              <div className="link-group">
                <a
                  href="http://audit.hyundai.com"
                  title="윤리경영 사이버 감사실"
                  target="_blank"
                >
                  윤리경영 사이버 감사실
                </a>
                <a href="/kr/ko/cctv" title="영상정보처리기기 운영관리방침">
                  영상정보처리기기 운영관리방침
                </a>
                <a href="/kr/ko/e/sitemap" title="사이트맵">
                  사이트맵
                </a>
              </div>
            </div>
            <p className="contact">고객센터 : 080-600-6000</p>
            <p className="copyright">
              COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark-wa.png"
                alt="웹 접근성 품질인증"
              />
              <span>웹 접근성 품질인증</span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark01.png"
                alt="우수디자인"
              />
              <span>우수디자인 지식경제부선정</span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark03.png"
                alt="가족친화 우수기관"
              />
              <span>가족친화 우수기관</span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark04.png"
                alt="한국서비스품질지수"
              />
              <span>
                2023년 한국서비스품질지수 (KS-SQI) 자동차 A/S 부문 9년 연속 1위
              </span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark06.png"
                alt="국가고객만족도"
              />
              <span>
                2024년 국가고객만족도(NCSI) 조사대상 전 부문 1위 수상
                (컴팩트승용, 중형, 준대형, 대형, 컴팩트RV, 대형RV, 전기차)
              </span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark07.png"
                alt="KMAC 선정"
              />
              <span>
                KMAC 선정 2023년 한국산업의 고객만족도 일반승용차 부문 30년 연속
                RV승용차 부문 20년 연속 1위 경형승용차 부문 / 전기자동차 부문
                1위
              </span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/img_mark_ksqei.png"
                alt="한국품질만족지수"
              />
              <span>
                2023년 한국품질만족지수 (KS-QEI) 조사 10개 부문 1위 (승용 조사
                대상 전 부문, SUV-소형/준중형/대형, 럭셔리세단 E세그,
                대형럭셔리SUV, 전기차, 자동차AS)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
