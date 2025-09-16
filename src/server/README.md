## Consumo de api
## Ejemplos

### GET
```
api.get("/posts").then((data) => console.log("GET:", data));
```

### POST
```
api.post("/posts", {
  title: "Nuevo post",
  body: "Contenido del post",
  userId: 1,
}).then((data) => console.log("POST:", data));
```
### PUT
```
api.put("/posts/1", {
  id: 1,
  title: "Post actualizado",
  body: "Contenido actualizado",
  userId: 1,
}).then((data) => console.log("PUT:", data));
```
### DELETE
```
api.delete("/posts/1").then((data) => console.log("DELETE:", data));
```
