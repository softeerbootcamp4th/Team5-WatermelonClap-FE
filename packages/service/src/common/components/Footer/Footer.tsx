import { footerStyles } from "./Footer.css";

export const Footer = () => {
  return (
    <footer css={footerStyles}>
      <div className="inner-wrap">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/images/gnb/logo_long.svg" alt="현대자동차" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/kr/ko/app-download" title="모바일 App">
                  모바일 App
                </a>
              </li>
              <li>
                <a href="/kr/ko/copyright" title="저작권안내">
                  저작권안내
                </a>
              </li>
              <li>
                <a
                  href="https://privacy.hyundai.com/overview/full-policy"
                  title="개인정보처리방침"
                  target="_blank"
                >
                  <strong>개인정보 처리방침</strong>
                </a>
              </li>
              <li>
                <a href="/kr/ko/agreements" title="이용약관">
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="https://privacy.Hyundai.com"
                  title="프라이버시 센터"
                  target="_blank"
                >
                  프라이버시 센터
                </a>
              </li>
              <li>
                <a
                  href="http://audit.hyundai.com"
                  title="윤리경영 사이버 감사실"
                  target="_blank"
                >
                  윤리경영 사이버 감사실
                </a>
              </li>
              <li>
                <a href="/kr/ko/cctv" title="영상정보처리기기 운영관리방침">
                  영상정보처리기기 운영관리방침
                </a>
              </li>
              <li>
                <a href="/kr/ko/e/sitemap" title="사이트맵">
                  사이트맵
                </a>
              </li>
            </ul>
            <p className="service">고객센터 : 080-600-6000</p>
            <p className="copyright">
              COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="site">
            <ul className="social">
              <li className="youtube">
                <a
                  href="https://www.youtube.com/@hyundai_kor"
                  target="_blank"
                  title="youtube"
                >
                  <span className="sr-only">youtube</span>
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/hyundai_kor"
                  target="_blank"
                  title="instagram"
                >
                  <span className="sr-only">instagram</span>
                </a>
              </li>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/hyundai.kor"
                  target="_blank"
                  title="facebook"
                >
                  <span className="sr-only">facebook</span>
                </a>
              </li>
              <li className="twitter">
                <a
                  href="https://twitter.com/hyundai_kor"
                  target="_blank"
                  title="twitter"
                >
                  <span className="sr-only">twitter</span>
                </a>
              </li>
              <li className="naverpost">
                <a
                  href="https://post.naver.com/abouthyundai"
                  target="_blank"
                  title="naver post"
                >
                  <span className="sr-only">naver post</span>
                </a>
              </li>
            </ul>
            <div className="family-site">
              <div className="custom-selectbox">
                <button type="button">
                  <span>Family Site</span>
                </button>
                <ul className="site-list">{/* List of family sites */}</ul>
              </div>
            </div>
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
              <span>한국서비스품질지수 1위</span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark06.png"
                alt="국가고객만족도"
              />
              <span>국가고객만족도 1위</span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark07.png"
                alt="KMAC 선정"
              />
              <span>KMAC 선정 1위</span>
            </li>
            <li>
              <img
                src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/img_mark_ksqei.png"
                alt="한국품질만족지수"
              />
              <span>한국품질만족지수 1위</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
