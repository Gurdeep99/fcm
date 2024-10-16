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
          "title": "Shabad Khoj",
          "title_hn": "शब्द खोज",
          "following": "23"
        },
        "feed": [
          {
            "component_name": "auto_slider",
            "component_id": "1",
            "dataItem": [
              {
                "id": "0001",
                "title": "बलिया वसूली कांड: सीएम का सख्त एक्शन... बदल डाला थाने और चौकी का स्टाफ, एसपी-एएसपी पर गिरी गाज; सीओ निलंबित",
                "date": "23 Apr 2024",
                "category": "टेक्नोलॉजी",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/26/ballia-illegal-recovery_7ff6601a6d6727edec447932eabd09f2.jpeg?w=674&dpr=1.0"
              },
              {
                "id": "0002",
                "title": "SC: यूपी सरकार ने बताया क्यों लागू किया था कांवड़ मार्ग पर नामपट्टिका का आदेश, सुप्रीम कोर्ट में दिया हलफनामा",
                "date": "23 Apr 2024",
                "category": "टेक्नोलॉजी",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/10/kanwar-yatra_eb4888fca6667ef306c7dfbab6909380.jpeg?w=674&dpr=1.0"
              },
              {
                "id": "0003",
                "title": "Parliament Monsoon Session Live: लोकसभा में कई मुद्दों पर भारी हंगामा, कार्यवाही थोड़ी देर के लिए की गई स्थगित",
                "date": "23 Apr 2024",
                "category": "टेक्नोलॉजी",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/22/parliament-monsoon-session-live_6b559304d548c6b9a1daaad0c9479bc8.jpeg?w=674&dpr=1.0"
              },
              {
                "id": "0004",
                "title": "AI: समाचार के लिए एआई का उपयोग वैश्विक रूप से चिंतनीय; सर्वे में सामने आई लोगों का भरोसा कम होने की बात...",
                "date": "23 Apr 2024",
                "category": "टेक्नोलॉजी",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/07/data-breach_39c0d9ebde6e9439299082d6c67c52fe.jpeg"
              },
              {
                "id": "0005",
                "title": "AI: समाचार के लिए एआई का उपयोग वैश्विक रूप से चिंतनीय; सर्वे में सामने आई लोगों का भरोसा कम होने की बात...",
                "date": "23 Apr 2024",
                "category": "टेक्नोलॉजी",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/08/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
              }
            ]
          },
          {
            "component_name": "video_story",
            "component_id": "2",
            "type": "Video",
            "category_name": "Technology",
            "category_id": "12",
            "category_icon": "",
            "title": "टैकनोलजी",
            "dataItem": [
              {
                "id": "001",
                "type": "Video",
                "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                "sub_title": "टैकनोलजी खबर",
                "date": "23 Apr 2024",
                "category": "Technology",
                "category_id": "12",
                "image_type": "big",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/08/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
              },
              {
                "itemList": [
                  {
                    "id": "002",
                    "type": "Video",
                    "title": "घरेलू इंडस ऐपस्टोर डिवाइस में पहले से इंस्टॉल आ सकता है, एचपीई, डैनफॉस ग्रीन डेटा सेंटर लाएंगे, और भी बहुत कुछ",
                    "sub_title": "टैकनोलजी खबर",
                    "date": "23 Apr 2024",
                    "category": "Technology",
                    "category_id": "12",
                    "image_type": "small",
                    "image": "https://staticimg.amarujala.com/assets/images/2024/04/14/whatsapp_78050575dc02ba95487e3192c6498f79.jpeg"
                  },
                  {
                    "id": "003",
                    "type": "Video",
                    "title": "अमेज़न बातचीत के लिए AI-संचालित एलेक्सा सेवा के लिए मासिक सदस्यता पर विचार कर रहा है",
                    "sub_title": "टैकनोलजी खबर",
                    "date": "23 Apr 2024",
                    "category": "Technology",
                    "category_id": "12",
                    "image_type": "small",
                    "image": "https://staticimg.amarujala.com/assets/images/2024/05/16/use-of-ai-in-office_139f34ed8f913b03f65d8d0e16cfd43d.jpeg"
                  },
                  {
                    "id": "004",
                    "type": "Video",
                    "title": "पॉकेट एफएम, इलेवनलैब्स ने एआई ऑडियो क्षमता लॉन्च की, रियलमी बड्स एयर 6 प्रो लॉन्च, और भी बहुत कुछ",
                    "sub_title": "टैकनोलजी खबर",
                    "date": "23 Apr 2024",
                    "category": "Technology",
                    "category_id": "12",
                    "image_type": "small",
                    "image": "https://staticimg.amarujala.com/assets/images/2024/07/08/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                  }
                ]
              }
            ]
          },
          {
            "component_name": "top_stories",
            "component_id": "3",
            "type": "Video",
            "category_name": "Top Stories",
            "category_id": "12",
            "category_icon": "",
            "title": "टॉप स्टोरीजी",
            "dataItem": [
              {
                "id": "1",
                "type": "story",
                "title": "घरेलू इंडस ऐपस्टोर डिवाइस में पहले से इंस्टॉल आ सकता है, एचपीई, डैनफॉस ग्रीन डेटा सेंटर लाएंगे, और भी बहुत कुछ",
                "sub_title": "बॉलीवुड खबर",
                "date": "23 Apr 2024",
                "category": "बॉलीवुड",
                "category_id": "5",
                "image_type": "small",
                "image": "https://userimg.amarujala.com/2024/7/22/669df90aaeafd.jpeg"
              },
              {
                "id": "2",
                "type": "Video",
                "title": "अमेज़न बातचीत के लिए AI-संचालित एलेक्सा सेवा के लिए मासिक सदस्यता पर विचार कर रहा है",
                "sub_title": "तकनीकी खबर",
                "date": "23 Apr 2024",
                "category": "तकनीकी",
                "category_id": "9",
                "image_type": "small",
                "image": "https://userimg.amarujala.com/2019/4/23/5cbefc562281d.jpeg"
              },
              {
                "id": "3",
                "type": "Story",
                "title": "पॉकेट एफएम, इलेवनलैब्स ने एआई ऑडियो क्षमता लॉन्च की, रियलमी बड्स एयर 6 प्रो लॉन्च, और भी बहुत कुछ",
                "sub_title": "तकनीकी खबर",
                "date": "23 Apr 2024",
                "category": "तकनीकी",
                "category_id": "1",
                "image_type": "small",
                "image": "https://userimg.amarujala.com/2020/5/30/5ed1e68cc87eb.jpeg"
              },
              {
                "id": "4",
                "type": "Story",
                "title": "पॉकेट एफएम, इलेवनलैब्स ने एआई ऑडियो क्षमता लॉन्च की, रियलमी बड्स एयर 6 प्रो लॉन्च, और भी बहुत कुछ",
                "sub_title": "तकनीकी खबर",
                "date": "23 Apr 2024",
                "category": "तकनीकी",
                "category_id": "1",
                "image_type": "small",
                "image": "https://userimg.amarujala.com/2022/1/18/61e6cc2989b19.jpg"
              },
              {
                "id": "5",
                "type": "Story",
                "title": "पॉकेट एफएम, इलेवनलैब्स ने एआई ऑडियो क्षमता लॉन्च की, रियलमी बड्स एयर 6 प्रो लॉन्च, और भी बहुत कुछ",
                "sub_title": "तकनीकी खबर",
                "date": "23 Apr 2024",
                "category": "तकनीकी",
                "category_id": "1",
                "image_type": "small",
                "image": "https://userimg.amarujala.com/2020/10/14/5f868c0ebedc5.jpeg"
              }
            ]
          },
          {
            "component_name": "tech_review",
            "component_id": "4",
            "type": "Text",
            "category_name": "Technology",
            "category_id": "13",
            "category_icon": "",
            "title": "टेक रिव्यू",
            "dataItem": [
              {
                "id": "001",
                "type": "Text",
                "title": "इस मैलवेयर के जरिए WhatsApp यूजर्स को निशाना बना रहे वियतनाम के हैकर्स, एक गलती पड़ेगी महंगी",
                "sub_title": "टेक डेस्क",
                "date": "18 Jul 2024",
                "category": "Technology",
                "category_id": "12",
                "image_type": "slider",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/18/whatsapp-e-challan-scam_733f2525b6b4017e2921d1e634f0a67a.jpeg"
              },
              {
                "id": "002",
                "type": "Text",
                "title": "इंस्टाग्राम पर रील बनाने वालों की आई मौज, नए फीचर से होगा जबरदस्त फायदा",
                "sub_title": "टेक डेस्क",
                "date": "19 July 2024",
                "category": "Technology",
                "category_id": "12",
                "image_type": "slider",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/17/update_4646fd78b8520d3a4819c3fb79fb8be7.jpeg"
              },
              {
                "id": "003",
                "type": "Text",
                "title": "WhatsApp में आ रहा नया फीचर, खास लोगों से चैट करना होगा आसान",
                "sub_title": "टेक डेस",
                "date": "20 July 2024",
                "category": "Technology",
                "category_id": "12",
                "image_type": "slider",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/17/favourites-on-whatsapp_90949c7eb6fa728c55482aa64b18a66a.jpeg"
              },
              {
                "id": "004",
                "type": "Text",
                "title": "गूगल कर सकता है बड़ा एलान, एक साल के लिए फ्री में मिलेगा Gemini एडवांस का एक्सेस",
                "sub_title": "टेक डेस",
                "date": "21 July 2024",
                "category": "Technology",
                "category_id": "12",
                "image_type": "slider",
                "image": "https://staticimg.amarujala.com/assets/images/2024/04/11/google-gemini-ai_d9939a90ff9c3ac42b07c715dfe4e462.jpeg"
              },
              {
                "id": "005",
                "type": "Text",
                "title": "एजीआर बकाए से संबंधित टेलीकॉम फर्म की दलीलों को शीर्ष अदालत ने किया नोट, जानें क्या है मामला",
                "sub_title": "टेक डेस",
                "date": "22 July 2024",
                "category": "Technology",
                "category_id": "12",
                "image_type": "slider",
                "image": "https://staticimg.amarujala.com/assets/images/2024/07/15/agr-dues_ddd1937cdb80039d970a28b63e01915a.jpeg"
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
  