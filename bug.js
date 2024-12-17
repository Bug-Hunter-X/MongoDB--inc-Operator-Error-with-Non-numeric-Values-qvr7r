```javascript
// Incorrect usage of $inc operator with non-numeric values
db.collection.updateOne({"_id": 1}, {"$inc": {"field": "abc"}});
```