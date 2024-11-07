export async function GET(request) {
  // Define expected authentication headers

  // Extract headers from the request
  const clientKey = request.headers.get("clientkey");
  const propertyKey = request.headers.get("propertykey");
  const authorization = request.headers.get("authorization");

  // Validate the headers
  if (
    clientKey !== process.env.CLIENT_KEY ||
    propertyKey !== process.env.PROPERTY_KEY ||
    authorization !== process.env.AUTHORIZATION
  ) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Your API data if authentication succeeds
  const data = {
    home: [
      {
        data: [
          {
            id: "001",
            team: "1",
            title: "CSK",
            image: "https://i.pinimg.com/originals/39/0f/c7/390fc716070ce65f3cc496d84b909812.jpg",
            score: "210",
            wicket: "4",
            over: "20",
          },
          {
            id: "002",
            team: "1",
            title: "RCB",
            image: "https://ih1.redbubble.net/image.4977316900.7120/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp",
            score: "190",
            wicket: "9",
            over: "11.1",
          },
        ],
      },
    ],

    metadata: {
      id: "668f9d84a5d3qb34b86477ad",
      private: false,
      createdAt: "2024-11-07T08:53:24.732Z",
      name: "cricket_score",
      name_hn: "क्रिकेट कवरेज",
    },
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
