import React from "react";
import "./App.css";
import { media } from "./images";

function App() {
    // iterate and check if any portrait image is present

    // if yes, render at 0.8 aspect ratio

    // else, all square images, same layout 2,1 with fallback to 1 aspect ratio

    // iterate and every 3n image, class different - full, else half-width

    const images = media.images; // .filter((image) => image.aspectRatio < 1);

    const lastImgClass = images.length % 3 === 1 ? "full" : "";
    // const hasPortrait = images.some((image) => image.aspectRatio < 1);
    const imageElements = images.map((image, index) => {
        const klass = (index + 1) % 3 === 0 ? "full-width" : "half-width";
        const imgClass = image.aspectRatio === 1 ? "square" : "portrait";
        return (
            <div key={index} className={`image-container ${klass}`}>
                <img
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    className={imgClass}
                />
            </div>
        );
    });
    return (
        <div className="App">
            <div className={`gallery ${lastImgClass}`}>{imageElements}</div>
            <div className="attributes">Hello</div>
        </div>
    );
}

export default App;
