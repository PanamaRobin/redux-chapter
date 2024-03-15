# Migracion angular 17

## Asegurarnos de tener node 18 o superior
- ng update @angular/core@15 @angular/cli@15
- Commitear cambios
## Subir versiones de dependencias que nos resulten en conflictos
- npm i @ngrx/store@15.0.0
- Commitear cambios
## Una vez que se corrijan, subir version de angular a la version 16
- ng update @angular/core@16 @angular/cli@16
- Commitear cambios
## Realizamos el mismo proceso de subir dependencias que hagan conflictos
- npm i @ngrx/store@16
- Commitear
## Subir version de ionic
- npm i -D @capacitor/cli@latest
- Commitear xd
- ng update @angular/core@17 @angular/cli@17
