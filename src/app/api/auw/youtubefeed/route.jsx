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
    "feedId": 1917,
    "feedVersionId": 1916,
    "userId": "424342332325235",
    "sessionId": "c8fa5b54-6b31-4ea3-8a74-1c5622676620",
    "pageId": "bbfd4b4c-c42c-41c7-8c8a-9efb099563e8",
    "pageNo": 1,
    "items": [
        {
            "position": 1,
            "componentId": 108,
            "content": {
                "id": "674dad920b7eca0b5001eb5b",
                "propertyId": null,
                "type": "video",
                "dateModified": "2024-12-02T12:52:34.008",
                "categories": [
                    10081
                ],
                "tags": [
                    "india news",
                    "national",
                    "ips officer road accident",
                    "karnataka ips officer",
                    "karnataka hassan district",
                    "ips officer harsh bardhan death",
                    "ips death on road accident",
                    "ips harshavardhan accident",
                    "ips harshavardhan",
                    "ips harshavardhan death",
                    "karnataka news",
                    "ips death"
                ],
                "embeddings": null,
                "dataMap": {
                    "image": "/2024/12/02/ips-road-accident_13d3ec6d89bf249773b4ceaaa4e55ee4.jpeg",
                    "video_duration": "",
                    "full_slug": "video/india-news/ips-officer-harshvardhan-died-in-road-accident-in-karnataka-2024-12-02",
                    "is_premium": false,
                    "video_url": "www.youtube.com/embed/O5oxaHRMwjo?si=2aV7NvubRNK2ozTX",
                    "title_hn": "IPS Officer Accident: पहली पोस्टिंग के लिए जा रहे IAS अफसर की मौत, हादसे ने दहला दिया",
                    "mute": false,
                    "is_native_player": false,
                    "youtube_id": "O5oxaHRMwjo?si=2aV7NvubRNK2ozTX",
                    "autoplay": false,
                    "video_type": "youtube"
                },
                "bookmarked": false
            }
        },
        {
            "position": 2,
            "componentId": 108,
            "content": {
                "id": "674dad49bc755abecc07c4f7",
                "propertyId": null,
                "type": "video",
                "dateModified": "2024-12-02T12:51:21.25",
                "categories": [
                    10218
                ],
                "tags": [],
                "embeddings": null,
                "dataMap": {
                    "image": "1Ti5OSd.0000000.jpg",
                    "video_duration": "01:31",
                    "full_slug": "video/uttar-pradesh/azamgarh/video-up-crime-mid-day-meal-in-charge-beaten-headmaster-threatened-to-kill-video-goes-viral-fir",
                    "is_premium": null,
                    "video_url": "https://vid.amarujala.com/uploaded_videos/hyperlocal_videos/2024/12/02/1Ti5OSd.m3u8",
                    "title_hn": "VIDEO : मीड-डे-मील प्रभारी को प्रधानाध्यापक ने पीटा, 15 दिन पूर्व मारने की दी थी धमकी; SP ने दिए कार्रवाई के निर्देश",
                    "mute": false,
                    "is_native_player": true,
                    "youtube_id": "1Ti5OSd",
                    "autoplay": false,
                    "video_type": "auw_video"
                },
                "bookmarked": false
            }
        }
    ]
};
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
