export async function fetchData({
  url,
  method = "GET",
  body = null,
  token = null,
  lang = 'en'
}) {
  try {
    // Set headers
    const headers = {
      "Content-Type": "application/json",
      "x-lang": lang,
    };

    // Include token if available
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // Configure fetch options
    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    // Make the request
    const response = await fetch(
      `https://nwaa.trendline.marketing/api${url}`,
      options
    );

    const data = await response.json();
    // Check if the response is okay
    if (!response.ok) {
      return { error: true, ...data }
    }
    return { error: false, ...data };

  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
