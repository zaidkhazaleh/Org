// منع النقر بزر الفأرة الأيمن
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('حقوق النشر محفوظة. لا يُسمح بنسخ المحتوى.');
});

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
        alert('تم تعطيل هذه الاختصارات لأسباب أمنية.');
    }
});

// حفظ القائمة الرئيسية في متغير
const mainLinks = document.getElementById('main-links');
const originalLinks = mainLinks.innerHTML;

// تفويض الأحداث للتعامل مع النقر على الروابط
mainLinks.addEventListener('click', function(event) {
    const target = event.target;

    // إذا تم النقر على زر Instagram
    if (target.id === 'instagram-link' || target.closest('#instagram-link')) {
        event.preventDefault(); // منع الانتقال إلى الرابط

        mainLinks.innerHTML = `
            <a href="https://instagram.com/zd6s" target="_blank" class="link-button">
                <i class="fab fa-instagram"></i> zd6s
            </a>
            <a href="https://instagram.com/zd6" target="_blank" class="link-button">
                <i class="fab fa-instagram"></i> zd6
            </a>
            <a href="https://instagram.com/dc5d" target="_blank" class="link-button">
                <i class="fab fa-instagram"></i> dc5d
            </a>
            <a href="https://instagram.com/zdm6" target="_blank" class="link-button">
                <i class="fab fa-instagram"></i> zdm6
            </a>
            <a href="#" class="link-button" id="back-button">
                <i class="fas fa-arrow-left"></i> رجوع
            </a>
        `;
    }

    // إذا تم النقر على زر الرجوع
    if (target.id === 'back-button' || target.closest('#back-button')) {
        event.preventDefault(); // منع الانتقال إلى الرابط
        mainLinks.innerHTML = originalLinks; // استعادة القائمة الرئيسية
    }
});
