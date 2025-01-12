// 1.  input 키 , 몸무게, 버튼 가져오기
const height = document.querySelector('#user_height');
const weight = document.querySelector('#user_weight');
const btn = document.querySelector('button');
// 1-2. em 두개 가져오기
const properW = document.querySelector('.weight_proper');
const excessW = document.querySelector('.weight_excess');

// 2. 이벤트 만들기  
btn.addEventListener('click', function(){
    //적정체중 출력
    const properWeight = (Number(height.value) - 100)*0.9;
    properW.innerHTML = properWeight;
    console.log((height.value-100)*0.9);
    //초과된 체중 출력
    excessW.innerHTML = Number(weight.value) - properWeight;
    console.log(weight.value - properWeight);
})