window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
//نلاحظ اننا لم نضيف بالاخير امتداد جافاسكريبت, وسواء اضفناه او لا فالنتيجة نفسها وذلك ربما بسبب اننا في ملف الجافاسكريبت ليس من الضروري اضافته
import "@fortawesome/fontawesome-free/js/all.min";

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

document.querySelectorAll(".add-to-cart-btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("أضيف المُنتج الى عربة الشراء");
  });
});

document.getElementById("copyright").innerHTML =
  "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear();
