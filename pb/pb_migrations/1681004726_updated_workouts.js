migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5xz2uedhlz9dn4l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d2l1i1ph",
    "name": "complete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5xz2uedhlz9dn4l")

  // remove
  collection.schema.removeField("d2l1i1ph")

  return dao.saveCollection(collection)
})
