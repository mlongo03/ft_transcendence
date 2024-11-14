import { router } from "../main.js"

// Helper function to make API calls
export async function apiFetch(url, options = {}) {
  // Set the content type header if it's not already set
  options.headers = options.headers || {};
  options.headers['Content-Type'] = 'application/json';

  // If body exists and isn't a string, JSON.stringify it for the fetch call
  if (options.body && typeof options.body !== 'string') {
    options.body = JSON.stringify(options.body);  // Adds JSON body here
  }

  const response = await fetch(url, options);

  // Redirect to login if the status is unauthorized
  if (response.status === 401) {
    window.history.pushState({}, '', '/signIn');
    router();
    return;
  }

  return response;
}
