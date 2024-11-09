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
    "feedId": 0,
    "feedVersionId": 0,
    "userId": "123",
    "sessionId": "8a8245b8-4ae1-42f2-91bd-c1dbb853afd5",
    "pageId": "8bf34e59-427d-4a8f-a9e4-b4cccba8e32d",
    "pageNo": 1,
    "items": [
      {
        "componentId": 102,
        "content": {
          "id": "671e96ed51d073d2c6090084",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-27T19:39:30.829",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "delhi-ncr/faridabad/work-on-doubling-sohna-road-will-begin-soon-moolchand-sharma-faridabad-news-c-26-1-del1005-32833-2024-10-28",
            "image": "",
            "is_premium": null,
            "title_hn": "सोहना रोड को डबल बनाने का काम जल्द होगा शुरू: मूलचंद शर्मा"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "6713fcc2f4fa9f28b90cc28a",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-19T18:38:58.415",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "lucknow/jamiat-delegation-going-to-bahraich-to-meet-riot-victims-detained-by-police-2024-10-20",
            "image": " /2024/10/20/lucknow_80e68060f490157e35062e51690ea726.jpeg ",
            "is_premium": false,
            "title_hn": "Lucknow: दंगा पीड़ितों से मुलाकात के लिए बहराइच जा रहे जमीयत के प्रतिनिधिमंडल को पुलिस ने हिरासत में लिया"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "671810441363cb0f68022d15",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-22T20:51:19.521",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "haryana/yamuna-nagar/farmers-took-to-the-streets-in-protest-against-filing-of-fir-yamuna-nagar-news-c-246-1-sknl1023-127330-2024-10-23",
            "image": "",
            "is_premium": null,
            "title_hn": "Yamuna Nagar News: एफआईआर दर्ज करने के विरोध में सड़क पर उतरे किसान"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "6710723806f9a06c4901beba",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-17T02:11:10.397",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "entertainment/hollywood/one-direction-fame-singer-liam-payne-passes-away-lost-his-life-after-falling-from-third-floor-of-the-hotel-2024-10-17",
            "image": " /2024/10/17/one-direction-liam-payne-liam-payne-death-liam-payne-dies-liam-payne-passes-away_5779a632164604af0ed3a7364cafa95c.jpeg ",
            "is_premium": false,
            "title_hn": "Liam Payne Dies: 'वन डायरेक्शन' फेम गायक लियाम पायने का निधन, होटल की तीसरी मंजिल से गिरने से गई जान"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "67169e2010b307426f0b2a4e",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-21T18:32:00.627",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/hardoi/shortcomings-took-away-the-blessings-of-ayushman-bhava-from-40-thousand-people-hardoi-news-c-213-1-sknp1042-121451-2024-10-22",
            "image": "",
            "is_premium": null,
            "title_hn": "Hardoi News: कमियों ने 40 हजार से छीन लिया आयुष्मान भव का आशीर्वाद"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "671c59316cdd6bd9c7088a68",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-27T17:10:01.36",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "kavya/mere-alfaz/prem-narayan-halaat-e-badnaseebi-2024-10-26",
            "image": "",
            "is_premium": false,
            "title_hn": "हालात ए बदनसीबी"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "6716cfedf4d94430da087b44",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-21T22:04:29.343",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/sitapur/police-filed-a-case-for-obscene-dance-on-ramlila-stage-in-sitapur-sitapur-news-c-13-1-lko1022-923477-2024-10-22",
            "image": "",
            "is_premium": null,
            "title_hn": "Sitapur News: सीतापुर में रामलीला मंच पर अश्लील नृत्य कराने पर पुलिस ने दर्ज किया मुकदमा"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "6712b24eddf0b65ae003ee74",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-18T19:09:02.165",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/fatehpur/villagers-did-not-come-forward-for-the-last-rites-of-the-couple-fatehpur-news-c-217-1-sknp1022-123061-2024-10-19",
            "image": "",
            "is_premium": null,
            "title_hn": "Fatehpur News: दंपती के अंतिम संस्कार के लिए आगे नहीं आए ग्रामीण"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "67182fbc8c63d849440b3016",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-22T23:05:53.475",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "haryana/panipat/lack-of-blood-in-the-veins-of-57-percent-people-of-the-district-panipat-news-c-244-1-pnp1003-126218-2024-10-23",
            "image": "",
            "is_premium": null,
            "title_hn": "Panipat News: जिले के 57 प्रतिशत लोगों की रगों में खून की कमी"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "67140f18d9b03bd0040fa7f5",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-19T19:57:12.965",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/basti/two-dj-sessions-operators-of-both-arrested-basti-news-c-207-1-sgkp1006-125917-2024-10-20",
            "image": "",
            "is_premium": null,
            "title_hn": "Basti News: दो डीजे सीज, दोनों के संचालक गिरफ्तार"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "6717f15331d853a7db0abafd",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-22T18:39:15.623",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/rampur/educational-calendar-of-sports-released-in-council-schools-district-competition-from-13th-rampur-news-c-282-1-rmp1004-132566-2024-10-23",
            "image": "",
            "is_premium": null,
            "title_hn": "Rampur News: परिषदीय स्कूलों में  खेलकूद का शैक्षिक कैलेंडर जारी, जनपदीय प्रतियोगिता 13 से"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "67154a5809041f6e4e0c4546",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-20T18:22:16.951",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "haryana/mahendragarh-narnaul/20-tola-gold-and-3-kg-silver-stolen-from-house-in-village-khedi-talwana-narnol-news-c-203-1-sroh1011-112836-2024-10-20",
            "image": "",
            "is_premium": null,
            "title_hn": "Mahendragarh-Narnaul News: गांव खेड़ी तलवाना में घर से 20 तोला सोना और 3 किलो चांदी चोरी"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "670ecc44f42a535b2b012903",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-15T20:10:44.936",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "delhi-ncr/faridabad/municipal-commissioner-handed-over-ownership-papers-to-shopkeepers-faridabad-news-c-26-1-gnd1001-32326-2024-10-16",
            "image": "",
            "is_premium": null,
            "title_hn": "Faridabad News: निगमायुक्त ने दुकानदारों को सौंपे मालिकाना हक के कागज"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "671434179f6318b10c07f584",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-19T22:35:03.483",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/budaun/saved-the-girl-from-the-monkey-then-became-a-beast-himself-badaun-news-c-4-1-knp1006-505282-2024-10-20",
            "image": "",
            "is_premium": null,
            "title_hn": "Budaun News: बच्ची को बंदर से बचाया, फिर खुद बन गया हैवान"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "6714045a4ef11cdcf50743c4",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-19T19:11:22.29",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/bijnor/farmers-should-not-be-harmed-at-any-level-yadav-bijnor-news-c-27-1-smrt1025-133905-2024-10-20",
            "image": "",
            "is_premium": null,
            "title_hn": "किसी स्तर पर भी किसानों का नहीं होना चाहिए अहित : यादव"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "671aa4c3b7f69c42aa0fe685",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-24T19:49:27.566",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/azamgarh/50-quintals-of-khoya-and-fake-sweets-seized-12-arrested-azamgarh-news-c-258-1-svns1001-122419-2024-10-25",
            "image": "",
            "is_premium": null,
            "title_hn": "Azamgarh News: 50 क्विंटल खोवा और नकली मिठाइयां पकड़ी, 12 गिरफ्तार"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "6715496c8213b542ba0ac2d3",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-20T18:18:20.316",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/muzaffarnagar/bsp-did-not-change-the-tables-shah-will-contest-the-election-muzaffarnagar-news-c-29-1-mng1001-132436-2024-10-20",
            "image": "",
            "is_premium": null,
            "title_hn": "Muzaffarnagar News: बसपा ने नहीं बदला पासा, शाह नजर लड़ेंगे चुनाव"
          }
        }
      },
      {
        "componentId": 101,
        "content": {
          "id": "670a9dc4cc3867fff30aee91",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-15T19:32:23.113",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "kavya/mere-alfaz/sonu-sagar-if-you-want-to-healthy-the-environment-2024-10-12",
            "image": "",
            "is_premium": false,
            "title_hn": "अगर रखना है पर्यावरण को स्वस्थ"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "671104e31b0ace0c880ce094",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-17T12:36:51.501",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "madhya-pradesh/umaria/sand-contractors-are-not-following-ngt-rules-umaria-news-c-1-1-noi1225-2224027-2024-10-17",
            "image": " /4cplus/2024/10/17/enajata-ka-nayama-ka-naha-palna-kara-raha-ha-rata-ka-thakathara_e1bfbdd26a51a7fc1fd5c5e9b4b41cf8.jpeg ",
            "is_premium": null,
            "title_hn": "Umaria News: एनजीटी के नियमों का नहीं पालन कर रहे हैं रेत के ठेकेदार"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "67105152442fb7f1560fdfb7",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-16T23:50:42.098",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "gorakhpur/gorakhpur-news-corporations-bulldozer-hits-three-shops-in-naushad-gorakhpur-news-c-7-gkp1038-718591-2024-10-17",
            "image": "",
            "is_premium": null,
            "title_hn": "Gorakhpur News: नौसड़ में तीन दुकानों पर चला निगम का बुलडोजर"
          }
        }
      },
      {
        "componentId": 102,
        "content": {
          "id": "6712ba4f38341b012f0afd04",
          "propertyId": "57398d264f1c1b0016ac7a02",
          "type": "story",
          "dateModified": "2024-10-18T19:43:11.088",
          "categories": [
            
          ],
          "dataMap": {
            "full_slug": "uttar-pradesh/rampur/women-busy-preparing-for-karva-chauth-crowd-increased-in-shops-rampur-news-c-282-1-rmp1001-132235-2024-10-19",
            "image": "",
            "is_premium": null,
            "title_hn": "Rampur News: करवाचौथ की तैयारी में जुटीं महिलाएं, दुकानों में बढ़ी भीड़"
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
