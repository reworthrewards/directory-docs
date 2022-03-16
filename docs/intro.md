---
sidebar_position: 1
---

# Getting Started

[![NPM](https://img.shields.io/npm/v/reworth-directory.svg)](https://www.npmjs.com/package/reworth-directory) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


 **reworth-directory** is a ready-to-use react component that let's you integrate REWORTH's directory
 
## Install

```bash
# using yarn
yarn add @reworthrewards/reworth-directory

# using npm
npm install --save @reworthrewards/reworth-directory
```

## Usage

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

## Notice if you're using React with Typescript

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

# Allowed props

| Name | Type | Default | Options | Description |
|----| --- | --- | --- | --- |
| accentColor | String | "#2E58FF" | any desired color| Accent color for all elements and header |
| lang | String | "ES" | "ES", "EN" | Language supported by the component |
| fontFamily | String | "Poppins" | "Poppins", "Montserrat", "Gothic a1" |  Available font families |

## License

mit © [ReworthRewards](https://github.com/ReworthRewards)