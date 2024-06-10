'use client';

import { useState } from 'react';

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

      <p><small>Federico Moretti © 2013-{currentYear}. All rights reserved.</small></p>
    </footer>
  );
}
