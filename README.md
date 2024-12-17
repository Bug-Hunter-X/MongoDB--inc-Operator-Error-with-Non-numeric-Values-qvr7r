# MongoDB $inc Operator Error with Non-numeric Values

This repository demonstrates an uncommon error that can occur when using the `$inc` operator in MongoDB updates. The `$inc` operator is designed to increment a numeric field by a specified value. However, if the field is not a number or the increment value is not a number, MongoDB will throw an error.

## Bug Description

The bug occurs when attempting to increment a field that is not a number or using a non-numeric value as the increment amount.  This will result in an error during the update operation.

## Reproduction Steps

1. Create a MongoDB collection.
2. Insert a document with a non-numeric field or a field containing a mix of numbers and strings.
3. Attempt to update the document using the `$inc` operator with a non-numeric value.

## Solution

To fix this issue, ensure that the field you are incrementing is a number and the increment amount is also a number.  If necessary, convert the field to a number before performing the update.