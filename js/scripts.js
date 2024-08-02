window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-29Y2VM34B3");

function copyLinkToClipboard(anchorId) {
    const dummy = document.createElement("input");
    const url = window.location.href.split("#")[0] + "#" + anchorId;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
