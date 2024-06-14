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
            
          </address>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <p><small>Federico Moretti © 2013-{currentYear}. All rights reserved.</small></p>
        </div>
        <div className="col">

        </div>
        <div className="col">
        <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>
    </footer>
  );
}
