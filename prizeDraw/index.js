function rank(st, we, n) {
    if (st.length === 0) return "No participants";
    if (we.length < n) return "Not enough participants";
    const str = st.split(",");
    let obj = {};
    let i = 0;
    str.forEach(element => {
        let count = 0; 
        for (let index = 0; index < element.length; index++) {
            const character = element[index].toLowerCase();
            count += character.charCodeAt(0) - 96;
            if (index === element.length - 1) {
                count += element.length;
                obj[element] = count * we[i];
                i++;
            };
        }
    });
    const arr = Object.entries(obj);
    arr.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][1] === arr[i + 1][1] && arr[i + 1][0] < arr[i][0]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    const result = arr[n - 1][0]
    return result
}
console.log(rank("William,Willaim,Olivia,Olivai,Lily,Lyli", [ 1, 1, 1, 1, 1, 1 ], 1));
