# @angelplayer/react-carousel

This package is a "Super easy Carousel" component made by [AngelPlayer](https://github.com/ssh5212/npm-react-carousel).

It works in React and supports both JavaScript and TypeScript.
<br/><br/>

## Install

```
$ npm i @angelplayer/react-carousel
```

## Example

```typescript
import { Carousel } from '@angelplayer/react-carousel';

function App() {
    const slides = [
        { image: '/images/carousel1.jpg', url: 'https://angelplayer.tistory.com' },
        { image: '/images/carousel2.jpg', url: 'https://github.com/ssh5212' },
    ];

    return (
        <div style={{ width: '750px', height: '250px' }}>
            <Carousel slides={slides} speed='5000' type='cover' />
        </div>
    );
}
```

The carousel is determined by the width and height of its parent.

In the example, the size of the carousel is being adjusted by the width and height of the parent div.
<br/><br/>

## Props

The Carousel can accept three props:

### slides

-   The slides prop is an array consisting of objects.

-   Each object contains an image and a URL. When you click on the image displayed in the Carousel, it will navigate to the corresponding URL.

### speed

-   The speed prop adjusts the transition speed of the Carousel's images.

-   The unit is in milliseconds, and the default value is 5000ms.

### type

-   The type prop determines how images are filled within the Carousel.

-   The type can be either "cover" or "contain".

![example](https://github.com/ssh5212/npm-react-carousel/assets/26498125/16816201-d0aa-4ea9-bc1d-55addcea9297)
<br/>
If we use the above image as an example,
<br/><br/>
![contain](https://github.com/ssh5212/npm-react-carousel/assets/26498125/9d73d635-86d8-41bb-b3ef-1c66f712c592)
<br/>
"contain" ensures that the image is displayed without any parts being cropped.
<br/><br/>
![cover](https://github.com/ssh5212/npm-react-carousel/assets/26498125/243f10e5-529c-48fe-9e87-a104be64320d)
<br/>
"cover" enlarges the image to fit exactly within the Carousel's dimensions.

The default value for type is "cover".
<br/><br/>

## Video Usage Guide

[![Video Label](http://img.youtube.com/vi/SJbiMU-1jPA/0.jpg)](https://www.youtube.com/watch?v=SJbiMU-1jPA)
<br/><br/>
Thank you for reading.

Happy Hacking!
