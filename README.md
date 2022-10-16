# Next.js OpenJira App

Para ejecutar este projecto localmente, se necesita la base de datos:

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar y archivo de **.env.template** a **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/entriesdb
```

- Reconstruir los módulos de node

```
npm i
npm run dev
```

## Completar la Base de Datos con información de Pruebas

Llamar:

```
http://localhost:3000/api/seed
```
