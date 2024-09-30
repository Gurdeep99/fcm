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
          component_name: "AaamneSamneScreen",
          component_id: "1",
          title_small: "DGP जेल की निर्मम हत्या",
          title:
            "कांच की बोतल से रेत डाला लोहिया का गला, आतंकी संगठन TRF ने ली जिम्मेदारी",
          image:
            "https://staticimg.amarujala.com/assets/images/2024/07/22/parliament-monsoon-session-live_6b559304d548c6b9a1daaad0c9479bc8.jpeg",
          priority: 0,
          dataItem: [
            {
              id: "01",
              title: "टैकनोलजी",
              itemList: [
                {
                  id: "01",
                  image:
                    "https://staticimg.amarujala.com/assets/images/2024/08/05/bgalthasha-ma-hasa-oura-paema-shakha-hasana_195decd14b20d90b50f876d3bd269331.jpeg?w=674&dpr=1.0",
                  title:
                    "Bangladesh: बांग्लादेश में बिगड़ते हालात को देखते हुए PM हसीना ने देश छोड़ा; पद से दे सकती हैं इस्तीफा",
                  category: "वर्ल्ड डेस्क",
                },
                {
                  id: "02",
                  image:
                    "https://staticimg.amarujala.com/assets/images/2024/07/20/bangladesh-protest_58cc439d21b2a12df35b4760446d9217.jpeg?w=674&dpr=1.0",
                  title:
                    "Bangladesh Protests: हिंसा भड़कने से बांग्लादेश में अब तक कम से कम 300 लोगों की मौत, पूरे देश में लगा कर्फ्यू",
                  category: "वर्ल्ड डेस्क",
                },
              ],
            },
            {
              id: "02",
              title: "नापाक हरकत",
              itemList: [
                {
                  id: "01",
                  image:
                    "https://staticimg.amarujala.com/assets/images/2024/08/05/bgalthasha-ma-hasa-oura-paema-shakha-hasana_195decd14b20d90b50f876d3bd269331.jpeg?w=674&dpr=1.0",
                  title:
                    "Bangladesh: बांग्लादेश में बिगड़ते हालात को देखते हुए PM हसीना ने देश छोड़ा; पद से दे सकती हैं इस्तीफा",
                  category: "वर्ल्ड डेस्क",
                },
                {
                  id: "02",
                  image:
                    "https://staticimg.amarujala.com/assets/images/2024/07/20/bangladesh-protest_58cc439d21b2a12df35b4760446d9217.jpeg?w=674&dpr=1.0",
                  title:
                    "Bangladesh Protests: हिंसा भड़कने से बांग्लादेश में अब तक कम से कम 300 लोगों की मौत, पूरे देश में लगा कर्फ्यू",
                  category: "वर्ल्ड डेस्क",
                },
              ],
            },
          ],
        },
        {
          component_name: "video_story",
          component_id: "2",
          type: "Video",
          category_name: "Technology",
          category_id: "12",
          category_icon: "",
          icon: "EducationIcon",
          title: "टैकनोलजी",
          priority: 2,
          dataItem: [
            {
              id: "001",
              type: "Video",
              title:
                "भारत डेटा और एआई उपनिवेशवाद का भय पैदा किए बिना तकनीकी लक्ष्य हासिल कर सकता है",
              sub_title: "टैकनोलजी खबर",
              date: "23 Apr 2024",
              category: "Technology",
              category_id: "12",
              image_type: "big",
              image:
                "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg",
            },
            {
              itemList: [
                {
                  id: "002",
                  type: "Video",
                  title:
                    "घरेलू इंडस ऐपस्टोर डिवाइस में पहले से इंस्टॉल आ सकता है, एचपीई, डैनफॉस ग्रीन डेटा सेंटर लाएंगे, और भी बहुत कुछ",
                  sub_title: "टैकनोलजी खबर",
                  date: "23 Apr 2024",
                  category: "Technology",
                  category_id: "12",
                  image_type: "small",
                  image:
                    "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/14\/whatsapp_78050575dc02ba95487e3192c6498f79.jpeg",
                },
                {
                  id: "003",
                  type: "Video",
                  title:
                    "अमेज़न बातचीत के लिए AI-संचालित एलेक्सा सेवा के लिए मासिक सदस्यता पर विचार कर रहा है",
                  sub_title: "टैकनोलजी खबर",
                  date: "23 Apr 2024",
                  category: "Technology",
                  category_id: "12",
                  image_type: "small",
                  image:
                    "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/05\/16\/use-of-ai-in-office_139f34ed8f913b03f65d8d0e16cfd43d.jpeg",
                },
                {
                  id: "004",
                  type: "Video",
                  title:
                    "पॉकेट एफएम, इलेवनलैब्स ने एआई ऑडियो क्षमता लॉन्च की, रियलमी बड्स एयर 6 प्रो लॉन्च, और भी बहुत कुछ",
                  sub_title: "टैकनोलजी खबर",
                  date: "23 Apr 2024",
                  category: "Technology",
                  category_id: "12",
                  image_type: "small",
                  image:
                    "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/07\/08\/ai_5b09a9da92683f13c3d02d2d729aca22.jpeg",
                },
              ],
            },
          ],
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
  