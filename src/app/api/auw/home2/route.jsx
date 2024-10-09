export async function GET(request) {
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

  // API data if authentication succeeds
  const data = {
    home: [
      {
        home: [
          {
            component_name: "AaamneSamneScreen",
            component_id: "1",
            title_small: "DGP जेल की निर्मम हत्या",
            title: "कांच की बोतल से रेत डाला लोहिया का गला, आतंकी संगठन TRF ने ली जिम्मेदारी",
            image: "https://staticimg.amarujala.com/assets/images/2024/07/22/parliament-monsoon-session-live_6b559304d548c6b9a1daaad0c9479bc8.jpeg",
            priority: 0,
            dataItem: [
              {
                id: "01",
                title: "चुनाव परिणाम",
                itemList: [
                  {
                    id: "01",
                    image: "https://staticimg.amarujala.com/assets/images/2024/10/09/haryana-election_724903097796460902bbace48a2956b8.jpeg?w=200&dpr=1.0",
                    title: "Haryana Result: चौधर की सियासत को अलविदा... चेहरे पर दांव कामयाब; बांगड़ की चौधर खत्म कर रोहतक लाए थे हुड्डा",
                    category: "चुनाव",
                    city: "Rohtak",
                    web_url: "https://www.amarujala.com/haryana/rohtak/haryana-election-result-bhupendra-singh-hooda-deependra-singh-news-in-hindi-2024-10-09?src=aamnesaamne&position=1&client=android",
                  },
                  {
                    id: "02",
                    image: "https://staticimg.amarujala.com/assets/images/2024/10/09/haryana-election_724903097796460902bbace48a2956b8.jpeg?w=200&dpr=1.0",
                    title: "Haryana Result: चौधर की सियासत को अलविदा... चेहरे पर दांव कामयाब; बांगड़ की चौधर खत्म कर रोहतक लाए थे हुड्डा",
                    category: "चुनाव",
                    city: "Rohtak",
                    web_url: "https://www.amarujala.com/haryana/rohtak/haryana-election-result-bhupendra-singh-hooda-deependra-singh-news-in-hindi-2024-10-09?src=aamnesaamne&position=1&client=android",
                  },
                ],
              },
              {
                id: "02",
                title: "बयानबाजी",
                itemList: [
                  {
                    id: "01",
                    image: "https://staticimg.amarujala.com/assets/images/2024/10/09/rahul-gandhi_15374c16b0368e44bffb96fe2bc436ec.jpeg?w=200&dpr=1.0",
                    title: "Rahul Gandhi: राहुल बोले- जम्मू-कश्मीर के लोगों का शुक्रिया, हरियाणा के अप्रत्याशित नतीजे का विश्लेषण कर रहे",
                    category: "चुनाव",
                    city: "India News",
                    web_url: "https://www.amarujala.com/india-news/rahul-gandhi-said-thanks-to-the-people-of-jammu-and-kashmir-analyzing-the-unexpected-result-of-haryana-2024-10-09?src=aamnesaamne&position=2&client=android",
                  },
                  {
                    id: "02",
                    image: "https://staticimg.amarujala.com/assets/images/2024/10/09/rahul-gandhi_15374c16b0368e44bffb96fe2bc436ec.jpeg?w=200&dpr=1.0",
                    title: "Rahul Gandhi: राहुल बोले- जम्मू-कश्मीर के लोगों का शुक्रिया, हरियाणा के अप्रत्याशित नतीजे का विश्लेषण कर रहे",
                    category: "चुनाव",
                    city: "India News",
                    web_url: "https://www.amarujala.com/india-news/rahul-gandhi-said-thanks-to-the-people-of-jammu-and-kashmir-analyzing-the-unexpected-result-of-haryana-2024-10-09?src=aamnesaamne&position=2&client=android",
                  },
                ],
              },
            ],
          },
          {
            component_name: "e_paper",
            component_id: "5",
            type: "Text",
            category_name: "e-paper",
            category_id: "13",
            category_icon: "",
            title: "पढ़ें अमर उजाला ई-पेपरर",
            priority: 5,
            dataItem: [
              {
                id: "001",
                type: "Text",
                date: "25 July 2024",
                category: "paper",
                category_id: "12",
                image_type: "paper",
                page: "1",
                image: "https://files.magzter.com/resize/magazine/1632498964/1674870857/view/3.jpg",
              },
              {
                id: "002",
                type: "Text",
                date: "25 July 2024",
                category: "paper",
                category_id: "12",
                image_type: "paper",
                page: "2",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI61k_F3ZYeAjPl4E41ya-jeVO1MpJC8zhJA&s",
              },
              {
                id: "003",
                type: "Text",
                date: "25 July 2024",
                category: "paper",
                category_id: "12",
                image_type: "paper",
                page: "3",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5EQlfH81-MPkHeFo_CQjdChD12QRoWi5xw&s",
              },
              {
                id: "004",
                type: "Text",
                date: "25 July 2024",
                category: "paper",
                category_id: "12",
                image_type: "paper",
                page: "4",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OdDB1G5cwko2kWQ4n-zSiaSIU6w0iZIt3w&s",
              },
              {
                id: "005",
                type: "Text",
                date: "25 July 2024",
                category: "paper",
                category_id: "12",
                image_type: "paper",
                page: "5",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5EQlfH81-MPkHeFo_CQjdChD12QRoWi5xw&s",
              },
            ],
          },
          {
            component_name: "photo_story",
            component_id: "8",
            type: "Text",
            category_name: "Education",
            category_id: "13",
            category_icon: "",
            title: "वीडियो शॉट्स",
            priority: 8,
            dataItem: [
              {
                id: "001",
                category: "बॉलीवुड",
                title: "आर्थिक तंगी से उभरने पर रश्मिका मंदाना: मेरे दिल में, मैं अभी भी वह लड़की हूं जो एक खिलौना भी नहीं खरीद सकती थी",
                image: "https://i.pinimg.com/736x/16/e5/7b/16e57b8e64ec70a3a591195760f1e5b7.jpg",
              },
              {
                id: "002",
                category: "गायक",
                title: "दुआ लिपा द्वारा लिखित और अभिनीत नई ऑल-इलेक्ट्रिक पॉर्श मैकन फिल्म देखें",
                image: "https://www.billboard.com/wp-content/uploads/2024/02/02-dua-lipa-grammy-red-carpet-2024-billboard-1548.jpg?w=942&h=623&crop=1",
              },
              {
                id: "003",
                category: "हॉलीवुड",
                title: "रॉबर्ट डाउनी जूनियर का कहना है कि वह 'खुशी से' आयरन मैन के रूप में लौटेंगे: यह 'मेरे डीएनए का हिस्सा' है",
                image: "https://www.filmfare.com/photo/122132-rdj.jpg",
              },
              {
                id: "004",
                category: "बॉलीवुड",
                title: "अक्षय कुमार का कहना है कि हेरा फेरी 3 2024 में रिलीज़ होगी: मैं केवल तीन महीने के लिए काम कर रहा हूं",
                image: "https://staticimg.amarujala.com/assets/images/2024/10/09/hindi-cinema-2024_725003097796460902bbace48a2956b8.jpeg?w=200&dpr=1.0",
              },
              {
                id: "005",
                category: "फिल्में",
                title: "विद्या बालन की ‘शेरनी’ सीक्वल पर आएगा सस्पेंस",
                image: "https://staticimg.amarujala.com/assets/images/2024/10/09/hindi-cinema-2024_725003097796460902bbace48a2956b8.jpeg?w=200&dpr=1.0",
              },
            ],
          },
        ],
      },
    ],
  };

  // Return the data in JSON format
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
