// Central registry of every "page" App.jsx can render.
// Using constants instead of raw strings avoids typos like
// setView("Landing") vs setView("LANDING") breaking navigation silently.

export const VIEWS = {
  LANDING: 'landing',
  AUTH: 'auth',
  KB_UPLOAD: 'kb-upload',
  KB_LIST: 'kb-list',
  VALIDATE_UPLOAD: 'validate-upload',
  VALIDATION_RESULTS: 'validation-results',
  VALIDATION_HISTORY: 'validation-history',
}
