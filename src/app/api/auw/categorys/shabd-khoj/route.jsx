export async function GET(request) {
    // Define expected authentication headers
  
    // Extract headers from the request
    const clientKey = request.headers.get('clientkey');
    const propertyKey = request.headers.get('propertykey');
    const authorization = request.headers.get('authorization');
  
    // Validate the headers
    if (
      clientKey !== process.env.CLIENT_KEY ||
      propertyKey !== process.env.PROPERTY_KEY ||
      authorization !== process.env.AUTHORIZATION
    ) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    // Your API data if authentication succeeds
    const data = {
        "main": {
          "title": "शहर और राज्य",
          "title_hn": "शहर और राज्य",
          "following": "23"
        },
        "feed": [
            {
                component_name: "webview",
                component_id: "1",
                id: "001",
                web_url:
                  "https://www.amarujala.com/games/shabd-khoj?in_app=app&fullscreen=true&client=android",
              }, 
        ],
        "metadata": {
          "id": "668f9d84acd3cb34a86477ad",
          "private": false,
          "createdAt": "2024-07-11T08:53:24.732Z",
          "name": "Desh",
          "name_hn": "देश"
        }
      };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  