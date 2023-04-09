migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1a7jeqr6445dhn")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1a7jeqr6445dhn")

  collection.listRule = null

  return dao.saveCollection(collection)
})
