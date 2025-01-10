function aa() {
  event.preventDefault();
  const cb1 = document.querySelector("#cb1");
  const pro1 = document.querySelector("#pNum1");
  const cb2 = document.querySelector("#cb2");
  const pro2 = document.querySelector("#pNum2");
  const cb3 = document.querySelector("#cb3");
  const pro3 = document.querySelector("#pNum3");
  const cb4 = document.querySelector("#cb4");
  const pro4 = document.querySelector("#pNum4");
  const un = document.querySelector("#name");
  const add = document.querySelector("#address");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const coopang = document.querySelector("#coopang");
  const memo = document.querySelector("#memo");
  const select = document.getElementsByName("check");

  if (cb1.checked) {
    if (!pro1.value.trim()) {
      alert("체크 한 값을 입력해주세요");
      pro1.focus();
      return;
    }
    if (pro1.value <= 0 || pro1.value > 5) {
      alert("갯수를 다시입력해주세요.");
      pro1.focus();
    }
  }
  if (cb2.checked) {
    if (!pro2.value.trim()) {
      alert("체크 한 값을 입력해주세요");
      pro2.focus();
      return;
    }
    if (pro2.value <= 0 || pro1.value > 3) {
      alert("갯수를 다시입력해주세요.");
      pro2.focus();
    }
  }
  if (cb3.checked) {
    if (!pro3.value.trim()) {
      alert("체크 한 값을 입력해주세요");
      pro3.focus();
      return;
    }
    if (pro3.value <= 0 || pro3.value > 5) {
      alert("갯수를 다시입력해주세요.");
      pro3.focus();
    }
  }
  if (cb4.checked) {
    if (!pro4.value.trim()) {
      alert("체크 한 값을 입력해주세요");
      pro4.focus();
      return;
    }
    if (pro4.value <= 0 || pro4.value > 3) {
      alert("갯수를 다시입력해주세요.");
      pro4.focus();
    }
  }
  if (pro1.value) {
    if (!cb1.checked) {
      alert("주문할 상품을 체크해주세요");
      ch1.focus();
      return;
    }
  }
  if (pro2.value) {
    if (!cb2.checked) {
      alert("주문할 상품을 체크해주세요");
      ch1.focus();
      return;
    }
  }
  if (pro3.value) {
    if (!cb3.checked) {
      alert("주문할 상품을 체크해주세요");
      ch1.focus();
      return;
    }
  }
  if (pro4.value) {
    if (!cb4.checked) {
      alert("주문할 상품을 체크해주세요");
      ch1.focus();
      return;
    }
  }
  if (!un.value) {
    alert("이름을 입력해주세요.");
    un.focus;
  }
  if (!add.value) {
    alert("주소을 입력해주세요.");
    add.focus;
  }
  if (!email.value) {
    alert("email을 입력해주세요.");
    email.focus;
  }
  if (!phone.value) {
    alert("번호을 입력해주세요.");
    phone.focus;
  }
  if (!coopang.value) {
    alert("배송 날짜를 지정해주세요.");
    coopang.focus();
    return;
  }

  let selects;
  select.forEach((x) => {
    if (x.checked) {
      selects = x.value;
    }
  });
  console.log("1번첵빡스 : " + cb1.value);
  console.log("선물용3kg 개수 : " + pro1.value);
  console.log("2번첵빡스 : " + cb2.value);
  console.log("선물용5kg 개수 : " + pro2.value);
  console.log("3번첵빡스 : " + cb3.value);
  console.log("가정용3kg 개수 : " + pro3.value);
  console.log("4번첵빡스 : " + cb4.value);
  console.log("가정용5kg 개수 : " + pro4.value);
  console.log("고객 이름 : " + un.value);
  console.log("주소 : " + add.value);
  console.log("email : " + email.value);
  console.log("전화번호 : " + phone.value);
  console.log("배송 예정 날짜 : " + coopang.value);
  console.log("특이사항 : " + memo.value);
  console.log("포장 여부 : " + selects);
}