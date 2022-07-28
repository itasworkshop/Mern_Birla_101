import React, { useState } from "react";

export default function Toggle() {

    const [img, setImg] = useState(true);
    const change = () => setImg(!img)

    return (
        <div>
            <button onClick={change}>toggler</button>

            {img&&<img src='D:\birla soft\concepts\src\download (1).png' alt="horse1" width="500" />}
            {!img && <img src='D:\birla soft\concepts\src\download (2).png' alt="horse2" width="600" />}

        </div>
    )

}