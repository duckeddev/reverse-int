module.exports = function reverse(n) {
    return Math.sign(n) != -1 ? +n.toString().split('').reverse().join('') : +Math.abs(n).toString().split('').reverse().join('');
}
