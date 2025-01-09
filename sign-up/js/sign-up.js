function inputCheck() {
  //입력한 내용을 사라지지않게 유지해주는 함수
  event.preventDefault();
  const uderId = document.querySelector("#uid");
  const email = document.querySelector("#email");
  const pas1 = document.querySelector("#pwd1");
  const pas2 = document.querySelector("#pwd2");
  const path = document.querySelector("#path");
  const memo = document.querySelector("#memo");
  const mailling = document.getElementsByName("check");
  const ch1 = document.querySelector("#ch1");
  //1.아이디가 4~10자 사이 확인
  if (uderId.value.length < 4 || uderId.value.length > 10) {
    alert("다시 ");

    uderId.focus();
  }
  // 2.email이 비었는지 확인
  if (email.value.length == 0) {
    alert("이메일이 비었습니다,입력해주세요.");
    //비우고
    email.value = "";
    //포커스 주기
    email.focus();
  }
  // 3.비밀번호와 비밀번호 확인의 값이 같은지
  if (pas1.value !== pas2.value) {
    alert("비밀번호가 다름");
    pas2.value = "";
    pas2.focus();
  }
  // 4.get방식으로 전달... 요청하는 페이지로..
  //   콘솔에서 출력을 함 f12를 나오는 개발자도구에 출력
  // 메일 수신여부를 검사->return값을 결정
  let mailReceive;
  mailling.forEach((x) => {
    if (x.checked) {
      mailReceive = x.value;
    }
  });

  // alert(uderId.value.length);
  console.log("user-ID: " + uderId.value);
  console.log("Email : " + email.value);
  console.log("Password : " + pas1.value);
  console.log("Passwordcheck : " + pas2.value);
  console.log("Path : " + path.value);
  console.log("Memo : " + memo.value);
  console.log("mailReceive : " + mailReceive);
}
