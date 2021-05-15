# api crud example

# Requisitos
- tener instalado nest js

## Pasos
- Clonar repositorio
- npm install para dependencias del proyecto
- configurar conexion


## Configurar conexion
- ir al archivo de app.module
- cambiar usuario y password y antes de eso debe estar creada la base de datos
- se creara automaticamente la entidad que se utilizo en las pruebas

```
 TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
```

## Ejecutar Proyecto
```
 npm start
```
