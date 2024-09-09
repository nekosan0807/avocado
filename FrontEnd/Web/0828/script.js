// 示例：當網頁加載時顯示一條歡迎信息
document.addEventListener('DOMContentLoaded', () => {
    console.log('歡迎來到 BDFF 的關於我們頁面！');
});
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

