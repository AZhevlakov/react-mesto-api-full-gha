import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        {`© ${new Date().getFullYear()} Mesto Russia`}
      </p>
    </footer>
  );
});

export default Footer;
