import { useState } from "react";

function Tab() {
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isAboutActive, setIsAboutActive] = useState(false);
    const [isServiceActive, setIsServiceActive] = useState(false);
    const [isBlogActive, setIsBlogActive] = useState(false);
    const [lineStyle, setLineStyle] = useState({
        offsetLeft: "",
        offsetWidth: ""
    })
    return (
        <>
            <div className="tab-box">
                <button className={isHomeActive ? "tab-btn active" : "tab-btn"} onClick={(e) => {
                    setIsHomeActive(!isHomeActive);
                    setIsAboutActive(false);
                    setIsServiceActive(false);
                    setIsBlogActive(false);
                    setLineStyle({
                        offsetLeft: `${e.target.offsetLeft}px`,
                        offsetWidth: `${e.target.offsetWidth}px`
                    })
                }}>Home</button>
                <button className={isAboutActive ? "tab-btn active" : "tab-btn"} onClick={(e) => {
                    setIsAboutActive(!isAboutActive);
                    setIsHomeActive(false);
                    setIsServiceActive(false);
                    setIsBlogActive(false);
                    setLineStyle({
                        offsetLeft: `${e.target.offsetLeft}px`,
                        offsetWidth: `${e.target.offsetWidth}px`
                    })
                }}>About</button>
                <button className={isServiceActive ? "tab-btn active" : "tab-btn"} onClick={(e) => {
                    setIsServiceActive(!isServiceActive);
                    setIsHomeActive(false);
                    setIsAboutActive(false);
                    setIsBlogActive(false);
                    setLineStyle({
                        offsetLeft: `${e.target.offsetLeft}px`,
                        offsetWidth: `${e.target.offsetWidth}px`
                    })
                }}>Services</button>
                <button className={isBlogActive ? "tab-btn active" : "tab-btn"} onClick={(e) => {
                    setIsBlogActive(!isBlogActive);
                    setIsHomeActive(false);
                    setIsAboutActive(false);
                    setIsServiceActive(false);
                    setLineStyle({
                        offsetLeft: `${e.target.offsetLeft}px`,
                        offsetWidth: `${e.target.offsetWidth}px`
                    })
                }}>Blogs</button>
                <div className="line" style={{
                    left: lineStyle.offsetLeft,
                    width: lineStyle.offsetWidth
                }}></div>
            </div>
            <div className="content-box">
                <div className={isHomeActive ? "content active" : "content"}>
                    <h2>Home</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className={isAboutActive ? "content active" : "content"}>
                    <h2>About</h2>
                    <p>
                        Civility vicinity graceful is it at. Improve up at to on mention perhaps raising. Way building not get formerly her peculiar. Up uncommonly prosperous sentiments simplicity acceptance to so. Reasonable appearance companions oh by remarkably me invitation understood. Pursuit elderly ask perhaps all.
                    </p>
                </div>
                <div className={isServiceActive ? "content active" : "content"}>
                    <h2>Services</h2>
                    <p>
                        He went such dare good mr fact. The small own seven saved man age no offer. Suspicion did mrs nor furniture smallness. Scale whole downs often leave not eat. An expression reasonably cultivated indulgence mr he surrounded instrument. Gentleman eat and consisted are pronounce distrusts.
                    </p>
                </div>
                <div className={isBlogActive ? "content active" : "content"}>
                    <h2>Blogs</h2>
                    <p>
                        Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily son exposed get general greatly. Zealously prevailed be arranging do. Set arranging too dejection september happiness. Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tab;