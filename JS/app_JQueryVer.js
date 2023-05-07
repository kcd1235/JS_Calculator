//변수선언
var $inp = $("form[name=cal]"); //form 객체
var $input = $inp.find("input"); //현재 지정된 선택자의 후손을 찾음
var $cls_btn = $(".cls_btn"); //초기화버튼
var $result_btn = $(".result_btn"); //결과 버튼
var $result = $inp.find("input[name=result]"); //결과창

//이벤트 핸들러
//------------------------------------------------------------------
//숫자 및 사칙 연산 버튼
$("input").click(function () {
  var $input_value = $(this).val(); //현재 사용자가 클릭한 입력 객체 반환

  //숫자와 사칙 연산자만 입력 처리
  if ($input_value != "=" && $input_value != "clear") {
    calc($input_value);
  }
});

//초기화 버튼
$(".cls_btn").click(function () {
  clr();
});

//결과 버튼
$(".result_btn").click(function () {
  try {
    my_result();
  } catch (e) {
    $result.val("입력 오류");
  }
});

//------------------------------------------------------------------
//이벤트 핸들러 끝

//처리함수
//------------------------------------------------------------------
//계산기 초기화(clear)
function clr() {
  $result.val(0);
}

//계산기 입력 처리 함수
function calc(value) {
  //입력이 들어가면 0을 지움
  if ($result.val() == 0) {
    $result.val("");
  }

  //입력 값을 결과 창에 출력
  var val = $result.val() + value;
  $result.val(val);
}

//계산 결과 처리 함수
function my_result() {
  var calc = eval($result.val());

  //결과창에 표시
  $result.val(calc);
}
//------------------------------------------------------------------
//처리함수 끝
