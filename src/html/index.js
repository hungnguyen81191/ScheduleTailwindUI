let get_start_date = () => {
    let start_date = document.getElementById("start_date").value;
    // console.log(start_date);
    return start_date;
}

const [SUN, MON, TUE, WED, THU, FRI, SAT] = [0, 1, 2, 3, 4, 5, 6];
const DAY_STR = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const HOLIDAY_LIST = [
    "2022-04-09",
    "2022-04-10",
    "2022-04-11",
    "2022-04-30",
    "2022-05-01",
    "2022-05-02",
    "2022-05-03",
    "2022-09-01",
    "2022-09-02",
    "2022-09-03",
    "2022-09-04"
];
let lessons_list = [
    "Bài 1. Nhập môn tư duy lập trình - Lý thuyết",
    "Bài 2. Nhập môn tư duy lập trình - Thực hành",
    "Bài 3. Quản lý mã nguồn với Git - Thực hành",
    "Bài 4. Cách tạo một trang web - Lý thuyết",
    "Bài 5. Cách tạo một trang web - Thực hành",
    "Bài 6. Biến, kiểu dữ liệu và toán tử - Lý thuyết",
    "Bài 7. Biến, kiểu dữ liệu và toán tử - Thực hành",
    "Bài 8. Cơ bản về HTML DOM - Lý thuyết",
    "Bài 9. Cơ bản về HTML DOM - Thực hành",
    "Bài 10. Cấu trúc điều kiện - Lý thuyết",
    "Bài 11. Cấu trúc điều kiện - Thực hành",
    "Bài 12. Cấu trúc lặp - Lý thuyết",
    "Bài 13. Cấu trúc lặp - Thực hành",
    "Bài 14. Cấu trúc lặp - Thực hành",
    "Bài 15. Mảng - Lý thuyết",
    "Bài 16. Mảng - Thực hành",
    "Bài 17. Mảng - Thực hành",
    "Bài 18. Hàm - Lý thuyết",
    "Bài 19. Hàm - Thực hành",
    "Bài 20. Hàm - Thực hành",
    "Bài 21. Canvas - Lý thuyết + Thực hành",
    "Bài 22. Lớp và Đối tượng - Lý thuyết",
    "Bài 23. Lớp và Đối tượng - Thực hành",
    "Bài 24. Lớp và Đối tượng - Thực hành",
    "Bài 25. Thuật toán - Lý thuyết + Thực hành",
    "Bài 26. Case Study - Lý thuyết",
    "Bài 27. Case Study - Thực hành",
    "Bài 28. Case Study - Thực hành",
    "Bài 29. Thi cuối khóa và bảo vệ Case Study",
    "Bài 30. Tổng kết"
];
