export async function GET(request) {
  // Define expected authentication headers
  //edit Rahul Singh

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
        component_name: "text_story",
        component_id: "6",
        type: "Text",
        category_name: "technology",
        category_id: "13",
        category_icon: "",
        title: "एतिहासिक महाकथाए",
        priority: 6,
        dataItem: [
          {
            id: "001",
            headerTitle: "",
            isLive: false,
            type: "Text",
            title:
              "Bengaluru: बंगलूरू हादसे में मृतकों का आंकड़ा पांच हुआ, डिप्टी CM बोले- अवैध निर्माण पर सख्त कार्रवाई करेंगे",
            sub_title: "India News",
            date: "23 Oct 2024",
            category: "India News",
            category_id: "12",
            image_type: "big",
            isPremium: false,
            web_url:
              "https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
            image:
              "https://staticimg.amarujala.com/assets/images/2024/10/23/bengaluru_3eaee2893e63363e4ca6c3547980b80f.jpeg",
          },
          {
            id: "002",
            headerTitle: "",
            isLive: false,
            type: "Video",
            title:
              "Kolkata Doctor Case: ममता सरकार ने डॉक्टरों की सुरक्षा के लिए टास्क फोर्स का किया गठन",
            sub_title: "India News",
            date: "23 Oct 2024",
            category: "India News",
            category_id: "12",
            isPremium: true,
            image_type: "big",
            web_url:
              "https://www.amarujala.com/video/india-news/kolkata-doctor-case-mamata-government-formed-task-force-for-the-safety-of-doctors-2024-10-23?src=&position=26",
            image:
              "https://staticimg.amarujala.com/assets/images/2024/10/23/kolkata-doctor-case_634c516063169c16065f31cda874a6fb.jpeg",
          },
          {
            itemList: [
              {
                id: "003",
                type: "Text",
                isLive: false,
                title:
                  "Mumbai: पॉक्सो मामले में बढ़ी एकता कपूर और उनकी मां की मुश्किलें, गुरुवार को मुंबई पुलिस के सामने होंगी पेश",
                sub_title: "India News",
                date: "23 Oct 2024",
                category: "India News",
                category_id: "12",
                image_type: "small",
                isPremium: false,
                web_url:
                  "https://www.amarujala.com/india-news/ekta-kapoor-and-her-mother-s-troubles-increase-in-pocso-case-will-appear-before-mumbai-police-on-thursday-2024-10-23",
                image:
                  "https://staticimg.amarujala.com/assets/images/2024/10/22/pocso-case-gandi-baat-ekta-kapoor-shobha-kapoor-gandi-baat-controversy_66f66c4aaac994cea442c0d99778f989.jpeg?w=160&dpr=2",
              },
              {
                id: "004",
                type: "Text",
                isLive: true,
                title:
                  "Jharkhand Elections: झामुमो ने 35 प्रत्याशियों की सूची जारी की, सीएम हेमंत सोरेन इस सीट से लड़ेंगे चुनाव",
                sub_title: "Election",
                date: "23 Oct 2024",
                category: "Election",
                category_id: "12",
                image_type: "small",
                isPremium: true,
                web_url:
                  "https://www.amarujala.com/election/jharkhand-assembly-elections-jmm-candidate-list-hemant-soren-and-other-leaders-seat-detail-in-hindi-2024-10-23",
                image:
                  "https://staticimg.amarujala.com/assets/images/2024/10/23/hemant-soren_20f127760162485d426e8df258f5ec17.jpeg",
              },
              {
                id: "005",
                type: "Text",
                isLive: false,
                title:
                  "Gujarat: अमेरिका भेजने के नाम पर 40 लाख रुपये से ज्यादा की ठगी, वीजा सलाहकार और उसके भाई पर मामला दर्ज",
                sub_title: "India News",
                date: "23 Apr 2024",
                category: "India News",
                isPremium: true,
                category_id: "12",
                image_type: "small",
                web_url:
                  "https://www.amarujala.com/india-news/visa-consultant-and-his-brother-cheated-of-more-than-rs-40-lakh-in-the-name-of-sending-to-america-case-regist-2024-10-23",

                image:
                  "https://staticimg.amarujala.com/assets/images/2024/04/17/answer-key_6d84b4b046b15bf258f47bccdd2db99d.jpeg",
              },
            ],
          },
          {
            id: "006",
            headerTitle: "लेटेस्ट वीडियो",
            type: "Video",
            isLive: false,
            title:
              "Baba Siddique News: मुंबई पुलिस ने बाबा की सुरक्षा में तैनात सिपाही को किया निलंबित, जानें क्यों।",
            sub_title: "India News",
            date: "19 Oct 2024",
            category: "India News",
            category_id: "12",
            image_type: "big",
            isPremium: false,
            web_url:
              "https://www.amarujala.com/india-news/ekta-kapoor-and-her-mother-s-troubles-increase-in-pocso-case-will-appear-before-mumbai-police-on-thursday-2024-10-23",
            image:
              "https://staticimg.amarujala.com/assets/images/2024/10/19/baba-siddique-news-mabii-palsa-na-bb-ka-sarakashha-ma-tanata-sapaha-ka-kaya-nalbta-jana-kaya_a6000443f86d8156d31596cfcb48ea63.jpeg",
          },
          {
            id: "007",
            headerTitle: "",
            type: "Video",
            isLive: false,
            title:
              "Jharkhand Assembly Election 2024: बिहार उप चुनाव के लिए NDA और 'INDIA' ने सीट शेयरिंग फाइनल किया।",
            sub_title: "India News",
            date: "19 Oct 2024",
            category: "India News",
            category_id: "12",
            image_type: "big",
            isPremium: false,
            web_url:
              "https://www.amarujala.com/video/india-news/jharkhand-assembly-election-2024-nda-and-india-finalize-seat-sharing-for-bihar-by-election-2024-10-19",
            image:
              "https://staticimg.amarujala.com/assets/images/2024/10/19/jharkhand-assembly-election-2024-bhara-upa-canava-ka-le-nda-oura-india-na-sata-shayaraga-fainal-kaya_fc3a17e08133761f4324fb43140d9b06.jpeg",
          },
        ],
      },
      {
        component_name: "short_video",
        component_id: "8",
        type: "Text",
        category_name: "Short Videos",
        category_id: "13",
        category_icon: "",
        title: "वीडियो शॉट्स",
        priority: 8,
      },
      {
        component_name: "text_story",
        component_id: "6",
        type: "Text",
        category_name: "technology",
        category_id: "13",
        category_icon: "",
        title: "एतिहासिक महाकथाए",
        priority: 6,
        dataItem: [
      {
        id: "0090",
        headerTitle: "",
        type: "Video",
        isLive: false,
        title: "Kerala: वायनाड लोकसभा उपचुनाव के लिए नामांकन दाखिल करने रवाना हुईं प्रियंका, रोड शो में राहुल गांधी भी साथ",
        sub_title: "India News",
        date: "19 Oct 2024",
        category: "India News",
        category_id: "12",
        image_type: "big",
        isPremium: false,
        web_url:"https://www.amarujala.com/india-news/wayanad-lok-sabha-bye-election-congress-leader-priyanka-gandhi-nomination-news-in-hindi-2024-10-23",
        image:"https://staticimg.amarujala.com/assets/images/2024/10/23/priyanka-gandhi-vadra_f9092f5a750b50c9075267d8f5473193.jpeg",
      }, {
        id: "0091",
        headerTitle: "",
        type: "Video",
        isLive: false,
        title: "Urmila Matondkar: तलाक की खबरों के बीच बगैर वेडिंग रिंग के स्पॉट हुईं उर्मिला, लोगों ने दिया 'क्वीन' का टैग",
        sub_title: "एंटरटेनमेंट ",
        date: "19 Oct 2024",
        category: "Entertainment",
        category_id: "12",
        image_type: "big",
        isPremium: false,
        web_url:"https://www.amarujala.com/photo-gallery/entertainment/urmila-matondkar-made-a-rare-appearance-in-event-without-wedding-ring-amid-reports-of-divorce-2024-10-22",
        image:"https://staticimg.amarujala.com/assets/images/2024/10/22/uramal-matadakara_cd6c82ea516ce520f5b2c7f71ca09c2a.jpeg",
      },{
        id: "0092",
        headerTitle: "",
        isLive: false,
        type: "Video",
        title:"Israel Iran War: PM नेतन्याहू ने ईरान पर हमले का ब्लू प्रिंट तैयार किया,इस बार किसी को कुछ नहीं पता",
        sub_title: "इंडिअन न्यूज़",
        date: "23 Oct 2024",
        category: "India News",
        category_id: "12",
        image_type: "big",
        isPremium: false,
        web_url: "https://www.amarujala.com/video/india-news/israel-iran-war-pm-netanyahu-prepared-a-blue-print-of-attack-on-iran-this-time-no-one-knows-anything-2024-10-22",
        image:"https://staticimg.amarujala.com/assets/images/2024/10/22/israel-iran-war-pm-natanayaha-na-iirana-para-hamal-ka-bl-parata-tayara-kayaisa-bra-kasa-ka-kachha-naha-pata_b0eab4a72e7658dc7b733fa97dcb3d6c.jpeg",
      },
        ]
      },
      {
        component_name: "short_video",
        component_id: "8",
        type: "Text",
        category_name: "Short Videos",
        category_id: "13",
        category_icon: "",
        title: "वेब स्टोरीज",
        priority: 8,
      },
      {
        component_name: "text_story",
        component_id: "6",
        type: "Text",
        category_name: "technology",
        category_id: "13",
        category_icon: "",
        title: "एतिहासिक महाकथाए",
        priority: 6,
        dataItem: [
         
          {
            itemList: [
              {
                id: "003",
                type: "Text",
                isLive: false,
                title:
                  "Mumbai: पॉक्सो मामले में बढ़ी एकता कपूर और उनकी मां की मुश्किलें, गुरुवार को मुंबई पुलिस के सामने होंगी पेश",
                sub_title: "India News",
                date: "23 Oct 2024",
                category: "India News",
                category_id: "12",
                image_type: "small",
                isPremium: false,
                web_url:
                  "https://www.amarujala.com/india-news/ekta-kapoor-and-her-mother-s-troubles-increase-in-pocso-case-will-appear-before-mumbai-police-on-thursday-2024-10-23",
                image:
                  "https://staticimg.amarujala.com/assets/images/2024/10/22/pocso-case-gandi-baat-ekta-kapoor-shobha-kapoor-gandi-baat-controversy_66f66c4aaac994cea442c0d99778f989.jpeg?w=160&dpr=2",
              },
              {
                id: "004",
                type: "Text",
                isLive: true,
                title:
                  "Jharkhand Elections: झामुमो ने 35 प्रत्याशियों की सूची जारी की, सीएम हेमंत सोरेन इस सीट से लड़ेंगे चुनाव",
                sub_title: "Election",
                date: "23 Oct 2024",
                category: "Election",
                category_id: "12",
                image_type: "small",
                isPremium: true,
                web_url:
                  "https://www.amarujala.com/election/jharkhand-assembly-elections-jmm-candidate-list-hemant-soren-and-other-leaders-seat-detail-in-hindi-2024-10-23",
                image:
                  "https://staticimg.amarujala.com/assets/images/2024/10/23/hemant-soren_20f127760162485d426e8df258f5ec17.jpeg",
              },
              {
                id: "005",
                type: "Text",
                isLive: false,
                title:
                  "HC: 'सरकार की रेवड़ी योजनाओं के खिलाफ याचिका देने वाले शख्स की सुरक्षा पर हो फैसला', पुलिस आयुक्त से हाईकोर्ट",
                sub_title: "India News",
                date: "23 Apr 2024",
                category: "India News",
                isPremium: true,
                category_id: "12",
                image_type: "small",
                web_url:
                  "https://www.amarujala.com/india-news/high-court-to-nagpur-top-cop-decide-on-protection-to-petitioner-against-freebie-schemes-of-government-2024-10-23",

                image:
                  "https://staticimg.amarujala.com/assets/images/2024/04/17/bombay-high-court_bcb18c708a5435b37ad7d52761f7e4cc.jpeg",
              },
              {
                id: "004",
                type: "Text",
                isLive: false,
                title:
                  "Maharashtra: 'शाम चार बजे आएगी MVA के सभी उम्मीदवारों की लिस्ट', राउत बोले- हम सत्ता पर कब्जा करने जा रहे",
                sub_title: "India News",
                date: "23 Oct 2024",
                category: "India News",
                category_id: "12",
                image_type: "small",
                isPremium: true,
                web_url:
                  "https://www.amarujala.com/india-news/maharashtra-election-sanjay-raut-said-mva-seat-sharing-candidate-list-release-today-we-want-to-hit-century-2024-10-23",
                image:
                  "https://staticimg.amarujala.com/assets/images/2024/07/18/shavasana-yabta-nata-sajaya-rauta_f34a51778a70f3d7fe4642fd8e670b9f.jpeg",
              },
            ],
          },
          {
            id: "004554",
            headerTitle: "",
            isLive: false,
            type: "Video",
            title:
              "Kolkata Doctor Case: ममता सरकार ने डॉक्टरों की सुरक्षा के लिए टास्क फोर्स का किया गठन",
            sub_title: "India News",
            date: "23 Oct 2024",
            category: "India News",
            category_id: "12",
            isPremium: true,
            image_type: "big",
            web_url:
              "https://www.amarujala.com/video/india-news/kolkata-doctor-case-mamata-government-formed-task-force-for-the-safety-of-doctors-2024-10-23?src=&position=26",
            image:
              "https://staticimg.amarujala.com/assets/images/2024/10/23/kolkata-doctor-case_634c516063169c16065f31cda874a6fb.jpeg",
          },
          
        ],
      }
      // {
      //   "component_name": "e_paper",
      //   "component_id": "5",
      //   "type": "Text",
      //   "category_name": "e-paper",
      //   "category_id": "13",
      //   "category_icon": "",
      //   "title": "पढ़ें अमर उजाला ई-पेपरर",
      //   "priority": 5,
      //   "dataItem": [
      //     {
      //       "id": "001",
      //       "type": "Text",
      //       "date": "25 July 2024",
      //       "category": "paper",
      //       "category_id": "12",
      //       "image_type": "paper",
      //       "page": "1",
      //       "image": "https://files.magzter.com/resize/magazine/1632498964/1674870857/view/3.jpg"
      //     },
      //     {
      //       "id": "002",
      //       "type": "Text",
      //       "date": "25 July 2024",
      //       "category": "paper",
      //       "category_id": "12",
      //       "image_type": "paper",
      //       "page": "2",
      //       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI61k_F3ZYeAjPl4E41ya-jeVO1MpJC8zhJA&s"
      //     },
      //     {
      //       "id": "003",
      //       "type": "Text",
      //       "date": "25 July 2024",
      //       "category": "paper",
      //       "category_id": "12",
      //       "image_type": "paper",
      //       "page": "3",
      //       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5EQlfH81-MPkHeFo_CQjdChD12QRoWi5xw&s"
      //     },
      //     {
      //       "id": "004",
      //       "type": "Text",
      //       "date": "25 July 2024",
      //       "category": "paper",
      //       "category_id": "12",
      //       "image_type": "paper",
      //       "page": "4",
      //       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OdDB1G5cwko2kWQ4n-zSiaSIU6w0iZIt3w&s"
      //     },
      //     {
      //       "id": "005",
      //       "type": "Text",
      //       "date": "25 July 2024",
      //       "category": "paper",
      //       "category_id": "12",
      //       "image_type": "paper",
      //       "page": "5",
      //       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5EQlfH81-MPkHeFo_CQjdChD12QRoWi5xw&s"
      //     }
      //   ]
      // },
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
      "Content-Type": "application/json",
    },
  });
}
