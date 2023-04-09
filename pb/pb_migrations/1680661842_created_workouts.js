migrate((db) => {
  const collection = new Collection({
    "id": "5xz2uedhlz9dn4l",
    "created": "2023-04-05 02:30:42.431Z",
    "updated": "2023-04-05 02:30:42.431Z",
    "name": "workouts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fikyyd89",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "atxk4d5n",
        "name": "date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5xz2uedhlz9dn4l");

  return dao.deleteCollection(collection);
})
