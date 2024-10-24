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
      "title": "desh",
      "title_hn": "देश",
      "following": "23"
    },
    "feed": [
      {
        "component_name": "story",
        "id": "001",
        "type": "Video",
        "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
        "sub_title": "टैकनोलजी खबर",
        "date": "23 Apr 2024",
        "category": "Technology",
        "category_id": "12",
        "image_type": "big",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/07/08/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
      },
      {
        "component_name": "story",
        "id": "002",
        "type": "Video",
        "title": "घरेलू इंडस ऐपस्टोर डिवाइस में पहले से इंस्टॉल आ सकता है, एचपीई, डैनफॉस ग्रीन डेटा सेंटर लाएंगे, और भी बहुत कुछ",
        "sub_title": "टैकनोलजी खबर",
        "date": "23 Apr 2024",
        "category": "Technology",
        "category_id": "12",
        "image_type": "small",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/04/14/whatsapp_78050575dc02ba95487e3192c6498f79.jpeg"
      },
      {
        "component_name": "story",
        "id": "003",
        "type": "Video",
        "title": "अमेज़न बातचीत के लिए AI-संचालित एलेक्सा सेवा के लिए मासिक सदस्यता पर विचार कर रहा है",
        "sub_title": "टैकनोलजी खबर",
        "date": "23 Apr 2024",
        "category": "Technology",
        "category_id": "12",
        "image_type": "small",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/05/16/use-of-ai-in-office_139f34ed8f913b03f65d8d0e16cfd43d.jpeg"
      },
      {
        "component_name": "story",
        "id": "004",
        "type": "Video",
        "title": "पॉकेट एफएम, इलेवनलैब्स ने एआई ऑडियो क्षमता लॉन्च की, रियलमी बड्स एयर 6 प्रो लॉन्च, और भी बहुत कुछ",
        "sub_title": "टैकनोलजी खबर",
        "date": "23 Apr 2024",
        "category": "Technology",
        "category_id": "12",
        "image_type": "small",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/07/08/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
      },
      {
        "component_name": "photo_story",
        "component_id": "8",
        "type": "Text",
        "category_name": "Education",
        "category_id": "13",
        "category_icon": "",
        "title": "फ़ोटो स्टोरीज",
        "dataItem": [
          {
            "id": "001",
            "category": "बॉलीवुड",
            "title": "आर्थिक तंगी से उभरने पर रश्मिका मंदाना: मेरे दिल में, मैं अभी भी वह लड़की हूं जो एक खिलौना भी नहीं खरीद सकती थी",
            "image": "https://i.pinimg.com/736x/16/e5/7b/16e57b8e64ec70a3a591195760f1e5b7.jpg"
          },
          {
            "id": "002",
            "category": "गायक",
            "title": "दुआ लिपा द्वारा लिखित और अभिनीत नई ऑल-इलेक्ट्रिक पॉर्श मैकन फिल्म देखें",
            "image": "https://www.billboard.com/wp-content/uploads/2024/02/02-dua-lipa-grammy-red-carpet-2024-billboard-1548.jpg?w=942&h=623&crop=1"
          },
          {
            "id": "003",
            "category": "हॉलीवुड",
            "title": "रॉबर्ट डाउनी जूनियर का कहना है कि वह 'खुशी से' आयरन मैन के रूप में लौटेंगे: यह 'मेरे डीएनए का हिस्सा' है",
            "image": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/11/USAT/72926919007-xxx-oscars-2024-dm-1824.jpg?width=300&height=489&fit=crop&format=pjpg&auto=webp"
          },
          {
            "id": "004",
            "category": "बॉलीवुड",
            "title": "बैड न्यूज़ बॉक्स ऑफिस कलेक्शन दिन 6: विक्की कौशल, तृप्ति डिमरी की फिल्म ने भारत में अब तक ₹40 करोड़ से अधिक की कमाई की",
            "image": "https://images.filmibeat.com/img/popcorn/profile_photos/vicky-kaushal-20230118154654-35139.jpg"
          }
        ]
      },
      {
        "component_name": "TopHeadlines",
        "component_id": "0",
        "type": "Text",
        "category_name": "Top Head lines",
        "category_id": "13",
        "category_icon": "",
        "title": "शीर्ष सुर्खियाँ",
        "priority": 19,
        "dataItem": [
          {
            "id": "001",
            "title": "लोकसभा चुनाव की तारीखों की घोषणा: जानें UP में कितने चरणों में होगी वोटिंग"
          },
          {
            "id": "002",
            "title": "वरुण गांधी को लेकर असमंजस में भाजपा | चुनाव से पहले बढ़ाएंगे पार्टी की मुश्किल"
          },
          {
            "id": "003",
            "title": "अरविन्द केजरीवाल के बाद Atishi ने बताया अब किसकी होगी गिरफ़्तारी? AAP के 4 नेता जाएंगे"
          }
        ]
      },
      {
        "component_name": "story",
        "id": "001",
        "type": "Text",
        "title": "मध्य प्रदेश कक्षा 10 और कक्षा 12 बोर्ड के सबसे पहल नतीजे कल, सबसे पहले अमर उजाला पर देखें नतीजे",
        "sub_title": "शिक्षा खबर",
        "date": "23 Apr 2024",
        "category": "Education",
        "category_id": "12",
        "image_type": "big",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/04/15/ipu-cet-2024_d28fdabae50cf46050cb13eaad87d48e.jpeg"
      },
      {
        "component_name": "story",
        "id": "002",
        "type": "Text",
        "title": "Rajasthan BSTC Result 2024: कब आएगा राजस्थान बीएसटीसी प्री डीएलएड परीक्षा का रिजल्ट, कहां से करना होगा चेक?",
        "sub_title": "शिक्षा खबर",
        "date": "23 Apr 2024",
        "category": "Education",
        "category_id": "12",
        "image_type": "small",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/04/24/computer-laptop-new_7f06e4e0397dd91dcf81c804f774a455.jpeg"
      },
      {
        "component_name": "story",
        "id": "003",
        "type": "Text",
        "title": "NIMCET 2024: निमसेट काउंसलिंग के पहले राउंड का सीट आवंटन परिणाम जारी, देखें महत्वपूर्ण तिथियों की लिस्ट",
        "sub_title": "शिक्षा खबर",
        "date": "23 Apr 2024",
        "category": "Education",
        "category_id": "12",
        "image_type": "small",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/04/26/nimcet-2024_d93aedf814105ada5b83938b4b063705.jpeg"
      },
      {
        "component_name": "story",
        "id": "004",
        "type": "Text",
        "title": "CUET UG Answer Key 2024: सीयूईटी यूजी उत्तर कुंजी के खिलाफ आज शाम पांच बजे तक दर्ज कराएं आपत्ति, ये रहा लिंक",
        "sub_title": "शिक्षा खबर",
        "date": "23 Apr 2024",
        "category": "Education",
        "category_id": "12",
        "image_type": "small",
        "headerTitle": "",
        "isLive": false,
        "isPremium": false,
        "web_url": "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
        "image": "https://staticimg.amarujala.com/assets/images/2024/04/17/answer-key_6d84b4b046b15bf258f47bccdd2db99d.jpeg"
      }
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
