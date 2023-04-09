migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1a7jeqr6445dhn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ng36cjnb",
    "name": "type",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "86mnm1c5",
    "name": "equipmentRequired",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymxzodpx",
    "name": "mechanics",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7vwfzup",
    "name": "forceType",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hiadmp7",
    "name": "experienceLevel",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlxgysnl",
    "name": "secondaryMuscles",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aoaungcu",
    "name": "instructions",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1a7jeqr6445dhn")

  // remove
  collection.schema.removeField("ng36cjnb")

  // remove
  collection.schema.removeField("86mnm1c5")

  // remove
  collection.schema.removeField("ymxzodpx")

  // remove
  collection.schema.removeField("w7vwfzup")

  // remove
  collection.schema.removeField("5hiadmp7")

  // remove
  collection.schema.removeField("xlxgysnl")

  // remove
  collection.schema.removeField("aoaungcu")

  return dao.saveCollection(collection)
})
