const BILIBILI_DYNAMIC_URL = "https://t.bilibili.com"

function closePopup() {
    document.getElementById("bili-overlay-filter").setAttribute("style", "background-color: rgba(0, 0, 0, 0.5); display: none;");
    document.getElementById("bili-popup__wrap-filter").setAttribute("style", "width: 560px; max-height: 320.8px; border-radius: 6px; display: none;");
    let filterPopup = document.getElementById("bili-popup-filter");
    filterPopup.setAttribute("style", filterPopup.getAttribute("style") + " display: none;");

    let body = document.getElementsByTagName("body")[0];
    body.setAttribute("style", "overflow: auto;");
}

function showFilterPopup() {
    let body = document.getElementsByTagName("body")[0];
    body.setAttribute("style", "overflow: hidden;");

    let zLevelMax = 2002;
    for (let popups of document.getElementsByClassName("bili-popup")) {
        let style = popups.getAttribute("style");
        let match = /z-index:\s*(\d+);/;
        let zLevel = style.match(match);
        if (zLevel && Number(zLevel[1]) > zLevelMax) {
            zLevelMax = Number(zLevel[1]);
        }
    }
    let filterPopup = document.getElementById("bili-popup-filter");
    filterPopup.setAttribute("style", `z-index: ${zLevelMax + 1};`);

    document.getElementsByClassName("bili-popup__header__close")[4].addEventListener("click", closePopup);
    document.getElementById("bili-overlay-filter").setAttribute("style", "background-color: rgba(0, 0, 0, 0.5);");
    document.getElementById("bili-popup__wrap-filter").setAttribute("style", "width: 560px; max-height: 292.8px; border-radius: 6px;");

}

function setPage() {
    let tools = document.getElementsByClassName("bili-dyn-publishing__tools");
    let filterIcon = document.createElement("div");
    filterIcon.setAttribute("class", "bili-dyn-publishing__tools__item filter");
    filterIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" width="20" height="20" style="width: 20px; height: 20px;">
        <circle r="50" stroke="black" stroke-width="3" fill="red" />
    </svg > `;
    console.log(tools);
    console.log(tools[0]);
    tools[0].appendChild(filterIcon);


    let filterPopup = document.createElement("div");
    filterPopup.setAttribute("class", "bili-popup");
    filterPopup.setAttribute("id", "bili-popup-filter");
    filterPopup.setAttribute("style", "display: none;");

    filterPopup.innerHTML = `
    <div id="bili-overlay-filter" class="bili-overlay" style="background-color: rgba(0, 0, 0, 0.5); display: none;"></div>
    <div id="bili-popup__wrap-filter" class="bili-popup__wrap" style="width: 560px; max-height: 292.8px; border-radius: 6px;">
    <div class="bili-popup__header"><!---->
        <div class="bili-popup__header__title">过滤器设置</div>
        <div class="bili-popup__header__close">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" width="20" height="20" style="width: 20px; height: 20px;">
            <path d="M4.194660000000001 4.196968333333334C4.389916666666667 4.001705 4.706508333333334 4.001705 4.901768333333334 4.196968333333334L9.998666666666667 9.2939L15.096983333333334 4.195601666666668C15.2922 4.0003383333333336 15.6088 4.0003383333333336 15.804083333333335 4.195601666666668C15.999316666666669 4.390861666666667 15.999316666666669 4.707450000000001 15.804083333333335 4.902710000000001L10.705766666666667 10.001000000000001L15.803 15.098166666666666C15.998233333333335 15.29345 15.998233333333335 15.610050000000001 15.803 15.805333333333333C15.607716666666667 16.000550000000004 15.29111666666667 16.000550000000004 15.0959 15.805333333333333L9.998666666666667 10.7081L4.902843333333334 15.803933333333333C4.707583333333333 15.999216666666669 4.391 15.999216666666669 4.19574 15.803933333333333C4.000475000000001 15.608699999999999 4.000475000000001 15.292116666666667 4.19574 15.096833333333333L9.291566666666666 10.001000000000001L4.194660000000001 4.9040766666666675C3.9993966666666667 4.708816666666667 3.9993966666666667 4.392228333333334 4.194660000000001 4.196968333333334z" fill="currentColor"></path>
        </svg>
        </div>
    </div>
    <div class="bili-popup__content" style="">
        <div class="bili-popup-modal" style="height: 255px;">
        <div class="bili-popup-modal__content has-header" style="overflow-y: overlay;">
            <div class="bili-filter">
            <div class="bili-filter__form">
                <div class="bili-filter__form__title">设置标签</div> <!---->
                <div class="bili-filter__form__item title">
                <div class="bili-input bili-input--suffix bili-input--text" slot="value"><input type="text" placeholder="请填写标签,以分号分隔" class="bili-input__inner">
                </div>
                </div>
                <div class="bili-filterl__sec" style="margin-top: 24px;">
                <div class="bili-filter__opt">
                <div class="bili-filter__opt__header">
                    <div class="bili-filter__opt__title">过滤类型</div>
                </div>
                <div class="bili-filter__opt__body" style="margin: 5px;">
                    <div role="radiogroup" class="bili-radio-group">
                    <label role="radio" class="bili-radio bili-radio--small checked">
                        <span class="bili-radio__input">
                        <span class="bili-radio__inner"></span>
                        <input type="radio" aria-hidden="true" class="bili-radio__original" value="0">
                        </span>
                        <span class="bili-radio__label">
                        白名单
                        </span>
                    </label>
                    <label role="radio" class="bili-radio bili-radio--small">
                        <span class="bili-radio__input">
                        <span class="bili-radio__inner"></span>
                        <input type="radio" aria-hidden="true" class="bili-radio__original" value="1"></span>
                        <span class="bili-radio__label">
                        黑名单
                        </span>
                    </label>
                    </div>
                </div>
                </div>
            </div>
            </div> <!----> <!---->
            </div>

            <div class="bili-popup-modal__content__footershim"></div>
        </div>
        <div class="bili-popup-modal__footer" style="border-radius: 0px 0px 6px 6px;"><button class="bili-button primary bili-button--large bili-popup-modal__button confirm">完成</button> <!----></div>
        </div> <!---->
    </div>
    </div>
    `
    document.getElementsByTagName("body")[0].appendChild(filterPopup);

    filterIcon.addEventListener("click", showFilterPopup);
}

if (window.location.href.startsWith(BILIBILI_DYNAMIC_URL)) {
    window.addEventListener("load", function () {
        setPage();
    });
}
