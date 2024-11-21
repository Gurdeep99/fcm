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
    const data = 
    [
  {
    "id": "1",
    "gurujiName": "आदित्य शर्मा",
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "experience": "4",
    "followers": "1200",
    "videos": "20 videos",
    "topVoices": true,
    "isLive": true
  },
  {
    "id": "2",
    "gurujiName": "सुमित कुमारी",
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
    "experience": "10",
    "followers": "2300",
    "videos": "5 videos",
    "topVoices": false,
    "isLive": true
  },
  {
    "id": "3",
    "gurujiName": "राहुल सिंह",
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
    "experience": "1.5",
    "followers": "800",
    "videos": "15 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "4",
    "gurujiName": "ममता देवी",
    "image": "https://randomuser.me/api/portraits/women/4.jpg",
    "experience": "7",
    "followers": "3400",
    "videos": "25 videos",
    "topVoices": false,
    "isLive": true
  },
  {
    "id": "5",
    "gurujiName": "दीपक यादव",
    "image": "https://randomuser.me/api/portraits/men/5.jpg",
    "experience": "3",
    "followers": "1900",
    "videos": "40 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "6",
    "gurujiName": "स्मिता शाह",
    "image": "https://randomuser.me/api/portraits/women/6.jpg",
    "experience": "8",
    "followers": "1500",
    "videos": "10 videos",
    "topVoices": false,
    "isLive": true
  },
  {
    "id": "7",
    "gurujiName": "नरेंद्र वर्मा",
    "image": "https://randomuser.me/api/portraits/men/7.jpg",
    "experience": "5",
    "followers": "2600",
    "videos": "30 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "8",
    "gurujiName": "रितु जैन",
    "image": "https://randomuser.me/api/portraits/women/8.jpg",
    "experience": "2",
    "followers": "500",
    "videos": "8 videos",
    "topVoices": false,
    "isLive": true
  },
  {
    "id": "9",
    "gurujiName": "अजय शर्मा",
    "image": "https://randomuser.me/api/portraits/men/9.jpg",
    "experience": "6",
    "followers": "2200",
    "videos": "22 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "10",
    "gurujiName": "निशा गुप्ता",
    "image": "https://randomuser.me/api/portraits/women/10.jpg",
    "experience": "9",
    "followers": "3000",
    "videos": "18 videos",
    "topVoices": false,
    "isLive": true
  },
  {
    "id": "11",
    "gurujiName": "सूरज चौहान",
    "image": "https://randomuser.me/api/portraits/men/11.jpg",
    "experience": "4",
    "followers": "1600",
    "videos": "15 videos",
    "topVoices": true,
    "isLive": true
  },
  {
    "id": "12",
    "gurujiName": "पायल वर्मा",
    "image": "https://randomuser.me/api/portraits/women/12.jpg",
    "experience": "6",
    "followers": "2400",
    "videos": "12 videos",
    "topVoices": false,
    "isLive": false
  },
  {
    "id": "13",
    "gurujiName": "मनीष मिश्रा",
    "image": "https://randomuser.me/api/portraits/men/13.jpg",
    "experience": "2",
    "followers": "1800",
    "videos": "25 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "14",
    "gurujiName": "कृति सेन",
    "image": "https://randomuser.me/api/portraits/women/14.jpg",
    "experience": "3",
    "followers": "1100",
    "videos": "14 videos",
    "topVoices": true,
    "isLive": true
  },
  {
    "id": "15",
    "gurujiName": "विक्रम सिंह",
    "image": "https://randomuser.me/api/portraits/men/15.jpg",
    "experience": "7",
    "followers": "3500",
    "videos": "30 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "16",
    "gurujiName": "शीतल जैन",
    "image": "https://randomuser.me/api/portraits/women/16.jpg",
    "experience": "5",
    "followers": "1700",
    "videos": "19 videos",
    "topVoices": false,
    "isLive": true
  },
  {
    "id": "17",
    "gurujiName": "अर्जुन चौधरी",
    "image": "https://randomuser.me/api/portraits/men/17.jpg",
    "experience": "1",
    "followers": "900",
    "videos": "7 videos",
    "topVoices": false,
    "isLive": true
  },
  {
    "id": "18",
    "gurujiName": "नीतू राणा",
    "image": "https://randomuser.me/api/portraits/women/18.jpg",
    "experience": "4",
    "followers": "1300",
    "videos": "11 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "19",
    "gurujiName": "प्रकाश यादव",
    "image": "https://randomuser.me/api/portraits/men/19.jpg",
    "experience": "6",
    "followers": "2600",
    "videos": "28 videos",
    "topVoices": true,
    "isLive": false
  },
  {
    "id": "20",
    "gurujiName": "रचना सिन्हा",
    "image": "https://randomuser.me/api/portraits/women/20.jpg",
    "experience": "8",
    "followers": "2900",
    "videos": "22 videos",
    "topVoices": true,
    "isLive": true
  }
];
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
