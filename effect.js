document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0; // Ẩn các phần
    section.style.transform = 'translateY(20px)'; // Đẩy các phần xuống
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1; // Hiện phần
            entry.target.style.transform = 'translateY(0)'; // Trở về vị trí ban đầu
            observer.unobserve(entry.target); // Ngừng theo dõi phần đã hiển thị
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section); // Theo dõi từng phần
});