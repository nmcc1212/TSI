import express, { Request, Response } from "express";
import loggerMiddleware from './loggerMiddleware';


const app = express();
const port = 3100;

app.use(loggerMiddleware);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/news', (req: Request, res: Response) => {
    res.json([
        {
        "_id": {
          "$oid": "65b3840b079c1b1f3e2a1506"
        },
        "creator": "BeauHD",
        "date": "2023-11-30T22:40:00+00:00",
        "title": "Adobe's Buy of Figma Is 'Likely' Bad For Developers, Rules UK Regulator",
        "link": "https://news.slashdot.org/story/23/11/30/2155234/adobes-buy-of-figma-is-likely-bad-for-developers-rules-uk-regulator?utm_source=rss1.0mainlinkanon&utm_medium=feed",
        "dc:creator": "BeauHD",
        "dc:date": "2023-11-30T22:40:00+00:00",
        "content": "Paul Kunert reports via The Register: Adobe's $20 billion buy of web-first design collaboration start-up Figma will harm software developers if it goes ahead as proposed, according to a provisional ruling on the merger by Britain's competition regulator. The Competition and Markets Authority launched a deeper investigation of the tie-up in July when it classified Figma as an \"emerging threat to Adobe.\" Now in the latest twist, the regulator says it found the merger would eliminate one of two major players in three software sub-markets: product design; image editing; and illustration.\n \nFigma's tools are used by well-known businesses that are key to the success of the digital economy, the CMA reckons, including Airbnb, Patagonia and Vodafone. Approving the acquisition \"would remove the constraint Adobe exerts on Figma through its product design software, AdobeXD.\" The CMA adds in its report: \"The inquiry group also provisionally concluded that Adobe abandoned development of new product design software which could have competed even more closely with Figma and, given the timing of the decision, did this as a consequence of the merger. \"This supports the CMA's concern that this proposed deal would likely reduce innovation and the development of competitive new products.\" Some software developers are worried that Adobe would up the price of Figma's subsciption post merger, something Figma denied would happen.\n \nAs for image editing and illustration software, the \"threat posed\" by Figma has fueled product development of Adobe's Photoshop and Illustrator applications, including web versions, and this dynamic would be altered by the merger. \"This competition would be lost as a result of the transaction, harming designers and creative agencies who might have used these new tools or relied on future updates,\" the CMA's report adds. The nature of the ruling is provisions., and the CMA will now consult of them and consider potential remedies \"which could include blocking the deal outright.\"<p><div class=\"share_submission\" style=\"position:relative;\">\n<a class=\"slashpop\" href=\"http://twitter.com/home?status=Adobe's+Buy+of+Figma+Is+'Likely'+Bad+For+Developers%2C+Rules+UK+Regulator%3A+https%3A%2F%2Fnews.slashdot.org%2Fstory%2F23%2F11%2F30%2F2155234%2F%3Futm_source%3Dtwitter%26utm_medium%3Dtwitter\"><img src=\"https://a.fsdn.com/sd/twitter_icon_large.png\"></a>\n<a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=https%3A%2F%2Fnews.slashdot.org%2Fstory%2F23%2F11%2F30%2F2155234%2Fadobes-buy-of-figma-is-likely-bad-for-developers-rules-uk-regulator%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"><img src=\"https://a.fsdn.com/sd/facebook_icon_large.png\"></a>\n\n\n\n</div></p><p><a href=\"https://news.slashdot.org/story/23/11/30/2155234/adobes-buy-of-figma-is-likely-bad-for-developers-rules-uk-regulator?utm_source=rss1.0moreanon&amp;utm_medium=feed\">Read more of this story</a> at Slashdot.</p><iframe src=\"https://slashdot.org/slashdot-it.pl?op=discuss&amp;id=23147245&amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"></iframe>",
        "contentSnippet": "Paul Kunert reports via The Register: Adobe's $20 billion buy of web-first design collaboration start-up Figma will harm software developers if it goes ahead as proposed, according to a provisional ruling on the merger by Britain's competition regulator. The Competition and Markets Authority launched a deeper investigation of the tie-up in July when it classified Figma as an \"emerging threat to Adobe.\" Now in the latest twist, the regulator says it found the merger would eliminate one of two major players in three software sub-markets: product design; image editing; and illustration.\n \nFigma's tools are used by well-known businesses that are key to the success of the digital economy, the CMA reckons, including Airbnb, Patagonia and Vodafone. Approving the acquisition \"would remove the constraint Adobe exerts on Figma through its product design software, AdobeXD.\" The CMA adds in its report: \"The inquiry group also provisionally concluded that Adobe abandoned development of new product design software which could have competed even more closely with Figma and, given the timing of the decision, did this as a consequence of the merger. \"This supports the CMA's concern that this proposed deal would likely reduce innovation and the development of competitive new products.\" Some software developers are worried that Adobe would up the price of Figma's subsciption post merger, something Figma denied would happen.\n \nAs for image editing and illustration software, the \"threat posed\" by Figma has fueled product development of Adobe's Photoshop and Illustrator applications, including web versions, and this dynamic would be altered by the merger. \"This competition would be lost as a result of the transaction, harming designers and creative agencies who might have used these new tools or relied on future updates,\" the CMA's report adds. The nature of the ruling is provisions., and the CMA will now consult of them and consider potential remedies \"which could include blocking the deal outright.\"\n\n\n\n\n\n\n\nRead more of this story at Slashdot.",
        "rdf:about": "https://news.slashdot.org/story/23/11/30/2155234/adobes-buy-of-figma-is-likely-bad-for-developers-rules-uk-regulator?utm_source=rss1.0mainlinkanon&utm_medium=feed",
        "isoDate": "2023-11-30T22:40:00.000Z"
      },
      {
        "_id": {
          "$oid": "65b3840b079c1b1f3e2a1517"
        },
        "creator": "BeauHD",
        "date": "2023-12-01T02:02:00+00:00",
        "title": "Hyundai and Kia's New 'Uni Wheel' Drive System Could Revolutionize EV Design",
        "link": "https://tech.slashdot.org/story/23/12/01/0032246/hyundai-and-kias-new-uni-wheel-drive-system-could-revolutionize-ev-design?utm_source=rss1.0mainlinkanon&utm_medium=feed",
        "dc:creator": "BeauHD",
        "dc:date": "2023-12-01T02:02:00+00:00",
        "content": "\"Two articles from Electrek and InsideEVs describe Hyundai and Kia's new 'Uni Wheel' drive system that could revolutionize EV design,\" writes longtime Slashdot reader Uncle_Meataxe. From a report: Described by its makers as a \"paradigm-shifting vehicle drive system,\" the Uni Wheel moves the main drive system components to the vacant space within an EVs wheel hubs. The approach utilizes a planetary gear configuration consisting of a sun gear in the center, four pinion gears on each side, and a ring gear surrounding everything. Traditional ICE vehicles utilize CV joints, but by moving them closer to the wheels requires a short drive train length and as a result, a decrease in efficiency and durability -- especially over bumpy terrain. Hyundai and Kia's Uni Wheel system on the other hand, can transmit power with almost zero changes to efficiency, regardless of wheel movement. \"Advantages include more platform space and more room within an EV's interior,\" adds Uncle_Meataxe. \"When this system may be integrated into an actual EV remains unclear, but Kia and Hyundai have already registered eight patents related to the technology.\" You can learn more about the new drive system via an instructional video on YouTube.<p><div class=\"share_submission\" style=\"position:relative;\">\n<a class=\"slashpop\" href=\"http://twitter.com/home?status=Hyundai+and+Kia's+New+'Uni+Wheel'+Drive+System+Could+Revolutionize+EV+Design%3A+https%3A%2F%2Ftech.slashdot.org%2Fstory%2F23%2F12%2F01%2F0032246%2F%3Futm_source%3Dtwitter%26utm_medium%3Dtwitter\"><img src=\"https://a.fsdn.com/sd/twitter_icon_large.png\"></a>\n<a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=https%3A%2F%2Ftech.slashdot.org%2Fstory%2F23%2F12%2F01%2F0032246%2Fhyundai-and-kias-new-uni-wheel-drive-system-could-revolutionize-ev-design%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"><img src=\"https://a.fsdn.com/sd/facebook_icon_large.png\"></a>\n\n\n\n</div></p><p><a href=\"https://tech.slashdot.org/story/23/12/01/0032246/hyundai-and-kias-new-uni-wheel-drive-system-could-revolutionize-ev-design?utm_source=rss1.0moreanon&amp;utm_medium=feed\">Read more of this story</a> at Slashdot.</p><iframe src=\"https://slashdot.org/slashdot-it.pl?op=discuss&amp;id=23147395&amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"></iframe>",
        "contentSnippet": "\"Two articles from Electrek and InsideEVs describe Hyundai and Kia's new 'Uni Wheel' drive system that could revolutionize EV design,\" writes longtime Slashdot reader Uncle_Meataxe. From a report: Described by its makers as a \"paradigm-shifting vehicle drive system,\" the Uni Wheel moves the main drive system components to the vacant space within an EVs wheel hubs. The approach utilizes a planetary gear configuration consisting of a sun gear in the center, four pinion gears on each side, and a ring gear surrounding everything. Traditional ICE vehicles utilize CV joints, but by moving them closer to the wheels requires a short drive train length and as a result, a decrease in efficiency and durability -- especially over bumpy terrain. Hyundai and Kia's Uni Wheel system on the other hand, can transmit power with almost zero changes to efficiency, regardless of wheel movement. \"Advantages include more platform space and more room within an EV's interior,\" adds Uncle_Meataxe. \"When this system may be integrated into an actual EV remains unclear, but Kia and Hyundai have already registered eight patents related to the technology.\" You can learn more about the new drive system via an instructional video on YouTube.\n\n\n\n\n\n\n\nRead more of this story at Slashdot.",
        "rdf:about": "https://tech.slashdot.org/story/23/12/01/0032246/hyundai-and-kias-new-uni-wheel-drive-system-could-revolutionize-ev-design?utm_source=rss1.0mainlinkanon&utm_medium=feed",
        "isoDate": "2023-12-01T02:02:00.000Z"
      }
    ])
})



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
