const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <a className="brand" href="#top">
              <span className="brand__mark" aria-hidden="true">
                NP
              </span>
              <span className="brand__text">
                <span className="brand__name">N. Patel &amp; Co.</span>
                <span className="brand__tag">Est. 2000</span>
              </span>
            </a>
            <p className="footer__blurb">
              A furniture material supplier serving carpenters, contractors and
              interior studios with plywood, veneer, laminate and timber.
            </p>
          </div>

          <div className="footer__cols">
            <div>
              <p className="footer__heading">Products</p>
              <ul className="footer__list">
                <li>
                  <span>Plywood</span>
                </li>
                <li>
                  <span>Veneer</span>
                </li>
                <li>
                  <span>Laminate</span>
                </li>
                <li>
                  <span>Timber</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer__heading">Company</p>
              <ul className="footer__list">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#products">Our Range</a>
                </li>
                <li>
                  <a href="#why">Why Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {YEAR} N. Patel &amp; Co. All rights reserved.
          </span>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </footer>
  );
}
