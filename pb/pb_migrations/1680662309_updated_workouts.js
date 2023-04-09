migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5xz2uedhlz9dn4l")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5xz2uedhlz9dn4l")

  collection.listRule = null

  return dao.saveCollection(collection)
})
