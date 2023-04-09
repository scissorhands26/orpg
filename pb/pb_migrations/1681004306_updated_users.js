migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsmprtpd",
    "name": "age",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 13,
      "max": 1000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("hsmprtpd")

  return dao.saveCollection(collection)
})
