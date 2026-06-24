
const temps = [18, 22, 25, 30, 19, 27];
let max = 0;
for (const temp of temps) {
    if (temp>max){
        max=temp
    }
}
console.log(max);
