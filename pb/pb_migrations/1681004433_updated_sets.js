migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drzvrfj8ke1ebn8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xvmwdw4z",
    "name": "order",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drzvrfj8ke1ebn8")

  // remove
  collection.schema.removeField("xvmwdw4z")

  return dao.saveCollection(collection)
})
