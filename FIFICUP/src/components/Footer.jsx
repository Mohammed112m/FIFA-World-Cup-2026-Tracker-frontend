import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'


///////////////////////////////////////

const Footer=()=>{
  return (
    <footer className="footer">
      <h1> FIFA World Cup 2026</h1>
      <h4 className="footer-text">Follow US</h4>

      <div className="social-icons">
  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-link">
    <FaInstagram />
  </a>

  <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer" className="social-link">
    <FaWhatsapp />
  </a>

  <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="social-link">
    <FaTiktok />
  </a>
</div>

<p>© 2026 FIFA. All rights reserved By Mohammed Hamood.</p>

      {/* </div> */}
      {/* <div>
        <h4> Quick Links</h4>
        <p> Privacy Policy</p>
        <p> Terms of service</p>
        <p> Follow US</p>
        <p> Cookie Policy</p> */}
      {/* </div> */}

    </footer>
  )
}


export default Footer
