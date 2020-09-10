module.exports = function reverse(n) {
    return (n * Math.sign(n))
        .toString()
        .split("")
        .reverse()
        .map((x) => parseInt(x, 10))
        .join("");
};
