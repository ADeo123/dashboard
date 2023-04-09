import { cardList } from "../src/card-list";

export default async function handler(request, res) {
    console.log(request.query.search.toLowerCase());
    var list = [
    {
      "heading":"Technology & Information",
      "title":"APA Style Citations",
      "authorTitle":"Victoria Raish",
      "imageLink": ""
  },
  {
      "heading":"Professional Skills",
      "title":"IST Careers Meet a Coach level 2",
      "authorTitle":"Rita Griffith",
      "imageLink": ""
  },
  {
      "heading":"Agriculture & Natural Resources",
      "title":"[test] Treat Yourself",
      "authorTitle":"James Wilson",
      "imageLink": "badge1Image"
  },
  {
      "heading":"Technology & Information",
      "title":"Savvy Searcher: Recognizing Bias",
      "authorTitle":"Emily Rimland",
      "imageLink": ""
  },
  {
      "heading":"Professional Skills",
      "title":"5 Steps to Improve Resume",
      "authorTitle":"Anderson Kalbach",
      "imageLink": "badge1Image"
  },
  {
      "heading":"Technology & Information",
      "title":"SQL Level 1",
      "authorTitle":"Steve Mason",
      "imageLink": ""
  },
  {
      "heading":"Agriculture & Natural Resources",
      "title":"Best Ways to Reduce Waste",
      "authorTitle":"Cameron Miles",
      "imageLink": "badge1Image"
  },
  {
      "heading":"Professional Skills",
      "title":"Best Interview Skills",
      "authorTitle":"Miles Bradley",
      "imageLink": "badge1Image"
  },
  {
      "heading":"Financial Literacy",
      "title":"Best Ways to Track Spending",
      "authorTitle":"John Fisher",
      "imageLink": "badge1Image"
  },
  {
      "heading":"Financial Literacy",
      "title":"Managing Investments",
      "authorTitle":"Micheal Smith",
      "imageLink": ""
  }
  ];

  //What we are going to be comparing our search result to 
  list.map((card) =>{
    card.index = `${card.heading} ${card.title} ${card.authorTitle}`
  });

  list = list.filter((card) =>{
  return (card.index.toLowerCase().indexOf(search.toLowerCase()) > -1);
  });

  console.log(list);
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(list);
}