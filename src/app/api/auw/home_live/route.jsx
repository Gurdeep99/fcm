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
  const data ={
  "feedId": 3,
  "feedVersionId": 3,
  "userId": "123",
  "sessionId": "5c64c53c-a395-4017-a8e1-f2b907b35f8f",
  "pageId": "c08cd8c6-9777-4296-8b98-ce961aa33951",
  "pageNo": 1,
  "items": [
    {
      "componentId": 102,
      "content": {
        "id": "67159dca3d9cfecce70e9954",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-21T00:18:18.936",
        "categories": [
          10350,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "haryana/karnal/auto-passengers-cash-and-mobile-stolen-karnal-news-c-18-knl1008-503176-2024-10-21",
          "is_premium": null,
          "title_hn": "Karnal News: ऑटो में सवार व्यक्ति की नकदी, मोबाइल चोरी"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "671ab0f8dbc1a33504043a57",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-24T20:41:29.845",
        "categories": [
          10244,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "gorakhpur/gorakhpur-news-bomb-alert-given-in-14-flights-simultaneously-case-registered-gorakhpur-news-c-7-gkp1038-727109-2024-10-25",
          "is_premium": null,
          "title_hn": "Gorakhpur News: एक साथ 14 फ्लाइट में दी थी बम की सूचना, केस दर्ज"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "67154249eaa2fbf5e80e05fe",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-20T17:47:53.478",
        "categories": [
          10273,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttar-pradesh/sant-kabir-nagar/farmer-welfare-center-will-be-built-in-sunday-kala-gram-panchayat-khalilabad-news-c-209-1-sgkp1040-122544-2024-10-20",
          "is_premium": null,
          "title_hn": "Sant Kabir Nagar News: सांडे कला ग्राम पंचायत में बनेगा किसान कल्याण केंद्र"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "67142bac0c3687336f029ea4",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-19T21:59:08.332",
        "categories": [
          10298,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttarakhand/udham-singh-nagar/youth-activities-in-district-rudrapur-news-c-242-1-rdp1005-116391-2024-10-20",
          "is_premium": null,
          "title_hn": "Udham Singh Nagar News: एनसीसी के लेफ्टिनेंट बने आनंद भास्कर"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "67105b4084240da8450a85a4",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-17T00:33:08.91",
        "categories": [
          10359,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "haryana/yamuna-nagar/1730-rupees-and-mobile-phone-looted-from-vegetable-seller-at-knifepoint-yamuna-nagar-news-c-246-1-sknl1019-126985-2024-10-17",
          "is_premium": null,
          "title_hn": "Yamuna Nagar News: चाकू दिखाकर सब्जी विक्रेता से लूटे 1730 रुपये और मोबाइल"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "6716504ee66b19424407fc27",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-21T12:59:58.548",
        "categories": [
          10297,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttarakhand/tehri/ganga-river-system-is-the-nourisher-of-the-biodiversity-of-himalayas-prof-joshi-tehri-news-c-50-1-sdrn1016-109344-2024-10-21",
          "is_premium": null,
          "title_hn": "गंगा नदी तंत्र हिमालय की जैव-विविधता की पोषक है : प्रो. जोशी"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "6713aef02b9d322b44082ae6",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-19T13:06:56.729",
        "categories": [
          10307,
          10046
        ],
        "dataMap": {
          "image": " /4cplus/2024/10/19/dhakagava-patavarakhana-bhavana-ka-lkarapanae-karata-makhaya-sasathaya-sacava-mahana-ll-brakata_330e937aaecfbe366a256721818a0385.jpeg ",
          "full_slug": "himachal-pradesh/rampur-bushahar/dhakagaon-patwarkhana-building-inaugurated-rampur-hp-news-c-178-1-ssml1035-123428-2024-10-19",
          "is_premium": null,
          "title_hn": "Rampur Bushahar News: ढाकगांव पटवारखाना भवन का किया लोकार्पण"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "67154ba5411dc1fbd40b1ad4",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-20T18:27:49.198",
        "categories": [
          10258,
          10276,
          10046
        ],
        "dataMap": {
          "image": " /4cplus/2024/10/20/ikana-tahasal-ma-thharana-thata-bhakaya-karayakarata-savatha_9afabe4c17c66a78f6488fcef229b6ca.jpeg ",
          "full_slug": "lucknow/women-are-fasting-for-their-husbands-and-agitating-for-their-rights-shravasti-news-c-104-1-srv1002-107377-2024-10-20",
          "is_premium": null,
          "title_hn": "Lucknow News: सुहाग के लिए व्रत तो अधिकार के लिए आंदोलन कर रही महिलाएं"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "671bfe2ec3736191da0a9407",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-25T20:23:12.585",
        "categories": [
          10228,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttar-pradesh/bhadohi/officers-drama-in-electricity-corporation-office-video-goes-viral-bhadohi-news-c-191-1-gyn1003-118275-2024-10-26",
          "is_premium": null,
          "title_hn": "Bhadohi News: बिजली निगम के दफ्तर में अधिकारी का ड्रामा, वीडियो वायरल"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "671bf97aa5a4a13f800862e4",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-25T20:03:07.378",
        "categories": [
          10264,
          10046
        ],
        "dataMap": {
          "image": " /4cplus/2024/10/26/shamal-ma-bugdhhana-rada-para-chhaya-samaga-savatha_777a0be16855abc7c7e829d3cc81bc0c.jpeg ",
          "full_slug": "uttar-pradesh/meerut/shadow-smog-at-night-aqi-173-meerut-news-c-26-1-smrt1048-130718-2024-10-26",
          "is_premium": null,
          "title_hn": "Meerut News: रात में छाया स्मॉग, एक्यूआई 173"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "67165b11ea7044749c0b6992",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-21T13:45:53.201",
        "categories": [
          10303,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "himachal-pradesh/hamirpur-hp/rseti-will-teach-mushroom-cultivation-to-the-women-of-panyali-hamirpur-hp-news-c-94-1-hmp1005-138966-2024-10-21",
          "is_premium": null,
          "title_hn": "Hamirpur (Himachal) News: पनयाली की महिलाओं को मशरूम की खेती सिखाएगा आरसेटी"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "671575d5fd5abcf8860a3b64",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-20T21:27:49.83",
        "categories": [
          10274,
          10046
        ],
        "dataMap": {
          "image": " /4cplus/2024/10/21/mataka-ramathayal-ka-fail-fata_89caf50132cc31856b3d59c26a6a2e85.jpeg ",
          "full_slug": "uttar-pradesh/shahjahanpur/carpet-weaver-crushed-by-roadways-bus-dies-shahjahanpur-news-c-122-1-spn1003-129644-2024-10-21",
          "is_premium": null,
          "title_hn": "Shahjahanpur News: रोडवेज बस से कुचला कालीन बुनकर, मौत"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "671dc8935d1ae5f5b70a637b",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-27T04:58:59.3",
        "categories": [
          10101
        ],
        "dataMap": {
          "image": " /2024/10/27/stringer/1T4VkUI.png ",
          "full_slug": "kavya/mere-alfaz/ajit-singh-kaii-aana-ka-ha-2024-10-27",
          "is_premium": null,
          "title_hn": "कोई आने को है…..!!"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "6718155e15545f533406a607",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-22T21:13:05.461",
        "categories": [
          10360,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "chandigarh/central-government-asked-to-respond-on-31-ips-officers-appointed-on-excadre-posts-chandigarh-news-c-16-1-pkl1041-546039-2024-10-23",
          "is_premium": null,
          "title_hn": "Chandigarh News: एक्स कैडर पदों पर लगाए 31 आईपीएस अधिकारियों पर केंद्र सरकार से जवाब तलब"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "67156a3a9ec36ff77306c1c7",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-20T20:38:18.416",
        "categories": [
          10355,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "haryana/rewari/copper-ring-worth-rs-14-lakh-61-thousand-stolen-from-company-case-filed-against-two-rewari-news-c-198-1-fth1001-210764-2024-10-21",
          "is_premium": null,
          "title_hn": "Rewari News: कंपनी से 14 लाख 61 हजार रुपये का कॉपर रिंग चोरी, दो पर मुकदमा"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "6716bf065f0cd397e30f4093",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-21T20:56:24.027",
        "categories": [
          10081
        ],
        "dataMap": {
          "image": " /2024/10/19/kal-haranae-shakara-mamal-ma-2018-ma-jathhapara-pahaca-tha-salmana-khana_61a09bde4829a2cd84b6928e47615e62.jpeg ",
          "full_slug": "india-news/mumbai-the-person-who-threatened-to-kill-salman-khan-apologized-2024-10-22",
          "is_premium": false,
          "title_hn": "Mumbai: 'गलती से ऐसा हुआ', सलमान खान को जान से मारने की धमकी देने वाले शख्स ने मांगी माफी"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "671d735d60e54823530eaaf8",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-26T22:55:25.772",
        "categories": [
          10226,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttar-pradesh/bareilly/debate-on-extradition-of-charles-shobhraj-in-moot-court-bareilly-news-c-4-lko1064-510074-2024-10-27",
          "is_premium": null,
          "title_hn": "Bareilly News: मूट कोर्ट में चार्ल्स शोभराज के प्रत्यर्पण पर हुई बहस"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "6710db5188ff4e892c087e7e",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-17T10:11:12.372",
        "categories": [
          10101
        ],
        "dataMap": {
          "image": "",
          "full_slug": "kavya/mere-alfaz/deepak-narang-itna-nikhar-2024-10-17",
          "is_premium": false,
          "title_hn": "इतना निखर जाएगा"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "6716a2d5cde0db604d088824",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-21T18:52:05.093",
        "categories": [
          10273,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttar-pradesh/sant-kabir-nagar/viral-fever-changes-form-symptoms-like-dengue-khalilabad-news-c-209-1-sgkp1040-122588-2024-10-22",
          "is_premium": null,
          "title_hn": "Sant Kabir Nagar News: वायरल बुखार ने बदला स्वरूप, डेंगू जैसे मिल रहे लक्षणा"
        }
      }
    },
    {
      "componentId": 101,
      "content": {
        "id": "670ed9656cd1dee53902f734",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-15T21:06:45.497",
        "categories": [
          10250,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttar-pradesh/jaunpur/three-kilometer-road-has-not-been-repaired-for-10-years-jaunpur-news-c-193-1-jon1003-123531-2024-10-16",
          "is_premium": null,
          "title_hn": "Jaunpur News: 10 साल से तीन किमी मार्ग की नहीं हुई मरम्मत"
        }
      }
    },
    {
      "componentId": 102,
      "content": {
        "id": "6715384758c0d01f02034e73",
        "propertyId": "57398d264f1c1b0016ac7a02",
        "type": "story",
        "dateModified": "2024-10-20T17:05:11.079",
        "categories": [
          10215,
          10046
        ],
        "dataMap": {
          "image": "",
          "full_slug": "uttar-pradesh/ambedkar-nagar/when-will-the-portal-be-operational-one-lakh-workers-are-waiting-ambedkar-nagar-news-c-91-1-slko1001-123172-2024-10-20",
          "is_premium": null,
          "title_hn": "Ambedkar Nagar News: कब चलेगा पोर्टल, इंतजार में हैं एक लाख श्रमिक"
        }
      }
    }
  ]
};

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
