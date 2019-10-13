{
      "MenuCategoryID": 34469,
      "MenuCategoryName": "Appetizer",
      "ParentMenuCategoryID": 0,
      "CategoryTagLine": "",
      "Url": "",
      "OpenInNewWindow": false,
      "ShowPrice": true,
      "SortOrder": 1,
      "Active": true,
      "AllowOnlineOrder": true,
      "AllowTOGOOrder": true,
      "AllowThirdPartyOrder": true,
      "AllowDineInOrder": true,
      "TaxExempt": false,
      "ShowSpicyLevel": true,
      "PrintGroup": 0,
      "SendToKitchen": true,
      "SKU": "",
      "PrintOrder": 0
   }

   app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   });

## To access the "endpoint/restaurants"
