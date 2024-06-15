'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<any>(getCurrentYear); // Show the current year.

  /**
   * Get the current year.
   * @returns {Number}
   */
  function getCurrentYear(): Number {
    const now: Date = new Date();
    return now.getFullYear();
  }

  return (
    <footer>
      <div className="row">
        <div className="col">
          <address>
            <ul>
              <li><strong>Federico Moretti</strong><br />via San Martino della Battaglia, 9<br />21100 Varese (VA)</li>
              <li>(+39) 351 819 2487</li>
              <li>hello@federicomoretti.it</li>
            </ul>
          </address>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <p><small>Federico Moretti © 2013-{currentYear}. <wbr />All rights reserved.</small></p>
        </div>
        <div className="col">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="col">
          <a href="#contents">
            <FontAwesomeIcon className="fa-border fa-border-radius" icon={faAngleUp} />
          </a>
        </div>
      </div>
    </footer>
  );
}
