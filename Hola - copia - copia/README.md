# OUR BLUE

## Ejecutar la aplicación

Requiere Python 3.9 o posterior. Desde esta carpeta, inicia el servidor:

```powershell
python server.py
```

Abre `http://127.0.0.1:8081`. La API crea una identidad local para cada cuenta
del navegador y guarda cuentas, invitaciones y vínculos en SQLite. El archivo
de base de datos se guarda fuera de la carpeta pública, en
`~/.our-blue/our-blue.sqlite3` (o en la ruta indicada por
`OUR_BLUE_DB_PATH`).

En Configuración, genera un código y compártelo con la otra persona. Esa persona
debe abrir la aplicación en su propio navegador y aceptar el código desde su
cuenta. Los códigos duran 24 horas, solo se pueden usar una vez y generar otro
cancela el anterior.

Esta versión conserva perfiles y contenido en el navegador; el servidor solo
gestiona identidades locales, invitaciones y vínculos. Para publicar la app en
Internet, coloca la API tras HTTPS y añade un sistema de inicio de sesión antes
de tratar las identidades locales como cuentas recuperables o verificadas.

## Pruebas de invitaciones

```powershell
python -m unittest -v test_pairing.py
```
