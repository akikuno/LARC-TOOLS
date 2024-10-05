// ========================================
// Google Analytics関係
// ========================================

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-29Y2VM34B3");

// ========================================
// h1タグにリンクを付ける関数
// ========================================

function copyLinkToClipboard(anchorId) {
    if (document.getElementById(anchorId)) {
        const tabContent = document.getElementById(anchorId).closest('.tabcontent');
        if (tabContent) {
            const tabName = tabContent.id;
            openTab(null, tabName);
        }
    }

    const url = window.location.href.split("#")[0] + "#" + anchorId;

    navigator.clipboard.writeText(url).then(function () {
        alert("Link copied to clipboard: " + url);
    }).catch(function (err) {
        console.error("Failed to copy text: ", err);
    });
}
