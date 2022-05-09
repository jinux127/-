let number = 0;

// module.exports = number += 1;

// 모듈을 함수형으로 호출하면 중복된 호출이 가능함
module.exports = () => {
    return (number += 1);
};
