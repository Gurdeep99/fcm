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
        },
        {
            "component_name": "photo_story",
            "component_id": "8",
            "type": "Text",
            "category_name": "Education",
            "category_id": "13",
            "category_icon": "",
            "title": "वीडियो शॉट्स",
            "priority": 8,
            "dataItem": [
                {
                    "id": "001",
                    "category": "बॉलीवुड",
                    "title": "आर्थिक तंगी से उभरने पर रश्मिका मंदाना: मेरे दिल में, मैं अभी भी वह लड़की हूं जो एक खिलौना भी नहीं खरीद सकती थी",
                    "image": "https:\/\/i.pinimg.com\/736x\/16\/e5\/7b\/16e57b8e64ec70a3a591195760f1e5b7.jpg"
                },
                {
                    "id": "002",
                    "category": "गायक",
                    "title": "दुआ लिपा द्वारा लिखित और अभिनीत नई ऑल-इलेक्ट्रिक पॉर्श मैकन फिल्म देखें",
                    "image": "https:\/\/www.billboard.com\/wp-content\/uploads\/2024\/02\/02-dua-lipa-grammy-red-carpet-2024-billboard-1548.jpg?w=942&h=623&crop=1"
                },
                {
                    "id": "003",
                    "category": "हॉलीवुड",
                    "title": "रॉबर्ट डाउनी जूनियर का कहना है कि वह 'खुशी से' आयरन मैन के रूप में लौटेंगे: यह 'मेरे डीएनए का हिस्सा' है",
                    "image": "https:\/\/www.usatoday.com\/gcdn\/authoring\/authoring-images\/2024\/03\/11\/USAT\/72926919007-xxx-oscars-2024-dm-1824.jpg?width=300&height=489&fit=crop&format=pjpg&auto=webp"
                },
                {
                    "id": "004",
                    "category": "बॉलीवुड",
                    "title": "बैड न्यूज़ बॉक्स ऑफिस कलेक्शन दिन 6: विक्की कौशल, तृप्ति डिमरी की फिल्म ने भारत में अब तक ₹40 करोड़ से अधिक की कमाई की",
                    "image": "https:\/\/images.filmibeat.com\/img\/popcorn\/profile_photos\/vicky-kaushal-20230118154654-35139.jpg"
                }
            ]
        },
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
  