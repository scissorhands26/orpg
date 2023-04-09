migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5xz2uedhlz9dn4l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4xlipeto",
    "name": "time",
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
  const collection = dao.findCollectionByNameOrId("5xz2uedhlz9dn4l")

  // remove
  collection.schema.removeField("4xlipeto")

  return dao.saveCollection(collection)
})
