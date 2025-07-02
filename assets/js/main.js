async function checkApisAndRedirect() {
  const apiEndpoints = [
    "https://ufaking189.la.ddns.me/api",
    "https://ufaking189.laos.ddns.net/api",
    "https://ufaking2.la2.zapto.org/api"
  ];

  for (let apiUrl of apiEndpoints) {
    try {
      const response = await fetch(apiUrl, { method: 'GET' });

      if (response.status === 200) {
        // Extract domain from API URL
        const targetDomain = apiUrl.replace('/api', '/');
        window.location.href = targetDomain;
        return;
      }
    } catch (error) {
      console.warn(`Failed to reach ${apiUrl}:`, error);
    }
  }

  console.error("No API endpoints returned 200 OK.");
}

// Call on page load
checkApisAndRedirect();
