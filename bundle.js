(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const sleep = require('./tools').sleep

const alt_1_size = 1.9,
    alt_1_margin_h = 4,
    alt_1_margin_v = 4,
    alt_1_background_switch = true,
    alt_1_border_switch = false,
    alt_1_border_thickness_amount = 0.4,
    alt_1_corners = 0,
    alt_1_info_size = 1.1,
    alt_1_info_transform = 'normal',
    alt_1_info_weight = 'lighter',
    alt_1_line_spacing = 0,
    alt_1_logo_size = 3.5,
    alt_1_logo_switch = true,
    alt_1_name_size = 1.9,
    alt_1_name_transform = 'normal',
    alt_1_name_weight = 'bold',
    alt_1_shadow_amount = 0.5,
    alt_1_shadows = false,
    alt_1_switch = true

let notifications = [
    {
        logo: "{logo1}",
        topText: "{topText1}",
        lowerText: "{lowerText1}",
        topTextFont: "{topTextFont1}",
        lowerTextFont: "{lowerTextFont1}",
        topTextColor: "{topTextColor1}",
        lowerTextColor: "{lowerTextColor1}",
        styleColor1: "{style1color1}",
        styleColor2: "{style2color1}",
        styleColor3: "{style3color1}",
        styleColor4: "{style4color1}",
        activeTime: parseInt("{activeTime1}"),
        waitingTime: parseInt("{waitingTime1}"),
        animationTime: parseInt("{animationTime1}"),
        style: "{style1}",
        alignment: "{align1}",
    }, {
        logo: "{logo2}",
        topText: "{topText2}",
        lowerText: "{lowerText2}",
        topTextFont: "{topTextFont2}",
        lowerTextFont: "{lowerTextFont2}",
        topTextColor: "{topTextColor2}",
        lowerTextColor: "{lowerTextColor2}",
        styleColor1: "{style1color2}",
        styleColor2: "{style2color2}",
        styleColor3: "{style3color2}",
        styleColor4: "{style4color2}",
        activeTime: parseInt("{activeTime2}"),
        waitingTime: parseInt("{waitingTime2}"),
        animationTime: parseInt("{animationTime2}"),
        style: "{style2}",
        alignment: "{align2}",
    }, {
        logo: "{logo3}",
        topText: "{topText3}",
        lowerText: "{lowerText3}",
        topTextFont: "{topTextFont3}",
        lowerTextFont: "{lowerTextFont3}",
        topTextColor: "{topTextColor3}",
        lowerTextColor: "{lowerTextColor3}",
        styleColor1: "{style1color3}",
        styleColor2: "{style2color3}",
        styleColor3: "{style3color3}",
        styleColor4: "{style4color3}",
        activeTime: parseInt("{activeTime3}"),
        waitingTime: parseInt("{waitingTime3}"),
        animationTime: parseInt("{animationTime3}"),
        style: "{style3}",
        alignment: "{align3}",
    }, {
        logo: "{logo4}",
        topText: "{topText4}",
        lowerText: "{lowerText4}",
        topTextFont: "{topTextFont4}",
        lowerTextFont: "{lowerTextFont4}",
        topTextColor: "{topTextColor4}",
        lowerTextColor: "{lowerTextColor4}",
        styleColor1: "{style1color4}",
        styleColor2: "{style2color4}",
        styleColor3: "{style3color4}",
        styleColor4: "{style4color4}",
        activeTime: parseInt("{activeTime4}"),
        waitingTime: parseInt("{waitingTime4}"),
        animationTime: parseInt("{animationTime4}"),
        style: "{style4}",
        alignment: "{align4}",
    }, {
        logo: "{logo5}",
        topText: "{topText5}",
        lowerText: "{lowerText5}",
        topTextFont: "{topTextFont5}",
        lowerTextFont: "{lowerTextFont5}",
        topTextColor: "{topTextColor5}",
        lowerTextColor: "{lowerTextColor5}",
        styleColor1: "{style1color5}",
        styleColor2: "{style2color5}",
        styleColor3: "{style3color5}",
        styleColor4: "{style4color5}",
        activeTime: parseInt("{activeTime5}"),
        waitingTime: parseInt("{waitingTime5}"),
        animationTime: parseInt("{animationTime5}"),
        style: "{style5}",
        alignment: "{align5}",
    }, {
        logo: "{logo6}",
        topText: "{topText6}",
        lowerText: "{lowerText6}",
        topTextFont: "{topTextFont6}",
        lowerTextFont: "{lowerTextFont6}",
        topTextColor: "{topTextColor6}",
        lowerTextColor: "{lowerTextColor6}",
        styleColor1: "{style1color6}",
        styleColor2: "{style2color6}",
        styleColor3: "{style3color6}",
        styleColor4: "{style4color6}",
        activeTime: parseInt("{activeTime6}"),
        waitingTime: parseInt("{waitingTime6}"),
        animationTime: parseInt("{animationTime6}"),
        style: "{style6}",
        alignment: "{align6}",
    }, {
        logo: "{logo7}",
        topText: "{topText7}",
        lowerText: "{lowerText7}",
        topTextFont: "{topTextFont7}",
        lowerTextFont: "{lowerTextFont7}",
        topTextColor: "{topTextColor7}",
        lowerTextColor: "{lowerTextColor7}",
        styleColor1: "{style1color7}",
        styleColor2: "{style2color7}",
        styleColor3: "{style3color7}",
        styleColor4: "{style4color7}",
        activeTime: parseInt("{activeTime7}"),
        waitingTime: parseInt("{waitingTime7}"),
        animationTime: parseInt("{animationTime7}"),
        style: "{style7}",
        alignment: "{align7}",
    }, {
        logo: "{logo8}",
        topText: "{topText8}",
        lowerText: "{lowerText8}",
        topTextFont: "{topTextFont8}",
        lowerTextFont: "{lowerTextFont8}",
        topTextColor: "{topTextColor8}",
        lowerTextColor: "{lowerTextColor8}",
        styleColor1: "{style1color8}",
        styleColor2: "{style2color8}",
        styleColor3: "{style3color8}",
        styleColor4: "{style4color8}",
        activeTime: parseInt("{activeTime8}"),
        waitingTime: parseInt("{waitingTime8}"),
        animationTime: parseInt("{animationTime8}"),
        style: "{style8}",
        alignment: "{align8}",
    }, {
        logo: "{logo9}",
        topText: "{topText9}",
        lowerText: "{lowerText9}",
        topTextFont: "{topTextFont9}",
        lowerTextFont: "{lowerTextFont9}",
        topTextColor: "{topTextColor9}",
        lowerTextColor: "{lowerTextColor9}",
        styleColor1: "{style1color9}",
        styleColor2: "{style2color9}",
        styleColor3: "{style3color9}",
        styleColor4: "{style4color9}",
        activeTime: parseInt("{activeTime9}"),
        waitingTime: parseInt("{waitingTime9}"),
        animationTime: parseInt("{animationTime9}"),
        style: "{style9}",
        alignment: "{align9}",
    },
]

const globalSettings = (root, element, notification) => {
    root.style.setProperty('--alt-1-animation-time', notification.animationTime / 1000 + "s")
    //texts styling
    root.style.setProperty('--alt-1-size', alt_1_size + "em")
    root.style.setProperty('--alt-1-margin-h', alt_1_margin_h + "rem")
    root.style.setProperty('--alt-1-margin-v', alt_1_margin_v + "rem")
    root.style.setProperty('--alt-1-line-spacing', alt_1_line_spacing + "em")
    root.style.setProperty('--alt-1-name-size', alt_1_name_size + "em")
    root.style.setProperty('--alt-1-info-size', alt_1_info_size + "em")
    root.style.setProperty('--alt-1-name-transform', alt_1_name_transform)
    root.style.setProperty('--alt-1-info-transform', alt_1_info_transform)
    root.style.setProperty('--alt-1-name-weight', alt_1_name_weight)
    root.style.setProperty('--alt-1-info-weight', alt_1_info_weight)
    root.style.setProperty('--alt-1-name-color', notification.topTextColor)
    root.style.setProperty('--alt-1-info-color', notification.lowerTextColor)
    root.style.setProperty('--alt-1-style-color-1', notification.styleColor1)
    root.style.setProperty('--alt-1-style-color-2', notification.styleColor2)
    root.style.setProperty('--alt-1-style-color-3', notification.styleColor3)
    root.style.setProperty('--alt-1-style-color-4', notification.styleColor4)
    root.style.setProperty('--alt-1-name-font', notification.topTextFont)
    root.style.setProperty('--alt-1-info-font', notification.lowerTextFont)
    root.style.setProperty('--alt-1-logo-size', alt_1_logo_size + "em")
    root.style.setProperty('--alt-1-corners', alt_1_corners + "em")
    root.style.setProperty('--alt-1-border-switch', alt_1_border_switch ? 'true' : 'false')
    root.style.setProperty('--alt-1-border_thickness_amount', alt_1_border_thickness_amount + "rem")

    //Hide the background shadow if color is transparent (end with ",0)")
    root.style.setProperty('--alt-1-background', notification.styleColor2.match(/,0\)$/) ? '0' : '1')
    root.style.setProperty('--alt-1-shadows', "none")
    root.style.setProperty('--alt-1-shadows-graph', "none")
    if (alt_1_shadows) {
        root.style.setProperty('--alt-1-shadows', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_1_shadow_amount + ")")
        if (alt_1_background_switch === false) {
            root.style.setProperty('--alt-1-shadows-graph', "none")
        } else {
            root.style.setProperty('--alt-1-shadows-graph', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_1_shadow_amount + ")")
        }
    }
}

const specificSettings = (root, element, notification) => {
    document.getElementById("alt-1-name").innerHTML = notification.topText
    document.getElementById("alt-1-info").innerHTML = notification.lowerText

    if (alt_1_background_switch === false) {
        root.style.setProperty('--alt-1-style-color-1', 'none')
        root.style.setProperty('--alt-1-style-color-2', 'none')
    }

    if (alt_1_border_switch === false) {
        root.style.setProperty('--alt-1-style-color-3', 'none')
        root.style.setProperty('--alt-1-style-color-4', 'none')
        root.style.setProperty('--alt-1-border_thickness_amount', "0rem")
    }

    element.classList.remove("left")
    element.classList.remove("center")
    element.classList.remove("right")
    element.classList.add(notification.alignment)

    if (alt_1_switch === false) element.classList.add("hide-anim")
    element.classList.remove("style-1")
    element.classList.remove("style-2")
    element.classList.remove("style-3")
    element.classList.remove("style-4")
    element.classList.add(notification.style)

    document.getElementById("alt-1-logo-image").src = '//:0'
    if (notification.logo !== 'undefined' && notification.logo && !notification.logo.startsWith('{')) {
        document.getElementById("alt-1-logo-image").src = notification.logo
    }

    document.getElementById("alt-1-logo").classList.add("no-logo")
    if (alt_1_logo_switch === true) document.getElementById("alt-1-logo").classList.remove("no-logo")
}

const startAnimation = async (root, element, notification) => {
    element.classList.remove("animation-out")
    void element.offsetWidth
    element.classList.add("animation-in")
    await sleep(notification.animationTime)
    await sleep(notification.activeTime)
}

const stopAnimation = async (root, element, notification) => {
    element.classList.remove("animation-in")
    void element.offsetWidth
    element.classList.add("animation-out")
    await sleep(notification.animationTime)
    await sleep(notification.waitingTime)
}

window.addEventListener('onWidgetLoad', async function (obj) {
    const root = document.getElementsByTagName('main')[0]
    const element = document.getElementById('lower-third-1')
    let cursor = 0
    const notificationNumber = notifications.length
    let found = false
    while (true) {
        if (cursor >= notificationNumber && !found) return //avoid infinite loop that breaks everything
        if (cursor >= notificationNumber) cursor = 0
        let notification = notifications[cursor++]
        if (!notification.topText || notification.topText.startsWith('{') || notification.topText === 'undefined') return
        element.classList.remove("hide-anim")
        found = true
        globalSettings(root, element, notification)
        specificSettings(root, element, notification)
        await startAnimation(root, element, notification)
        await stopAnimation(root, element, notification)
        element.classList.add("hide-anim")
    }
})

},{"./tools":2}],2:[function(require,module,exports){
module.exports = {
    sleep: function (milliseconds) {
        return new Promise(res => {
            setTimeout(res, milliseconds)
        });
    }
}

},{}]},{},[1]);
