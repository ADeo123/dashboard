import { cardList } from "../src/card-list";

export default async function handler(request, res) {
  const search = req.query.search || '';
  var badgeList = [];

  list.map((card) => {
    card.index = card.heading.toLowerCase() + " " + card.title.toLowerCase() + " " + card.authorTitle.toLowerCase();
  });
  list = badgeList.filter((card) => {
    return card.index.indexOf(search.toLowerCase()) > -1;
  });
  console.log(badgeList);
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(badgeList);
}
