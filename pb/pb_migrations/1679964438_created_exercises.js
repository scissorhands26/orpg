migrate((db) => {
  const collection = new Collection({
    "id": "d1a7jeqr6445dhn",
    "created": "2023-03-28 00:47:18.019Z",
    "updated": "2023-03-28 00:47:18.019Z",
    "name": "exercises",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "obskh050",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xyvnlqrk",
        "name": "targetMuscleGroup",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("d1a7jeqr6445dhn");

  return dao.deleteCollection(collection);
})
