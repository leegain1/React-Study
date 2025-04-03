function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let answer = arr[0];

    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }

    return answer;
}

