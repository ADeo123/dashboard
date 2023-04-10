import { cardList } from "../src/card-list";

export default async function handler(request, res) {
  const search = req.query.search || '';
  var badgeList = [
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Spaghetti Carbonara",
      "authorTitle": "By John Smith",
      "iconColor": "green",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Beef Stroganoff",
      "authorTitle": "By Sarah Lee",
      "iconColor": "red",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Pad Thai",
      "authorTitle": "By Alex Wong",
      "iconColor": "purple",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Chicken Alfredo",
      "authorTitle": "By Samantha Kim",
      "iconColor": "blue",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Salmon Teriyaki",
      "authorTitle": "By Mike Chen",
      "iconColor": "orange",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Lemon Chicken",
      "authorTitle": "By Emily Chen",
      "iconColor": "green",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Beef and Broccoli",
      "authorTitle": "By Jason Lee",
      "iconColor": "yellow",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Fish Tacos",
      "authorTitle": "By Juan Perez",
      "iconColor": "teal",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Vegan Curry",
      "authorTitle": "By Maria Rodriguez",
      "iconColor": "pink",
      "iconName": "places:kitchen"
    },
    {
      "header": "My app",
      "heading": "New Recipe",
      "title": "Tomato Soup",
      "authorTitle": "By James Smith",
      "iconColor": "brown",
      "iconName": "places:kitchen"
    }
  ];

  badgeList.map((card) => {
    card.index = card.heading.toLowerCase() + " " + card.title.toLowerCase() + " " + card.authorTitle.toLowerCase();
  });
  badgeList = badgeList.filter((card) => {
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
