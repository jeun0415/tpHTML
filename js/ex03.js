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

      <div id="c-receipt">
          <ul>
              <li class="c-li6"><span style="font-size: 13pt;">현금영수증 신청</span>
                  <div class="c-radio">
                      <input class="c-prt1" type="radio" name="rr">&nbsp;발급&nbsp;&nbsp;&nbsp;
                      <input class="c-prt2" type="radio" name="rr" checked>&nbsp;미발급
                  </div>
              </li>
          </ul>
          <div>
              <ul class="c-type1">
                  <input type="radio" name="aa" checked>&nbsp;소득공제용(일반 개인용)
                  &nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">이름</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>&nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">휴대폰번호</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>
              </ul>
              <ul class="c-type2">
                  <input type="radio" name="aa">&nbsp;지출증빙용(사업자용)
                  &nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">사업자명</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>&nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">사업자번호</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>
              </ul>
          </div>
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
      <div id="c-receipt">
          <ul>
              <li class="c-li6"><span style="font-size: 13pt;">현금영수증 신청</span>
                  <div class="c-radio">
                      <input class="c-prt1" type="radio" name="rr">&nbsp;발급&nbsp;&nbsp;&nbsp;
                      <input class="c-prt2" type="radio" name="rr" checked>&nbsp;미발급
                  </div>
              </li>
          </ul>
          <div>
              <ul class="c-type1">
                  <input type="radio" name="aa" checked>&nbsp;소득공제용(일반 개인용)
                  &nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">이름</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>&nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">휴대폰번호</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>
              </ul>
              <ul class="c-type2">
                  <input type="radio" name="aa">&nbsp;지출증빙용(사업자용)
                  &nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">사업자명</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>&nbsp;&nbsp;&nbsp;
                  <li class="c-li">
                      <label for="">사업자번호</label>&nbsp;
                      <input class="c-input" type="text">
                  </li>
              </ul>
          </div>
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




function execDaumPostcode() {
  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업을 통한 검색 결과 항목 클릭 시 실행
          var addr = ''; // 주소_결과값이 없을 경우 공백 
          var extraAddr = ''; // 참고항목

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 도로명 주소를 선택
              addr = data.roadAddress;
          } else { // 지번 주소를 선택
              addr = data.jibunAddress;
          }

          if(data.userSelectedType === 'R'){
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraAddr += data.bname;
              }
              if(data.buildingName !== '' && data.apartment === 'Y'){
                  extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
              }
              if(extraAddr !== ''){
                  extraAddr = ' (' + extraAddr + ')';
              }
          } else {
              document.getElementById("UserAdd1").value = '';
          }

          // 선택된 우편번호와 주소 정보를 input 박스에 넣는다.
          document.getElementById('zipp_code_id').value = data.zonecode;
          document.getElementById("UserAdd1").value = addr;
          document.getElementById("UserAdd1").value += extraAddr;
          document.getElementById("UserAdd2").focus(); // 우편번호 + 주소 입력이 완료되었음으로 상세주소로 포커스 이동
      }
  }).open();
}