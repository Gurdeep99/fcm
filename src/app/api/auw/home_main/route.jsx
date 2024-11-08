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
        component_name: "cricket_score",
        type: "Text",
        category_name: "क्रिकेट कवरेज",
        category_id: "13",
        category_icon: "",
        title: "क्रिकेट कवरेज",
        priority: 10,
      },
      // {
      //   component_name: "webview",
      //   component_id: "1",
      //   id: "001",
      //   web_url:
      //     "https://spiderstage.amarujala.com/election-live-results-widget?client=dailyhunt?client=android",
      // },
      {
        component_name: "story",
        component_id: "6",
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
        component_name: "story",
        component_id: "6",
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
        component_name: "story",
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
        component_name: "story",
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
        component_name: "story",
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
      {
        component_name: "story",
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
        component_name: "story",
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
      {
        component_name: "short_video",
        type: "Text",
        category_name: "Short Videos",
        category_id: "13",
        category_icon: "",
        title: "वीडियो शॉट्स",
        priority: 8,
      },
      {
        component_name: "story",
        id: "0090",
        headerTitle: "",
        type: "Video",
        isLive: false,
        title:
          "Kerala: वायनाड लोकसभा उपचुनाव के लिए नामांकन दाखिल करने रवाना हुईं प्रियंका, रोड शो में राहुल गांधी भी साथ",
        sub_title: "India News",
        date: "19 Oct 2024",
        category: "India News",
        category_id: "12",
        image_type: "big",
        isPremium: false,
        web_url:
          "https://www.amarujala.com/india-news/wayanad-lok-sabha-bye-election-congress-leader-priyanka-gandhi-nomination-news-in-hindi-2024-10-23",
        image:
          "https://staticimg.amarujala.com/assets/images/2024/10/23/priyanka-gandhi-vadra_f9092f5a750b50c9075267d8f5473193.jpeg",
      },
      {
        component_name: "story",
        id: "0091",
        headerTitle: "",
        type: "Video",
        isLive: false,
        title:
          "Urmila Matondkar: तलाक की खबरों के बीच बगैर वेडिंग रिंग के स्पॉट हुईं उर्मिला, लोगों ने दिया 'क्वीन' का टैग",
        sub_title: "एंटरटेनमेंट ",
        date: "19 Oct 2024",
        category: "Entertainment",
        category_id: "12",
        image_type: "big",
        isPremium: false,
        web_url:
          "https://www.amarujala.com/photo-gallery/entertainment/urmila-matondkar-made-a-rare-appearance-in-event-without-wedding-ring-amid-reports-of-divorce-2024-10-22",
        image:
          "https://staticimg.amarujala.com/assets/images/2024/10/22/uramal-matadakara_cd6c82ea516ce520f5b2c7f71ca09c2a.jpeg",
      },
      {
        component_name: "story",
        id: "0092",
        headerTitle: "",
        isLive: false,
        type: "Video",
        title:
          "Israel Iran War: PM नेतन्याहू ने ईरान पर हमले का ब्लू प्रिंट तैयार किया,इस बार किसी को कुछ नहीं पता",
        sub_title: "इंडिअन न्यूज़",
        date: "23 Oct 2024",
        category: "India News",
        category_id: "12",
        image_type: "big",
        isPremium: false,
        web_url:
          "https://www.amarujala.com/video/india-news/israel-iran-war-pm-netanyahu-prepared-a-blue-print-of-attack-on-iran-this-time-no-one-knows-anything-2024-10-22",
        image:
          "https://staticimg.amarujala.com/assets/images/2024/10/22/israel-iran-war-pm-natanayaha-na-iirana-para-hamal-ka-bl-parata-tayara-kayaisa-bra-kasa-ka-kachha-naha-pata_b0eab4a72e7658dc7b733fa97dcb3d6c.jpeg",
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
        component_name: "story",
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
        component_name: "story",
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
        component_name: "story",
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
        component_name: "story",
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
      {
        component_name: "story",
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
      {
        component_name: "video",
        id: "67192e5d736352519a05897c",
        tags: [""],
        title_hn:
          "VIDEO : विरासत मेले में चला हिंदुस्तानी गायन का जादू, अनोल चटर्जी के गीतों ने बांधा समां",
        youtube_id: "1T3EQyD",
        video_type: "auw_video",
        is_native_player: true,
        autoplay: true,
        category: {
          _id: "569ceb6dfdb34fe5330355ee",
          description: "City and states",
          full_slug: "city-and-states",
          is_featured: "no",
          parent_id: "569ceb6dfdb34fe5330355ee",
          slug: "city-and-states",
          status: "enable",
          title: "City & states",
          title_hn: "शहर और राज्य",
        },
        created_at: "2024-10-23 22:41:57",
        updated_at: "2024-10-23 22:41:57",
        slug: "video-hindustani-singing-magic-at-virasat-mela-anol-chatterjee-songs-enthralled-the-audience",
        image:
          "https://staticimg.amarujala.com/assets/images/original/default_500.png",
        full_slug:
          "video/dehradun/video-hindustani-singing-magic-at-virasat-mela-anol-chatterjee-songs-enthralled-the-audience",
        video_url:
          "https://d2570yern32wrv.cloudfront.net/uploaded_videos/hyperlocal_videos/2024/10/23/1T3EQyD.m3u8",
      },
      {
        component_name: "video",
        id: "671922533f1bc38b08003cc7",
        tags: [""],
        title_hn:
          "Delhi News:यमुना के प्रदूषण मामले पर CM आतिशी ने खोला मोर्चा, लगाया ये गंभीर आरोप!",
        youtube_id: "zPNyP73irPw",
        video_type: "youtube",
        is_native_player: false,
        autoplay: true,
        category: {
          _id: "56a87d4e1126f48f668b4567",
          description: "India News",
          full_slug: "india-news",
          is_featured: "yes",
          parent_id: "56a87d4e1126f48f668b4567",
          slug: "india-news",
          status: "enable",
          title: "India News",
          title_hn: "देश",
        },
        created_at: "2024-10-23 21:50:35",
        updated_at: "2024-10-23 21:50:35",
        slug: "delhi-news-cm-atishi-opened-front-on-yamuna-pollution-issue-made-this-serious-allegation-2024-10-23",
        image:
          " https://staticimg.amarujala.com/assets/images/2024/10/23/delhi-news_f09f955e6713f77f88bbce3fe87bf4ca.jpeg",
        full_slug:
          "video/india-news/delhi-news-cm-atishi-opened-front-on-yamuna-pollution-issue-made-this-serious-allegation-2024-10-23",
        video_url:
          "https://www.youtube.com/embed/zPNyP73irPw?rel=0&amp;autoplay=1",
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
