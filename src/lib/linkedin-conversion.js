const LINKEDIN_CONVERSION_ID = 25054228;
const trackedSubmissions = new Set();

/**
 * Fires a LinkedIn conversion event after a successful lead submission.
 * Safe to call before insight.min.js loads (uses lintrk queue).
 * @param {string} submissionId - Unique id for this submission attempt (prevents duplicate fires)
 * @returns {boolean} Whether the conversion was tracked
 */
export function trackLinkedInConversion(submissionId) {
  if (typeof window === 'undefined') return false;
  if (submissionId && trackedSubmissions.has(submissionId)) return false;

  const lintrk = window.lintrk;
  if (typeof lintrk !== 'function') return false;

  try {
    lintrk('track', { conversion_id: LINKEDIN_CONVERSION_ID });
    if (submissionId) trackedSubmissions.add(submissionId);
    return true;
  } catch {
    return false;
  }
}
