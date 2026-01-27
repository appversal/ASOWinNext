'use client';

import { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function IntercomProvider() {
  useEffect(() => {
    // Initialize Intercom with the specific app_id
    Intercom({
      app_id: 'henvjjmg',
    });

    // Cleanup
    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
}