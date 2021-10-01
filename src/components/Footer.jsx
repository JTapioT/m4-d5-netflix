import facebookLogo from '../assets/facebook-square-brands.svg'
import instagramLogo from '../assets/instagram-square-brands.svg'
import twitterLogo from '../assets/twitter-brands.svg'
import youtubeLogo from '../assets/youtube-brands.svg'

function Footer() {
  return(

  <footer className="text-white">
  <div className="container">
    <div className="row">
      <div className="col-8 col-8 offset-2">
        {/* Insert logos to this flex-container */}
        <a href="https://www.netflix.com">
          <img
            src={facebookLogo}
            className="footer-icon"
            alt="footer-link-icon"
            width={25}
            height={25}
          />
        </a>
        <a href="https://www.netflix.com">
          <img
            src={instagramLogo}
            className="footer-icon"
            alt="footer-link-icon"
            width={25}
            height={25}
          />
        </a>
        <a href="https://www.netflix.com">
          {" "}
          <img
            src={twitterLogo}
            className="footer-icon"
            alt="footer-link-icon"
            width={25}
            height={25}
          />
        </a>
        <a href="https://www.netflix.com">
          {" "}
          <img
            src={youtubeLogo}
            className="footer-icon"
            alt="footer-link-icon"
            width={25}
            height={25}
          />
        </a>
      </div>
      <div className="col-8 col-8 offset-2 mt-3">
        {/* I think it is great idea to try row here for four tet links*/}
        <div className="row">
          <p className="col-6 col-lg-4">Audio and Subtitles</p>
          <p className="col-6 col-lg-4">Audio Description</p>
          <p className="col-6 col-lg-4">Help Center</p>
          <p className="col-6 col-lg-4">Gift Cards</p>
          <p className="col-6 col-lg-4">Media Center</p>
          <p className="col-6 col-lg-4">Investor Relations</p>
          <p className="col-6 col-lg-4">Jobs</p>
          <p className="col-6 col-lg-4">Terms of Use</p>
          <p className="col-6 col-lg-4">Privacy</p>
          <p className="col-6 col-lg-4">Legal Notices</p>
          <p className="col-6 col-lg-4">Cookie Preferences</p>
          <p className="col-6 col-lg-4">Corporate Information</p>
          <p className="col-6 col-lg-4">Contact Us</p>
        </div>
      </div>
    </div>
    <a href="https://www.netflix.com" className="col-8 offset-2 footer-btn">
      Service Code
    </a>
    <p className="col-8 offset-2 mt-4 footer-copyright">
      1997-2021 Neflix, Inc. {"{"}i-0d00fcda2fdf9c0de{"}"}
    </p>
  </div>
</footer>
  )
}

export default Footer;