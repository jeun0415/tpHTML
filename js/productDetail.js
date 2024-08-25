const renderProductDetail = document.querySelector(".product_detail");

// 제품 상세 페이지에서 저장된 제품 정보를 불러와 표시하는 함수
function loadProductDetails() {
  const productData = sessionStorage.getItem("selectProduct");
  let productLiteral = ``;

  console.log(productData);

  if (productData) {
    const product = JSON.parse(productData);

    productLiteral = `
        <ul>
<li>
  <div class="left_area">
    <ul>
      <li class="item_wrap">
        <span class="img">
          <img src="${product.img}" alt="" width="350" height="350">
        </span>
        <div class="k-desc1">* 상기 이미지는 실제 제품과 다소 차이가 있을 수 있습니다.</div>
        <div class="k-desc2">
          <ul>
            <li>
              ${product.desc}
              <br>
              가득 샌드한 제품
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <div class="right_area">
    <div class="info">
      <span class="name">${product.name}</span>
      <span class="txt_shape">${product.kind}</span>
    </div>
    <div class="table_nutrition">
      <table>
        <caption>영양 성분</caption>
        <thead>
          <tr>
            <th scope="row" rowspan="4">영양성분</th>
            <td>총중량(g) 103</td>
          </tr>
          <tr>
            <td>총제공중량(회) 1회</td>
          </tr>
          <tr>
            <td>1회 제공량(개) 1개</td>
          </tr>
          <tr>
            <td>중량(g) 103</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="first">열량(kcal)</th>
            <td class="first">340</td>
          </tr>
          <tr>
            <th scope="row">당류(g/%)</th>
            <td>12/12</td>
          </tr>
          <tr>
            <th scope="row">단백질(g/%)</th>
            <td>6/11</td>
          </tr>
          <tr>
            <th scope="row" class="last">나트륨(mg/%)</th>
            <td>210/11</td>
          </tr>
          <tr>
            <td colspan="2">* %영양소기준치 : 1일 영양성분 기준치에 대한 비율</td>
          </tr>
          <tr class="is-allergy">
              <th scope="row" class="last">알레르기 정보</th>
              <td class="last">계란, 우유, 대두, 밀 함유</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn-area">
      <a href="./category.html" class="btn large st8">목록</a>
    </div>
  </div>
</li>
</ul>`;
  } else {
    console.log("No product selected");
  }

  renderProductDetail.innerHTML = productLiteral;
}

// 페이지 로드 시 제품 정보 불러오기
document.addEventListener("DOMContentLoaded", loadProductDetails);
