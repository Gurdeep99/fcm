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
    const data =  {
        "_id": "61ea6079dabaef075e38ce92",
        "title": "hamburger categories",
        "status": "enable",
        "items": [
          {
            "_id": {
                "$oid": "6207a21d065fe270c516282e"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "आपके लिए",
            "key": "For You",
            "link": "/india-news",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 0
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c516282e1"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "देश",
            "key": "desh",
            "link": "/india-news",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 0
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c516283d"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "दुनिया",
            "key": "duniya",
            "link": "/world",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 1
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c516282f"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "मनोरंजन",
            "key": "entertainment",
            "link": "/entertainment",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 2
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162830"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "क्रिकेट",
            "key": "cricket",
            "link": "/cricket",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 3
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162833"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "कारोबार",
            "key": "business",
            "link": "/business",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 4
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162831"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "नौकरी",
            "key": "jobs",
            "link": "/jobs",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 5
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162832"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "शिक्षा",
            "key": "education",
            "link": "/education",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 6
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162834"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "टेक्नोलॉजी",
            "key": "technology",
            "link": "/technology",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 7
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162835"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "ऑटो",
            "key": "automobiles",
            "link": "/automobiles",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 8
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162836"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "ज्योतिष",
            "key": "astrology",
            "link": "/astrology",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 9
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162837"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "खेल",
            "key": "sports",
            "link": "/sports",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 10
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162838"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "हेल्थ एंड फिटनेस",
            "key": "lifestyle-fitness",
            "link": "/lifestyle/fitness",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 11
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c5162839"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "फैशन",
            "key": "fashion",
            "link": "/fashion",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 12
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c516283a"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "शक्ति",
            "key": "shakti",
            "link": "/shakti",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 13
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c516283b"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "आस्था",
            "key": "spirituality",
            "link": "/spirituality",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 14
        },
        {
            "_id": {
                "$oid": "6207a21d065fe270c516283c"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "बॉलीवुड",
            "key": "bollywood",
            "link": "/entertainment/bollywood",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "",
            "priority": 15
        }
        ],
        "image": null,
        "created_by": "61bc2e5844336c57c1031b89",
        "slug": "hamburger-categories",
        "client_id": "57398d264f1c1b0016ac7a05",
        "property_id": "57398d264f1c1b0016ac7a02",
        "updated_at": "2022-02-12T12:08:53.000000Z",
        "created_at": "2022-01-21T07:27:53.000000Z",
        "priority": 0,
        "updated_by": "59afe9f84f1c1bfb7f8b456c"
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  