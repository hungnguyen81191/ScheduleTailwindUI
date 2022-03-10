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

let NGAY_KHAI_GIANG = get_start_date();
let current = new Date(NGAY_KHAI_GIANG);

const LEARNING_DAYS = [TUE, THU, SAT];
const get_date_string = (date) => date.toISOString().substring(0, 10);
const get_next_date = (date) => date.getDate() + 1;

const get_schedule = lesson => {
    let day = -1, not_learning_day = true, is_day_off = true, date_string = "";

    while (not_learning_day || is_day_off) {
        current.setDate(get_next_date(current));
        date_string = get_date_string(current);
        day = current.getDay();
        not_learning_day = !LEARNING_DAYS.includes(day);
        is_day_off = HOLIDAY_LIST.includes(date_string) || DAY_OFF_LIST.includes(date_string);
    }
    return {
        day: DAY_STR[day],
        lesson,
        date: get_date_string(current)
    };
};

let learning_schedule = [
    {
        day: DAY_STR[current.getDay()],
        lesson: lessons_list[0],
        date: get_date_string(current)
    },
    ...lessons_list.slice(1).map(get_schedule)
];

function display_schedule() {
    
   let result="";
    for(var i=0; i<learning_schedule.length; i++) {
        
        // template string
        result += `<tr>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50">
                ${i + 1}
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ${learning_schedule[i].day}
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ${learning_schedule[i].date}
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ${learning_schedule[i].lesson}
            </th>
        </tr>
        `;
        // result +="<tr>"+"<td>" + learning_schedule[i].day.toString() + "</td>" + "<td>" + learning_schedule[i].lesson.toString() + "</td>" + "<td>" + learning_schedule[i].date.toString() +
        //         "</td>";   

    }
    console.log(result);
    document.getElementById("schedule").innerHTML = result;
};