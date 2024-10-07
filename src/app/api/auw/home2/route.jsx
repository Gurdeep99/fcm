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
            "component_name": "AaamneSamneScreen",
            "component_id": "1",
            "title_small": "DGP जेल की निर्मम हत्या",
            "title": "कांच की बोतल से रेत डाला लोहिया का गला, आतंकी संगठन TRF ने ली जिम्मेदारी",
            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/22\/parliament-monsoon-session-live_6b559304d548c6b9a1daaad0c9479bc8.jpeg",
            "priority": 0,
            "dataItem": [
                {
                    "id": "01",
                    "title": "टैकनोलजी",
                    "itemList": [
                        {
                            "id": "01",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/08\/05\/bgalthasha-ma-hasa-oura-paema-shakha-hasana_195decd14b20d90b50f876d3bd269331.jpeg?w=674&dpr=1.0",
                            "title": "Bangladesh: बांग्लादेश में बिगड़ते हालात को देखते हुए PM हसीना ने देश छोड़ा; पद से दे सकती हैं इस्तीफा",
                            "category": "वर्ल्ड डेस्क"
                        },
                        {
                            "id": "02",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/20\/bangladesh-protest_58cc439d21b2a12df35b4760446d9217.jpeg?w=674&dpr=1.0",
                            "title": "Bangladesh Protests: हिंसा भड़कने से बांग्लादेश में अब तक कम से कम 300 लोगों की मौत, पूरे देश में लगा कर्फ्यू",
                            "category": "वर्ल्ड डेस्क"
                        }
                    ]
                },
                {
                    "id": "02",
                    "title": "नापाक हरकत",
                    "itemList": [
                        {
                            "id": "01",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/08\/05\/bgalthasha-ma-hasa-oura-paema-shakha-hasana_195decd14b20d90b50f876d3bd269331.jpeg?w=674&dpr=1.0",
                            "title": "Bangladesh: बांग्लादेश में बिगड़ते हालात को देखते हुए PM हसीना ने देश छोड़ा; पद से दे सकती हैं इस्तीफा",
                            "category": "वर्ल्ड डेस्क"
                        },
                        {
                            "id": "02",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/20\/bangladesh-protest_58cc439d21b2a12df35b4760446d9217.jpeg?w=674&dpr=1.0",
                            "title": "Bangladesh Protests: हिंसा भड़कने से बांग्लादेश में अब तक कम से कम 300 लोगों की मौत, पूरे देश में लगा कर्फ्यू",
                            "category": "वर्ल्ड डेस्क"
                        }
                    ]
                }
            ]
        },
        {
            "component_name": "auto_slider",
            "component_id": "1",
            "priority": 1,
            "dataItem": [
                {
                    "id": "0001",
                    "title": "बलिया वसूली कांड: सीएम का सख्त एक्शन... बदल डाला थाने और चौकी का स्टाफ, एसपी-एएसपी पर गिरी गाज; सीओ निलंबित",
                    "date": "23 Apr 2024",
                    "category": "टेक्नोलॉजी",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/26\/ballia-illegal-recovery_7ff6601a6d6727edec447932eabd09f2.jpeg?w=674&dpr=1.0"
                },
                {
                    "id": "0002",
                    "title": "SC: यूपी सरकार ने बताया क्यों लागू किया था कांवड़ मार्ग पर नामपट्टिका का आदेश, सुप्रीम कोर्ट में दिया हलफनामा",
                    "date": "23 Apr 2024",
                    "category": "टेक्नोलॉजी",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/10\/kanwar-yatra_eb4888fca6667ef306c7dfbab6909380.jpeg?w=674&dpr=1.0"
                },
                {
                    "id": "0003",
                    "title": "Parliament Monsoon Session Live: लोकसभा में कई मुद्दों पर भारी हंगामा, कार्यवाही थोड़ी देर के लिए की गई स्थगित",
                    "date": "23 Apr 2024",
                    "category": "टेक्नोलॉजी",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/22\/parliament-monsoon-session-live_6b559304d548c6b9a1daaad0c9479bc8.jpeg?w=674&dpr=1.0"
                },
                {
                    "id": "0004",
                    "title": "AI: समाचार के लिए एआई का उपयोग वैश्विक रूप से चिंतनीय; सर्वे में सामने आई लोगों का भरोसा कम होने की बात...",
                    "date": "23 Apr 2024",
                    "category": "टेक्नोलॉजी",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/07\/data-breach_39c0d9ebde6e9439299082d6c67c52fe.jpeg"
                },
                {
                    "id": "0005",
                    "title": "AI: समाचार के लिए एआई का उपयोग वैश्विक रूप से चिंतनीय; सर्वे में सामने आई लोगों का भरोसा कम होने की बात...",
                    "date": "23 Apr 2024",
                    "category": "टेक्नोलॉजी",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
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
            "icon": "EducationIcon",
            "title": "टैकनोलजी",
            "priority": 2,
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
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
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
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/14\/whatsapp_78050575dc02ba95487e3192c6498f79.jpeg"
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
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/05\/16\/use-of-ai-in-office_139f34ed8f913b03f65d8d0e16cfd43d.jpeg"
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
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
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
            "title": "स्टोरी",
            "priority": 3,
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
                    "image": "https:\/\/userimg.amarujala.com\/2024\/7\/22\/669df90aaeafd.jpeg"
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
                    "image": "https:\/\/userimg.amarujala.com\/2019\/4\/23\/5cbefc562281d.jpeg"
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
                    "image": "https:\/\/userimg.amarujala.com\/2020\/5\/30\/5ed1e68cc87eb.jpeg"
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
                    "image": "https:\/\/userimg.amarujala.com\/2022\/1\/18\/61e6cc2989b19.jpg"
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
                    "image": "https:\/\/userimg.amarujala.com\/2020\/10\/14\/5f868c0ebedc5.jpeg"
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
            "title": "वीडियो",
            "priority": 4,
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
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/18\/whatsapp-e-challan-scam_733f2525b6b4017e2921d1e634f0a67a.jpeg"
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
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/17\/update_4646fd78b8520d3a4819c3fb79fb8be7.jpeg"
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
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/17\/favourites-on-whatsapp_90949c7eb6fa728c55482aa64b18a66a.jpeg"
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
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/11\/google-gemini-ai_d9939a90ff9c3ac42b07c715dfe4e462.jpeg"
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
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/15\/agr-dues_ddd1937cdb80039d970a28b63e01915a.jpeg"
                }
            ]
        },
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
            "component_name": "text_story",
            "component_id": "6",
            "type": "Text",
            "category_name": "technology",
            "category_id": "13",
            "category_icon": "",
            "title": "एतिहासिक महाकथाए",
            "priority": 6,
            "dataItem": [
                {
                    "id": "001",
                    "type": "Text",
                    "title": "मध्य प्रदेश कक्षा 10 और कक्षा 12 बोर्ड के सबसे पहल नतीजे कल, सबसे पहले अमर उजाला पर देखें नतीजे",
                    "sub_title": "शिक्षा खबर",
                    "date": "23 Apr 2024",
                    "category": "Education",
                    "category_id": "12",
                    "image_type": "big",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/15\/ipu-cet-2024_d28fdabae50cf46050cb13eaad87d48e.jpeg"
                },
                {
                    "itemList": [
                        {
                            "id": "002",
                            "type": "Text",
                            "title": "Rajasthan BSTC Result 2024: कब आएगा राजस्थान बीएसटीसी प्री डीएलएड परीक्षा का रिजल्ट, कहां से करना होगा चेक?",
                            "sub_title": "शिक्षा खबर",
                            "date": "23 Apr 2024",
                            "category": "Education",
                            "category_id": "12",
                            "image_type": "small",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/24\/computer-laptop-new_7f06e4e0397dd91dcf81c804f774a455.jpeg"
                        },
                        {
                            "id": "003",
                            "type": "Text",
                            "title": "NIMCET 2024: निमसेट काउंसलिंग के पहले राउंड का सीट आवंटन परिणाम जारी, देखें महत्वपूर्ण तिथियों की लिस्ट",
                            "sub_title": "शिक्षा खबर",
                            "date": "23 Apr 2024",
                            "category": "Education",
                            "category_id": "12",
                            "image_type": "small",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/26\/nimcet-2024_d93aedf814105ada5b83938b4b063705.jpeg"
                        },
                        {
                            "id": "004",
                            "type": "Text",
                            "title": "CUET UG Answer Key 2024: सीयूईटी यूजी उत्तर कुंजी के खिलाफ आज शाम पांच बजे तक दर्ज कराएं आपत्ति, ये रहा लिंक",
                            "sub_title": "शिक्षा खबर",
                            "date": "23 Apr 2024",
                            "category": "Education",
                            "category_id": "12",
                            "image_type": "small",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/17\/answer-key_6d84b4b046b15bf258f47bccdd2db99d.jpeg"
                        }
                    ]
                }
            ]
        },
        {
            "component_name": "audio_slider",
            "component_id": "7",
            "type": "Text",
            "category_name": "Education",
            "category_id": "13",
            "category_icon": "",
            "title": "एतिहासिक महाकथाए",
            "priority": 7,
            "dataItem": [
                {
                    "id": "001",
                    "title": "संपूर्ण रामायण",
                    "subtitle": "शिव धनुष का भंग",
                    "duration": "18 घंटे",
                    "chapters": "22 अध्याय",
                    "image": "https:\/\/i.pinimg.com\/736x\/c0\/47\/77\/c04777972556e2fc36590fca7b87d497.jpg",
                    "audioDuration": "26:30"
                },
                {
                    "id": "002",
                    "title": "संपूर्ण हनुमान कथा",
                    "subtitle": "शिव धनुष का भंग",
                    "duration": "11 घंटे",
                    "chapters": "21 अध्याय",
                    "image": "https:\/\/cdna.artstation.com\/p\/assets\/images\/images\/011\/488\/158\/4k\/gaurav-kumar-bpr-render.jpg",
                    "audioDuration": "22:21"
                },
                {
                    "id": "003",
                    "title": "संपूर्ण कृष्ण कथा",
                    "subtitle": "शिव धनुष का भंग",
                    "duration": "15 घंटे",
                    "chapters": "29 अध्याय",
                    "image": "https:\/\/i.pinimg.com\/236x\/fc\/78\/e2\/fc78e2d8131fd0d8685b5ff7b23dfcea.jpg",
                    "audioDuration": "10:30"
                },
                {
                    "id": "004",
                    "title": "संपूर्ण शिव कथा",
                    "subtitle": "शिव धनुष का भंग",
                    "duration": "2 घंटे",
                    "chapters": "1 अध्याय",
                    "image": "https:\/\/i.pinimg.com\/736x\/2c\/d6\/a9\/2cd6a93f8893e67a87cebddf2d680726.jpg",
                    "audioDuration": "34:30"
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
        {
            "component_name": "horoscope",
            "component_id": "9",
            "type": "Text",
            "category_name": "Education",
            "category_id": "13",
            "category_icon": "",
            "title": "राशिफल",
            "priority": 9,
            "dataItem": [
                {
                    "id": "001",
                    "title": "मेष राशि",
                    "icon": "",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/12\/aaja-ka-rashafal_e191ebbc7f847a63763e3dad4ad0058c.jpeg?w=674&dpr=1.0",
                    "description": "आज का दिन आपके लिए बाकी दिनों की तुलना में अच्छा रहने वाला है। आप किसी नए काम की शुरुआत कर सकते हैं। कोई बड़ी जिम्मेदारी आपके ऊपर आ सकती है, जिससे आपको घबराने की आवश्यकता नहीं है। आप अपने परिवार में छोटे बच्चों के लिए कोई उपहार लेकर आ सकते हैं। गृहस्थ जीवन में चल रही समस्याओं से आपको छुटकारा मिलेगा। दोनों एक दूसरे के प्रति समर्पित नजर आएंगे। कार्यक्षेत्र में आपको अपने बॉस की कोई बात बुरी लग सकती है, लेकिन फिर भी आप उनसे कुछ नहीं कहेंगे। आपकी तरक्की के नए-नए मार्ग खुलेंगे।।"
                },
                {
                    "id": "002",
                    "title": "वृषभ",
                    "icon": "",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/12\/aaja-ka-rashafal_e191ebbc7f847a63763e3dad4ad0058c.jpeg?w=674&dpr=1.0",
                    "description": "आज का दिन आपके लिए बाकी दिनों की तुलना में अच्छा रहने वाला है। आप किसी नए काम की शुरुआत कर सकते हैं। कोई बड़ी जिम्मेदारी आपके ऊपर आ सकती है, जिससे आपको घबराने की आवश्यकता नहीं है। आप अपने परिवार में छोटे बच्चों के लिए कोई उपहार लेकर आ सकते हैं। गृहस्थ जीवन में चल रही समस्याओं से आपको छुटकारा मिलेगा। दोनों एक दूसरे के प्रति समर्पित नजर आएंगे। कार्यक्षेत्र में आपको अपने बॉस की कोई बात बुरी लग सकती है, लेकिन फिर भी आप उनसे कुछ नहीं कहेंगे। आपकी तरक्की के नए-नए मार्ग खुलेंगे।।"
                },
                {
                    "id": "003",
                    "title": " मिथुन",
                    "icon": "",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/12\/aaja-ka-rashafal_e191ebbc7f847a63763e3dad4ad0058c.jpeg?w=674&dpr=1.0",
                    "description": "आज का दिन आपके लिए बाकी दिनों की तुलना में अच्छा रहने वाला है। आप किसी नए काम की शुरुआत कर सकते हैं। कोई बड़ी जिम्मेदारी आपके ऊपर आ सकती है, जिससे आपको घबराने की आवश्यकता नहीं है। आप अपने परिवार में छोटे बच्चों के लिए कोई उपहार लेकर आ सकते हैं। गृहस्थ जीवन में चल रही समस्याओं से आपको छुटकारा मिलेगा। दोनों एक दूसरे के प्रति समर्पित नजर आएंगे। कार्यक्षेत्र में आपको अपने बॉस की कोई बात बुरी लग सकती है, लेकिन फिर भी आप उनसे कुछ नहीं कहेंगे। आपकी तरक्की के नए-नए मार्ग खुलेंगे।।"
                },
                {
                    "id": "004",
                    "title": " कर्क",
                    "icon": "",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/12\/aaja-ka-rashafal_e191ebbc7f847a63763e3dad4ad0058c.jpeg?w=674&dpr=1.0",
                    "description": "आज का दिन आपके लिए बाकी दिनों की तुलना में अच्छा रहने वाला है। आप किसी नए काम की शुरुआत कर सकते हैं। कोई बड़ी जिम्मेदारी आपके ऊपर आ सकती है, जिससे आपको घबराने की आवश्यकता नहीं है। आप अपने परिवार में छोटे बच्चों के लिए कोई उपहार लेकर आ सकते हैं। गृहस्थ जीवन में चल रही समस्याओं से आपको छुटकारा मिलेगा। दोनों एक दूसरे के प्रति समर्पित नजर आएंगे। कार्यक्षेत्र में आपको अपने बॉस की कोई बात बुरी लग सकती है, लेकिन फिर भी आप उनसे कुछ नहीं कहेंगे। आपकी तरक्की के नए-नए मार्ग खुलेंगे।।"
                },
                {
                    "id": "005",
                    "title": "सिंह",
                    "icon": "",
                    "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/12\/aaja-ka-rashafal_e191ebbc7f847a63763e3dad4ad0058c.jpeg?w=674&dpr=1.0",
                    "description": "आज का दिन आपके लिए बाकी दिनों की तुलना में अच्छा रहने वाला है। आप किसी नए काम की शुरुआत कर सकते हैं। कोई बड़ी जिम्मेदारी आपके ऊपर आ सकती है, जिससे आपको घबराने की आवश्यकता नहीं है। आप अपने परिवार में छोटे बच्चों के लिए कोई उपहार लेकर आ सकते हैं। गृहस्थ जीवन में चल रही समस्याओं से आपको छुटकारा मिलेगा। दोनों एक दूसरे के प्रति समर्पित नजर आएंगे। कार्यक्षेत्र में आपको अपने बॉस की कोई बात बुरी लग सकती है, लेकिन फिर भी आप उनसे कुछ नहीं कहेंगे। आपकी तरक्की के नए-नए मार्ग खुलेंगे।।"
                }
            ]
        },
        {
            "component_name": "cricket_score",
            "component_id": "10",
            "type": "Text",
            "category_name": "Education",
            "category_id": "13",
            "category_icon": "",
            "title": "क्रिकेट कवरेज",
            "match_status": "लाइव",
            "marque": "LSG को जीत के लिए 129 रन, 61 गेंदों में चाहिए : CRR: 8.3",
            "game_date": "April 01",
            "priority": 10,
            "teamScore": [
                {
                    "id": "001",
                    "team": "1",
                    "title": "CSK",
                    "image": "https:\/\/i.pinimg.com\/originals\/39\/0f\/c7\/390fc716070ce65f3cc496d84b909812.jpg",
                    "score": "210",
                    "wicket": "4",
                    "over": "20"
                },
                {
                    "id": "001",
                    "team": "1",
                    "title": "RCB",
                    "image": "https:\/\/ih1.redbubble.net\/image.4977316900.7120\/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp",
                    "score": "190",
                    "wicket": "9",
                    "over": "11.1"
                }
            ],
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
                    "image": "https:\/\/static.toiimg.com\/thumb\/msid-95123042,width-1280,height-720,resizemode-4\/95123042.jpg"
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
                            "image": "https:\/\/ichef.bbci.co.uk\/news\/976\/cpsprodpb\/0A24\/production\/_126769520_gettyimages-1384434751-594x594.jpg"
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
                            "image": "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcQng-uWIT3-gA0k9fqy-rz_QzYUBYtB6FsIkw&s"
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
                            "image": "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcTRXZAPQiCober8Eu4SJwRhXAuRkE0nB36fyQ&s"
                        }
                    ]
                }
            ]
        },
        {
            "component_name": "infographics",
            "component_id": "11",
            "type": "slider",
            "category_name": "cricket",
            "category_id": "14",
            "category_icon": "",
            "title": "इन्फोग्राफिक्स",
            "match_status": "लाइव",
            "priority": 11,
            "dataItem": [
                {
                    "id": "001",
                    "type": "slider",
                    "name": "Virat Kohli",
                    "title": "Biggest Six in IPL",
                    "sub_title": "टैकनोलजी खबर",
                    "match": "23 Apr 2024",
                    "score": "80",
                    "ball": "62",
                    "image_type": "small",
                    "image": "https:\/\/images1.wionews.com\/images\/wion\/900x1600\/2024\/3\/27\/1711543711477_ViratKohli.jpg"
                },
                {
                    "id": "002",
                    "type": "slider",
                    "name": "Rishabh Pant",
                    "title": "Great Keeping in last match",
                    "sub_title": "टैकनोलजी खबर",
                    "match": "23 Apr 2024",
                    "score": "101",
                    "ball": "80",
                    "image_type": "small",
                    "image": "https:\/\/img.mensxp.com\/media\/content\/2024\/Mar\/rishabh_pant_dc_rr_2022_ipl_65ead89986ae5.jpeg"
                },
                {
                    "id": "003",
                    "type": "Video",
                    "name": "Virat & Pant",
                    "title": "Cricketers who played for only one team",
                    "sub_title": "टैकनोलजी खबर",
                    "match": "23 Apr 2024",
                    "score": "52",
                    "ball": "17",
                    "image_type": "small",
                    "image": "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcQDIot3J6oG9IS81Gaj5dfDtfek0FOvXK3aoQ&s"
                }
            ]
        },
        {
            "component_name": "trending_card",
            "component_id": "12",
            "type": "slider",
            "category_name": "sports",
            "category_id": "14",
            "category_icon": "",
            "title": "खेल में ट्रेंडिंग ",
            "priority": 13,
            "dataItem": [
                {
                    "id": "1",
                    "type": "slider",
                    "title": "MANI of steel: Manu Bhaker becomes first Indian woman shooter to win a medal at Olympics",
                    "image": "https:\/\/upload.wikimedia.org\/wikipedia\/commons\/f\/fa\/Manu_Bhaker%2C_Indian_shooting_sportsperson.jpg"
                },
                {
                    "id": "2",
                    "type": "slider",
                    "title": "Remarkable 19 Shooters Earn 2024 Paris Olympics Quota – Know Who They Are",
                    "image": "https:\/\/images.thequint.com\/thequint%2F2024-01%2F7f2389b2-2478-40fb-99b8-dc675265c649%2Fo.jpg"
                },
                {
                    "id": "3",
                    "type": "slider",
                    "title": "Paris Olympics 2024: State-Wise Distribution Of 117 Indian Athletes Participating | Olympics News",
                    "image": "https:\/\/c.ndtvimg.com\/2023-10\/rrssa898_neeraj-chopra-afp_625x300_05_October_23.jpg"
                },
                {
                    "id": "4",
                    "type": "slider",
                    "title": "Mary Kom to lead delegation as IOA announces appointments of Indian officials for 2024",
                    "image": "https:\/\/resize.indiatvnews.com\/en\/resize\/newbucket\/1200_-\/2024\/03\/travis-3-1711031464.jpg"
                }
            ]
        },
        {
            "component_name": "podcast_card",
            "component_id": "13",
            "type": "slider",
            "category_name": "sports",
            "category_id": "14",
            "category_icon": "",
            "title": "हाल का पॉडकास्ट",
            "priority": 14,
            "dataItem": [
                {
                    "id": "1",
                    "image": "https:\/\/beerbiceps.com\/wp-content\/uploads\/2023\/02\/257-Audio-Thumb-copy-1024x1024.jpg",
                    "type": "podcastList",
                    "provider": "TRS",
                    "episode": "Ep 322",
                    "title": "राजर्षि नंदी भूत, प्रेत और असुरों के बारे में अपना अनुभव और ज्ञान साझा कर रहे हैं",
                    "duration": "36m 12s"
                },
                {
                    "id": "1",
                    "image": "https:\/\/engage4more.com\/blog\/wp-content\/uploads\/2023\/02\/Navya-Naveli-Nanda-Engage4more-.png",
                    "type": "podcastList",
                    "provider": "Google",
                    "episode": "Ep 01",
                    "title": "नव्या नवेली नंदा एक भारतीय उद्यमी हैं जो भारत के पहले महिला स्वास्थ्य और कल्याण मंच, आरा हेल्थ की सह-संस्थापक और सीईओ हैं।",
                    "duration": "26m 04s"
                },
                {
                    "id": "1",
                    "image": "https:\/\/images.podcastpage.io\/fetch\/https%3A%2F%2Fwww.omnycontent.com%2Fd%2Fprograms%2F4bb33704-615b-4054-aae9-ace500fd4197%2F53e60756-3661-453b-a87c-afb9008fb4b3%2Fimage.jpg%3Ft%3D1677747239%26size%3DLarge",
                    "type": "podcastList",
                    "provider": "bingepods",
                    "episode": "Ep 18",
                    "title": "स्वास्थ्य, कल्याण, कामुकता और बहुत कुछ... डॉ. क्यूटरस और मित्र इन प्रश्नों और बहुत कुछ का उत्तर देने के लिए यहां हैं!",
                    "duration": "07m 02s"
                },
                {
                    "id": "1",
                    "image": "https:\/\/m.media-amazon.com\/images\/I\/41FwWjiiURL._SL500_.jpg",
                    "type": "podcastList",
                    "provider": "Red FM",
                    "episode": "Ep 781",
                    "title": "इंडियन मर्डर मिस्ट्री",
                    "duration": "10m 42s"
                },
                {
                    "id": "1",
                    "image": "https:\/\/im.idiva.com\/content\/2023\/Jun\/LEAD-93_649965a43d6b2.png",
                    "type": "podcastList",
                    "provider": "India News",
                    "episode": "Ep 07",
                    "title": "फालतू पॉडकास्ट",
                    "duration": "17m 11s"
                }
            ]
        },
        {
            "component_name": "trending_card",
            "component_id": "14",
            "type": "slider",
            "category_name": "sports",
            "category_id": "14",
            "category_icon": "",
            "title": "चंद्रयान 3 कवरेज",
            "priority": 15,
            "dataItem": [
                {
                    "id": "1",
                    "type": "slider",
                    "title": "अंतरिक्ष में बड़े पैमाने पर टकराव से बचने के लिए इसरो ने चंद्रयान-3 के प्रक्षेपण में चार सेकंड की देरी की",
                    "image": "https:\/\/images1.wionews.com\/images\/wion\/900x1600\/2023\/7\/26\/1690363945355_cover.jpg"
                },
                {
                    "id": "2",
                    "type": "slider",
                    "title": "अंतरिक्ष में बड़े पैमाने पर टकराव से बचने के लिए इसरो ने चंद्रयान-3 के प्रक्षेपण में चार सेकंड की देरी की",
                    "image": "https:\/\/rupapublications.co.in\/wp-content\/uploads\/2023\/10\/Chandrayaan-3-Front.jpg"
                },
                {
                    "id": "3",
                    "type": "slider",
                    "title": "अंतरिक्ष में बड़े पैमाने पर टकराव से बचने के लिए इसरो ने चंद्रयान-3 के प्रक्षेपण में चार सेकंड की देरी की",
                    "image": "https:\/\/images1.wionews.com\/images\/wion\/900x1600\/2023\/7\/26\/1690363945355_cover.jpg"
                },
                {
                    "id": "4",
                    "type": "slider",
                    "title": "अंतरिक्ष में बड़े पैमाने पर टकराव से बचने के लिए इसरो ने चंद्रयान-3 के प्रक्षेपण में चार सेकंड की देरी की",
                    "image": "https:\/\/rupapublications.co.in\/wp-content\/uploads\/2023\/10\/Chandrayaan-3-Front.jpg"
                }
            ]
        },
        {
            "component_name": "magazine",
            "component_id": "15",
            "type": "slider",
            "category_name": "magazine",
            "category_id": "14",
            "category_icon": "",
            "title": "अमर उजाला मैगजीन",
            "priority": 16,
            "dataItem": [
                {
                    "id": "1",
                    "type": "slider",
                    "published": "31 Jul 2024",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFydk48z4-3VsTFeWpppJly4MrE3IRaQNhQ&s"
                },
                {
                    "id": "2",
                    "type": "slider",
                    "published": "31 Jul 2024",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Zrfi_gr93R1s56CJ0wghvsMe3-n7z8ym1A&s"
                },
                {
                    "id": "3",
                    "type": "slider",
                    "published": "31 Jul 2024",
                    "image": "https://files.magzter.com/resize/magazine/1632503793/1713490791/view/1.jpg"
                },
                {
                    "id": "4",
                    "type": "slider",
                    "published": "31 Jul 2024",
                    "image": "https://files.magzter.com/resize/magazine/1632503793/1715823611/view/3.jpg"
                },
                {
                    "id": "5",
                    "type": "slider",
                    "published": "31 Jul 2024",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28ICTEGz_9_h8sreiN6ZarP7J3F0qo32Kug&s"
                }
            ]
        },
        {
            "component_name": "weather",
            "component_id": "16",
            "type": "slider",
            "category_name": "magazine",
            "category_id": "14",
            "category_icon": "",
            "title": "शहर समाचार",
            "city": [
                {
                    "city": "delhi",
                    "city_hn": "दिल्ली"
                },
                {
                    "city": "noida",
                    "city_hn": "नोएडा"
                },
                {
                    "city": "gurugram",
                    "city_hn": "गुरुग्राम"
                },
                {
                    "city": "mumbai",
                    "city_hn": "मुंबई"
                },
                {
                    "city": "pune",
                    "city_hn": "पुणे"
                },
                {
                    "city": "meerut",
                    "city_hn": "मेरठ"
                },
                {
                    "city": "lucknow",
                    "city_hn": "लखनऊ"
                }
            ],
            "priority": 17,
            "dataItem": [
                {
                    "id": "1",
                    "city": "delhi",
                    "city_hn": "दिल्ली",
                    "temprature": "22.6",
                    "rise": "06:00 AM",
                    "set": "06:00 PM",
                    "weather": "Sunny",
                    "date": "30 Jul 2024",
                    "icon_title": "धूप भरा दिन",
                    "dataItem": [
                        {
                            "id": "001",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/30\/rajasamatha-ma-hathasa_217898c21866e12b0550df52cd96b8ce.jpeg?w=480&dpr=0.8"
                        },
                        {
                            "id": "002",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/30\/eka-maca-para-thakha-vapakashha-ekata_6250cb28a6f42f38a410dd0a48ea7184.png?w=674&dpr=1.0"
                        },
                        {
                            "id": "003",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/30\/manu-bhaker-manu-bhaker-medals-manu-bhaker-paris-olympics-paris-olympics-2024-india-olympics-20_93ac8722da7a2a88b31544f83727803b.jpeg?w=674&dpr=1.0"
                        }
                    ]
                },
                {
                    "id": "2",
                    "city": "noida",
                    "city_hn": "नोएडा",
                    "temprature": "23.6",
                    "rise": "06:00 AM",
                    "set": "06:00 PM",
                    "weather": "Sunny",
                    "date": "30 Jul 2024",
                    "dataItem": [
                        {
                            "id": "001",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/25\/cadagaugdhha-garapa-oifa-kalja-jhajara-ma-rakarada-palsamata_5c7a2699dc92dd3d01099ce2939a5ede.jpeg?w=674&dpr=1.0"
                        },
                        {
                            "id": "002",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/24\/satara-2-pasatara-oura-tamanana-bhataya_882a036ce081d67c120882a5268876fd.jpeg?w=674&dpr=1.0"
                        },
                        {
                            "id": "003",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/24\/bihar-news-accused-of-death-of-pregnant-woman-due-to-negligence-of-private-doctor-in-chhapra_5909a44cfa06e5eede4f7cbf834047fd.jpeg?w=674&dpr=1.0"
                        }
                    ]
                },
                {
                    "id": "2",
                    "city": "gurugram",
                    "city_hn": "गुरुग्राम",
                    "temprature": "24.6",
                    "rise": "06:00 AM",
                    "set": "06:00 PM",
                    "weather": "Sunny",
                    "date": "30 Jul 2024",
                    "dataItem": [
                        {
                            "id": "001",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/29\/maka-para-majatha-palsa-va-mahall-ka-lga-mahathava-ka-fail-fata_76237ab4beca3440f319ecbb3e458dc0.jpeg?w=674&dpr=1.0"
                        },
                        {
                            "id": "002",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/26\/paratakatamaka-fata_fb258d331456f73af1cac2a4b6e8acbd.jpeg?w=674&dpr=1.0"
                        },
                        {
                            "id": "003",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/30\/vayanada-ma-bhasakhalna_34d1ee5d9402ed8270a5ecb3b63f195a.jpeg?w=674&dpr=1.0"
                        }
                    ]
                },
                {
                    "id": "4",
                    "city": "mumbai",
                    "city_hn": "मुंबई",
                    "temprature": "25.6",
                    "rise": "06:00 AM",
                    "set": "06:00 PM",
                    "weather": "Sunny",
                    "date": "30 Jul 2024",
                    "dataItem": [
                        {
                            "id": "001",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/30\/shreyasi-singh-olympics-paris-2024_c35372f5e012841582966736b5a41231.jpeg?w=674&dpr=1.0"
                        },
                        {
                            "id": "002",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/30\/madhubani-news-madhushravani-dali-decoration-competition-organized-in-mithila-haat-sakshi-jha-won_e4d6f38f6037c68d4a4b2234f4054db1.jpeg?w=674&dpr=1.0"
                        },
                        {
                            "id": "003",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/28\/manu-bhaker-shooting-final-paris-olympics-live-upd-manu-bhaker-news-manu-bhaker-shooting-manu-bha_1a4ffa8eaf779ad67f5a63f9feaae65f.jpeg?w=674&dpr=1.0"
                        }
                    ]
                },
                {
                    "id": "1",
                    "city": "pune",
                    "city_hn": "पुणे",
                    "temprature": "26.6",
                    "rise": "06:00 AM",
                    "set": "06:00 PM",
                    "weather": "Sunny",
                    "date": "30 Jul 2024",
                    "dataItem": [
                        {
                            "id": "001",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        },
                        {
                            "id": "002",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        },
                        {
                            "id": "003",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        }
                    ]
                },
                {
                    "id": "1",
                    "city": "meerut",
                    "city_hn": "मेरठ",
                    "temprature": "27.6",
                    "rise": "06:00 AM",
                    "set": "06:00 PM",
                    "weather": "Sunny",
                    "date": "30 Jul 2024",
                    "dataItem": [
                        {
                            "id": "001",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        },
                        {
                            "id": "002",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        },
                        {
                            "id": "003",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        }
                    ]
                },
                {
                    "id": "1",
                    "city": "lucknow",
                    "city_hn": "लखनऊ",
                    "temprature": "28.6",
                    "rise": "06:00 AM",
                    "set": "06:00 PM",
                    "weather": "Sunny",
                    "date": "30 Jul 2024",
                    "dataItem": [
                        {
                            "id": "001",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        },
                        {
                            "id": "002",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        },
                        {
                            "id": "003",
                            "type": "weather",
                            "title": "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
                            "sub_title": "टैकनोलजी खबर",
                            "date": "23 Apr 2024",
                            "category": "Technology",
                            "category_id": "12",
                            "image_type": "big",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        }
                    ]
                }
            ]
        },
        {
            "component_name": "special_coverage",
            "component_id": "17",
            "type": "Video",
            "category_name": "Special Coverage",
            "category_id": "12",
            "category_icon": "",
            "title": "विशेष कवरेज",
            "priority": 18,
            "dataItem": [
                {
                    "id": "001",
                    "type": "Video",
                    "title": "17 वर्षीय ग्रैंडमास्टर डी गुकेश ने कैंडिडेट्स शतरंज टूर्नामेंट जीता, जिससे वह सबसे कम उम्र के विश्व शतरंज चैंपियनशिप चैलेंजर बने",
                    "sub_title": "टैकनोलजी खबर",
                    "date": "23 Apr 2024",
                    "category": "Technology",
                    "category_id": "12",
                    "image_type": "big",
                    "button_title": "हमारा कवरेज देखें",
                    "duratuin": "06:30",
                    "icon": "",
                    "image": "https:\/\/pbs.twimg.com\/media\/GLup1oLWkAASw9u.jpg",
                    "extra_coverage": "अधिक कवरेज"
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
                            "duratuin": "06:30",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/14\/whatsapp_78050575dc02ba95487e3192c6498f79.jpeg"
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
                            "duratuin": "08:30",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/05\/16\/use-of-ai-in-office_139f34ed8f913b03f65d8d0e16cfd43d.jpeg"
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
                            "duratuin": "02:30",
                            "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg"
                        }
                    ]
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
            "component_name": "else",
            "component_id": "0",
            "type": "Text",
            "category_name": "Top Head lines",
            "category_id": "13",
            "category_icon": "",
            "title": "शीर्ष सुर्खियाँ",
            "priority": 100,
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
  