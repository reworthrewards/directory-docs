---
sidebar_position: 1
---

# Comenzar

[![NPM](https://img.shields.io/npm/v/reworth-directory.svg)](https://www.npmjs.com/package/reworth-directory) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


 **reworth-directory** es un componente de React listo para usar que le permite integrar el directorio de REWORTH
 
## Instalar

```bash
# using yarn
yarn add @reworthrewards/reworth-directory

# using npm
npm install --save @reworthrewards/reworth-directory
```

## Uso

```jsx
import React from 'react';

import { ReworthDirectory } from '@reworthrewards/reworth-directory';

const Directory = () => {
    return (
      <ReworthDirectory 
        accentColor={'#2E58FF'} 
        lang={'ES'} 
        fontFamily={'Poppins'} 
      />
    )
}
```

## React con Typescript

```jsx
import React from 'react';

const Reworth = require('@reworthrewards/reworth-directory');  
const { ReworthDirectory } = Reworth;

const Directory = () => {
    return (
      <ReworthDirectory 
        accentColor={'#2E58FF'} 
        lang={'ES'} 
        fontFamily={'Poppins'} 
      />
    )
}
```

# Props permitidas

| Nombre | Tipo | Default | Opciones | Descripción |
|----| --- | --- | --- | --- |
| accentColor | String | "#2E58FF" | cualquier color | Color de acento para todos los elementos y encabezado |
| lang | String | "ES" | "ES", "EN" | Idioma admitido por el componente |
| fontFamily | String | "Poppins" | "Poppins", "Montserrat", "Nunito" |  Tipografías de fuentes disponibles |
| geo | String | undefined | "19.3918512,-99.162209" | Latitude y Longitud |
| gtm | Boolean | false | true - false | Activar Google Tag Manager |

## License

mit © [ReworthRewards](https://github.com/ReworthRewards)