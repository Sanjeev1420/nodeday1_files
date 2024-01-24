# API Endpoints

## POST /createFile

This endpoint creates a new text file with the current date-time as the name and content of the file.

### Request

No parameters are required.

### Response

If successful, the server responds with a 201 status code and a message indicating the successful creation of the file.

## GET /getAllFiles

This endpoint retrieves all the text files in the ‘notes’ folder.

### Request

No parameters are required.

### Response

If successful, the server responds with a 201 status code and a JSON object containing an array of file names.

## Error Handling

If an error occurs, the server responds with a 500 status code and a message indicating an internal server error.
