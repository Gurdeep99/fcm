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
        "_id": "5a6312174f1c1b6f268b55f8",
        "title": "Amarujala main menu",
        "status": "enable",
        "items": [
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d79"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "देश",
            "link": "/india-news?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "देश",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 0
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d7a"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "खेलो और जीतो",
            "link": "/games/spin-the-wheel",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "PLAY",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "खेलो और जीतो",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 1
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d7d"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "शहर और राज्य",
            "link": "/city-and-states?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "शहर और राज्य",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 4
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d7e"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "मनोरंजन",
            "link": "/entertainment?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "entertainment-menu",
            "label": "",
            "title_hn": "मनोरंजन",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 5
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d7f"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "चुनाव 2024",
            "link": "/election/",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "nonamp",
            "title_hn": "चुनाव 2024",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 6
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d80"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "क्रिकेट",
            "link": "/cricket?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "cricket-menu",
            "label": "",
            "title_hn": "क्रिकेट",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 7
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d81"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "ज्योतिष",
            "link": "/astrology?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "ज्योतिष",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 8
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d82"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "दुनिया",
            "link": "/world?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "दुनिया",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 9
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d83"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "नौकरी",
            "link": "/jobs?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "jobs-category",
            "label": "",
            "title_hn": "नौकरी",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 10
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d84"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "शिक्षा",
            "link": "/education?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "शिक्षा",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 11
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d85"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "टेक",
            "link": "/technology?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "technology-menu",
            "label": "",
            "title_hn": "टेक्नॉलॉजी",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 12
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d86"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "ऑटो",
            "link": "/automobiles?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "automobiles-menu",
            "label": "",
            "title_hn": "ऑटोमोबाइल",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 13
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d87"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "कारोबार",
            "link": "/business?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "business-menu",
            "label": "",
            "title_hn": "कारोबार",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 14
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d88"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "विशेष",
            "link": "/special-stories?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "विशेष",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 15
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d89"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "आवाज",
            "link": "/podcast?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "nonamp",
            "title_hn": "आवाज",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 16
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d8a"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "ट्रेंडिंग",
            "link": "/recommended",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "nonamp",
            "title_hn": "ट्रेंडिंग",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 17
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d8b"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "वीडियो",
            "link": "/video",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "वीडियो",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 18
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d8c"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "वेब स्टोरीज",
            "link": "/web-stories?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "वेब स्टोरीज",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 19
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d8d"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "न्यूज ब्रीफ",
            "link": "/news-briefs?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "न्यूज ब्रीफ",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 20
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d8e"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "एक्सक्लूसिव",
            "link": "/tags/exclusive?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "एक्सक्लूसिव",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 21
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d8f"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "फोटो",
            "link": "/photo-gallery?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "फोटो",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 22
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d90"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "खेल",
            "link": "/sports?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "sports-menu",
            "label": "",
            "title_hn": "खेल",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 23
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d91"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "लाइफ़स्टाइल",
            "link": "/lifestyle?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "life-style-new",
            "label": "",
            "title_hn": "लाइफ़स्टाइल",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 24
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d92"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "शक्ति",
            "link": "/shakti?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "शक्ति",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 25
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d93"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "आस्था",
            "link": "/spirituality?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "आस्था",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 26
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d94"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "क्राइम",
            "link": "/crime?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "क्राइम",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 27
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d95"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "काव्य",
            "link": "/kavya?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "काव्य",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 28
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d96"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "विचार",
            "link": "/columns?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "विचार",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 29
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d98"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "हटके ख़बर",
            "link": "/bizarre-news?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "हटके ख़बर",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 31
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d99"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "हंसी-ठट्ठा",
            "link": "/humour?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "हंसी-ठट्ठा",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 32
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d9a"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "कृषि",
            "link": "/agriculture?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "कृषि",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 33
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d9b"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "मौसम",
            "link": "/tags/weather-forecast-today-in-india?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "nonamp",
            "title_hn": "मौसम",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 34
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d9c"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "पोल",
            "link": "/poll?src=mainmenu",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "nonamp",
            "title_hn": "पोल",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 35
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d9d"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "लेटेस्ट जॉब्स",
            "link": "/latest-jobs",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "latest-jobs-menu",
            "label": "",
            "title_hn": "Latest Jobs",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/desh",
            "priority": 36
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d9e"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "शॉर्ट वीडियोज",
            "link": "/video-shots",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "शॉर्ट वीडियोज",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/duniya",
            "priority": 37
          },
          {
            "_id": {
              "$oid": "65f972b8700fa16f32047d9f"
            },
            "image": "https://spidercmsstage.amarujala.com/assets/images/250x250/default_500.png",
            "titles": "Rewards Campaign",
            "link": "/rewards-program-campaigns",
            "status": "enable",
            "type": "same-page",
            "text_color": "#000000",
            "bg_color": "#000000",
            "others": "",
            "sub_menu_slug": "",
            "label": "",
            "title_hn": "Rewards Campaign",
            "api": "https://fcm.gurdeep.net/api/auw/categorys/sahar_rajya",
            "priority": 0
          }
        ],
        "image": null,
        "created_by": "59afe9f84f1c1bfb7f8b456c",
        "slug": "amarujala-main-menu",
        "client_id": "57398d264f1c1b0016ac7a05",
        "property_id": "57398d264f1c1b0016ac7a02",
        "updated_at": "2024-05-24T10:42:06.040000Z",
        "created_at": "2018-01-20T09:55:35.447000Z",
        "updated_by": "62de88450c91973da061da93",
        "priority": 0
      }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  