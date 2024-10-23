export async function GET(request) {
    // Define expected authentication headers
    //edit Rahul Singh
  
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
      "home": [
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
                  "title": "Bengaluru: बंगलूरू हादसे में मृतकों का आंकड़ा पांच हुआ, डिप्टी CM बोले- अवैध निर्माण पर सख्त कार्रवाई करेंगे",
                  "sub_title": "India News",
                  "date": "23 Oct 2024",
                  "category": "India News",
                  "category_id": "12",
                  "image_type": "big",
                  "isPremium":false,
                  "web_url":"https://amarujala.com/india-news/karnataka-bengaluru-building-collapsed-death-count-increase-to-five-deputy-cm-warn-for-illegal-construction-2024-10-23",
                  "image": "https://staticimg.amarujala.com/assets/images/2024/10/23/bengaluru_3eaee2893e63363e4ca6c3547980b80f.jpeg"
              },
              {
                "id": "002",
                "type": "Video",
                "title": "Kolkata Doctor Case: ममता सरकार ने डॉक्टरों की सुरक्षा के लिए टास्क फोर्स का किया गठन",
                "sub_title": "India News",
                "date": "23 Oct 2024",
                "category": "India News",
                "category_id": "12",
                "isPremium":true,
                "image_type": "big",
                "web_url":"https://www.amarujala.com/video/india-news/kolkata-doctor-case-mamata-government-formed-task-force-for-the-safety-of-doctors-2024-10-23?src=&position=26",
                "image": "https://staticimg.amarujala.com/assets/images/2024/10/23/kolkata-doctor-case_634c516063169c16065f31cda874a6fb.jpeg"
            },
              {
                  "itemList": [
                      {
                          "id": "003",
                          "type": "Text",
                          "title": "Mumbai: पॉक्सो मामले में बढ़ी एकता कपूर और उनकी मां की मुश्किलें, गुरुवार को मुंबई पुलिस के सामने होंगी पेश",
                          "sub_title": "India News",
                          "date": "23 Oct 2024",
                          "category": "India News",
                          "category_id": "12",
                          "image_type": "small",
                          "isPremium":false,
                          "web_url":"https://www.amarujala.com/india-news/ekta-kapoor-and-her-mother-s-troubles-increase-in-pocso-case-will-appear-before-mumbai-police-on-thursday-2024-10-23",
                          "image": "https://staticimg.amarujala.com/assets/images/2024/10/22/pocso-case-gandi-baat-ekta-kapoor-shobha-kapoor-gandi-baat-controversy_66f66c4aaac994cea442c0d99778f989.jpeg?w=160&dpr=2"
                      },
                      {
                          "id": "004",
                          "type": "Text",
                          "title": "Jharkhand Elections: झामुमो ने 35 प्रत्याशियों की सूची जारी की, सीएम हेमंत सोरेन इस सीट से लड़ेंगे चुनाव",
                          "sub_title": "Election",
                          "date": "23 Oct 2024",
                          "category": "Election",
                          "category_id": "12",
                          "image_type": "small",
                          "isPremium":true,
                          "web_url":"https://www.amarujala.com/election/jharkhand-assembly-elections-jmm-candidate-list-hemant-soren-and-other-leaders-seat-detail-in-hindi-2024-10-23", 
                          "image": "https://staticimg.amarujala.com/assets/images/2024/10/23/hemant-soren_20f127760162485d426e8df258f5ec17.jpeg"
                      },
                      {
                          "id": "005",
                          "type": "Text",
                          "title": "Gujarat: अमेरिका भेजने के नाम पर 40 लाख रुपये से ज्यादा की ठगी, वीजा सलाहकार और उसके भाई पर मामला दर्ज",
                          "sub_title": "India News",
                          "date": "23 Apr 2024",
                          "category": "India News",
                          "isPremium":true,
                          "category_id": "12",
                          "image_type": "small",
                          "web_url":"https://www.amarujala.com/india-news/visa-consultant-and-his-brother-cheated-of-more-than-rs-40-lakh-in-the-name-of-sending-to-america-case-regist-2024-10-23",
                          
                          "image": "https:\/\/staticimg.amarujala.com\/assets\/images\/2024\/04\/17\/answer-key_6d84b4b046b15bf258f47bccdd2db99d.jpeg"
                      }
                  ]
              },
              {
                "id": "006",
                "type": "Video",
                "title": "Baba Siddique News: मुंबई पुलिस ने बाबा की सुरक्षा में तैनात सिपाही को किया निलंबित, जानें क्यों।",
                "sub_title": "India News",
                "date": "19 Oct 2024",
                "category": "India News",
                "category_id": "12",
                "image_type": "big",
                "isPremium":false,
                "web_url":"https://www.amarujala.com/india-news/ekta-kapoor-and-her-mother-s-troubles-increase-in-pocso-case-will-appear-before-mumbai-police-on-thursday-2024-10-23",
                          
                "image": "https://staticimg.amarujala.com/assets/images/2024/10/19/baba-siddique-news-mabii-palsa-na-bb-ka-sarakashha-ma-tanata-sapaha-ka-kaya-nalbta-jana-kaya_a6000443f86d8156d31596cfcb48ea63.jpeg"
            }
          ]
      },
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
        // {
        //   "component_name": "photo_story",
        //   "component_id": "8",
        //   "type": "Text",
        //   "category_name": "Education",
        //   "category_id": "13",
        //   "category_icon": "",
        //   "title": "वीडियो शॉट्स",
        //   "priority": 8,
        //   "dataItem": [
        //     {
        //       "id": "001",
        //       "category": "बॉलीवुड",
        //       "title": "आर्थिक तंगी से उभरने पर रश्मिका मंदाना: मेरे दिल में, मैं अभी भी वह लड़की हूं जो एक खिलौना भी नहीं खरीद सकती थी",
        //       "image": "https://i.pinimg.com/736x/16/e5/7b/16e57b8e64ec70a3a591195760f1e5b7.jpg"
        //     },
        //     {
        //       "id": "002",
        //       "category": "गायक",
        //       "title": "दुआ लिपा द्वारा लिखित और अभिनीत नई ऑल-इलेक्ट्रिक पॉर्श मैकन फिल्म देखें",
        //       "image": "https://www.billboard.com/wp-content/uploads/2024/02/02-dua-lipa-grammy-red-carpet-2024-billboard-1548.jpg"
        //     },
        //     {
        //       "id": "003",
        //       "category": "हॉलीवुड",
        //       "title": "रॉबर्ट डाउनी जूनियर का कहना है कि वह 'खुशी से' आयरन मैन के रूप में लौटेंगे: यह 'मेरे डीएनए का हिस्सा' है",
        //       "image": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/11/USAT/72926919007-xxx-oscars-2024-dm-1824.jpg"
        //     },
        //     {
        //       "id": "004",
        //       "category": "बॉलीवुड",
        //       "title": "बैड न्यूज़ बॉक्स ऑफिस कलेक्शन दिन 6: विक्की कौशल, तृप्ति डिमरी की फिल्म ने भारत में अब तक ₹40 करोड़ से अधिक की कमाई की",
        //       "image": "https://images.filmibeat.com/img/popcorn/profile_photos/vicky-kaushal-20230118154654-35139.jpg"
        //     }
        //   ]
        // }
      ],
      "metadata": {
        "id": "668f9d84acd3cb34a86477ad",
        "private": false,
        "createdAt": "2024-07-11T08:53:24.732Z",
        "name": "HomePage",
        "name_hn": ""
      }
    }
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
