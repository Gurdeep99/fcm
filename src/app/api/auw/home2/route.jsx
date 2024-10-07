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
      home: [
     
        {
            "component_name": "e_paper",
            "component_id": "5",
            "type": "Text",
            "category_name": "e-paper",
            "category_id": "13",
            "category_icon": "",
            "title": "पढ़ें अमर उजाला ई-पेपरर",
            "priority": 5,
            "dataItem": [
                {
                    "id": "001",
                    "type": "Text",
                    "date": "25 July 2024",
                    "category": "paper",
                    "category_id": "12",
                    "image_type": "paper",
                    "page": "1",
                    "image": "https://files.magzter.com/resize/magazine/1632498964/1674870857/view/3.jpg"
                },
                {
                    "id": "002",
                    "type": "Text",
                    "date": "25 July 2024",
                    "category": "paper",
                    "category_id": "12",
                    "image_type": "paper",
                    "page": "2",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI61k_F3ZYeAjPl4E41ya-jeVO1MpJC8zhJA&s"
                },
                {
                    "id": "003",
                    "type": "Text",
                    "date": "25 July 2024",
                    "category": "paper",
                    "category_id": "12",
                    "image_type": "paper",
                    "page": "3",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5EQlfH81-MPkHeFo_CQjdChD12QRoWi5xw&s"
                },
                {
                    "id": "004",
                    "type": "Text",
                    "date": "25 July 2024",
                    "category": "paper",
                    "category_id": "12",
                    "image_type": "paper",
                    "page": "4",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OdDB1G5cwko2kWQ4n-zSiaSIU6w0iZIt3w&s"
                },
                {
                    "id": "005",
                    "type": "Text",
                    "date": "25 July 2024",
                    "category": "paper",
                    "category_id": "12",
                    "image_type": "paper",
                    "page": "5",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5EQlfH81-MPkHeFo_CQjdChD12QRoWi5xw&s"
                }
            ]
        }
    ],
  
      metadata: {
        id: "668f9d84acd3cb34a86477ad",
        private: false,
        createdAt: "2024-07-11T08:53:24.732Z",
        name: "HomePage",
        name_hn: "",
      },
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  