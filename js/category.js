import * as product from "./product.js";

let categoryMenusList = document.querySelectorAll(".menu_category_list");

function focusAfterClick(event) {
  // 현재 선택된 메뉴에 'on' 클래스 제거
  const currentActiveMenu = document.querySelector('.menu_category_list.active');
  if (currentActiveMenu) {
    currentActiveMenu.classList.remove('active');
  }

  // 클릭한 메뉴에 'on' 클래스 추가
  const targetMenu = event.target.closest('.menu_category_list');
  targetMenu.classList.add('active');

  // 데이터 렌더링
  const categoryId = targetMenu.dataset.category;
  product.renderRecommendedProducts(categoryId);
  product.renderProducts(categoryId);
}

for (let i = 0; i < categoryMenusList.length; i++) {
  categoryMenusList[i].onclick = focusAfterClick;
}

product.renderRecommendedProducts(1);
product.renderProducts(1);
