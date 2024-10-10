/* 
자릿수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.
▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.
▣ 입력예제 1
7
128 460 603 40 521 137 123
▣ 출력예제 1
137
*/

function solution(n, arr) {
  // 자릿수의 합이 최대인 자연수
  let answer = 0;

  // 각 배열의 자리수를 합한 값 중 가장 큰 수
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    // 각 요소의 자연수를 일의 자리로 각각 분리 및 더하기
    const numArr = arr[i].toString().split("");
    const add = numArr.reduce((acc, value) => Number(acc) + Number(value));

    // 저장된 최댓값보다 더 크다면 자리수를 합한 값과 arr배열 안의 자연수에 값을 새로 할당
    if (max < add) {
      max = add;
      answer = arr[i];
      // 만약 자리수를 합한 값이 같다면 저장된 answer 의 arr배열 자연수의 최댓값과 i번째 자연수를 비교
    } else if (max === add) {
      if (answer < arr[i]) {
        answer = arr[i];
      }
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
