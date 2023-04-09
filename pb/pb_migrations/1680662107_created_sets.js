migrate((db) => {
  const collection = new Collection({
    "id": "drzvrfj8ke1ebn8",
    "created": "2023-04-05 02:35:07.551Z",
    "updated": "2023-04-05 02:35:07.551Z",
    "name": "sets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xoljhddt",
        "name": "exercise",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "d1a7jeqr6445dhn",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ybls9r9s",
        "name": "workout",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "5xz2uedhlz9dn4l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "l22wmteo",
        "name": "reps",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "2kjt0nf7",
        "name": "weight",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("drzvrfj8ke1ebn8");

  return dao.deleteCollection(collection);
})
