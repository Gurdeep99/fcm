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
