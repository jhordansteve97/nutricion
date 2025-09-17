# Nutrición
## Descripción
Este es un proyecto de salud para la parte de nutrición.

## Requisitos Para levantar el proyecto
- NodeJS v22.16.0
- npm 10.9.2
- agregar el .env como esta en el template .env.template
- agregar el db.json como esta en en el db.template.json

## Levantar proyecto

```bash
npm run dev
npx json-server db.json
```

## Storybook
Si quieres ver la documentacion de cada componente puedes levantar el storybook con el siguiente comando:

```bash
npm run storybook
```

> [!NOTE]
> Es necesario que se levante el servicio para que pueda ejecutar correctamente el proyecto.
> Es importante agregar la varible de entorno como esta en el template.
> Es necesario agregar la base de datos para que pueda ejecutarse.
