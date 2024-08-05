function cartSelectAll(selectAll) {
  const checkboxes = document.querySelectorAll(".my-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

function siteAgreeSelectAll(selectAll) {
  const checkboxes = document.getElementsByName("agree");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

const paymentList = document.querySelectorAll(".c-li5");

for (let i = 0; i < paymentList.length; i++) {
  paymentList[i].onclick = showPaymentMenu;
}

function showPaymentMenu(event) {
  event.preventDefault();

  const selected = document.querySelectorAll(".c-a2");
  selected.forEach((select) => select.classList.remove("on"));

  const targetElement = event.target.closest(".c-li5");

  if (targetElement) {
    targetElement.querySelector("a").classList.add("on");
  }

  const paymentId = targetElement.getAttribute("payment-data");
  renderPaymentMethod(paymentId);
}

function renderPaymentMethod(id) {
  const parent = document.querySelector(".payment-method");
  eraseProducts(parent);

  let paymentTemplate = "";

  switch (id) {
    case "1":
      paymentTemplate = `
          <div class="c-pay1">
            <h3 class="c-top1">신용카드</h3>
            <label for="">카드종류&nbsp;</label>
            <select name="" class="c-input">
              <option value="" selected>카드를 선택해주세요.</option>
              <option value="">KB카드</option>
              <option value="">BC카드</option>
              <option value="">삼성카드</option>
              <option value="">신한카드</option>
              <option value="">외환카드</option>
              <option value="">하나카드</option>
              <option value="">롯데카드</option>
              <option value="">씨티카드</option>
              <option value="">광주비자</option>
              <option value="">현대카드</option>
              <option value="">전북카드</option>
              <option value="">NH카드</option>
              <option value="">수협카드</option>
              <option value="">제주카드</option>
              <option value="">신협카드</option>
              <option value="">우리카드</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="">할부종류&nbsp;</label>
            <select name="" class="c-input">
              <option value="" selected>일시불</option>
              <option value="">2개월</option>
              <option value="">3개월</option>
              <option value="">5개월</option>
            </select>
          </div>
        `;
      break;
    case "2":
      paymentTemplate = `
      <div class="c-pay2">
        <h3 class="c-top1">가상계좌</h3>
        <label for="">입금자명&nbsp;</label>
        <input class="c-input" type="text">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label for="">입금은행&nbsp;</label>
        <select name="" class="c-input">
            <option value="" selected>입금은행 선택</option>
            <option value="">기업</option>
            <option value="">국민</option>
            <option value="">농협</option>
            <option value="">하나</option>
            <option value="">우리</option>
            <option value="">신한</option>
            <option value="">경남</option>
            <option value="">우체국</option>
            <option value="">부산</option>
        </select>
        <h4 class="c-top2">무통장입금(가상계좌) 서비스 안내</h4>
        <ul>
            <li class="c-li">- 고유한 가상계좌 번호를 부여하고 해당 계좌번호로 입금하시면 결제완료 됩니다.</li>
            <li class="c-li">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                - 결제하기 버튼을 클릭하여 계좌번호를 발급받고 해당 번호로 무통장 입금하시면 됩니다.</li>
        </ul>
      </div>
      `;
      break;
    case "3":
      paymentTemplate = `
      <div class="c-pay3">
        <h3 class="c-top1">결제안내</h3>
        <ul>
            <li class="c-li">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                - 계좌이체로 결제완료시 본인 계좌에서 즉시 이체 처리됩니다.</li><br>
            <li class="c-li">- 실시간 계좌이체는 은행별 이용시간이 다를 수 있습니다.</li>
        </ul>
      </div>
      `;
      break;
    default:
      break;
  }
  parent.innerHTML = paymentTemplate;
}

function eraseProducts(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

renderPaymentMethod("1");
