import './Footer.css'
const Footer = () => {
    return ( 
        <footer className="section footer-classic context-dark bg-image">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                  
                <p>I am a independent company </p>
        
                <p className="rights"><span>©  </span><span className="copyright-year">2022</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Embakassi, Nairobi</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="Dessaikibeho@gmail.com">DessaiKibeho@gmail.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><a href="+254793793843">+254793793843</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col"><a class="social-inner" href="https://www.facebook.com/dessai.kibeho.9"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className="col"><a class="social-inner" href="https://www.instagram.com/dessai_kibeho/"><span className="icon mdi mdi-instagram"></span><span>Instagram</span></a></div>
          <div className="col"><a class="social-inner" href="https://twitter.com/Dessai13"><span className="icon mdi mdi-twitter"></span><span>Twitter</span></a></div>
          <div className="col"><a class="social-inner" href="https://github.com/kdessaik"><span className="icon mdi mdi-youtube-play"></span><span>GitHub</span></a></div>
        </div>
      </footer>
     );
}
 
export default Footer;