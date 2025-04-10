const fibona = (max) => {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {
                        value: cur,
                        done: cur >= max
                    }
                }
            }
        }
    }
}
for (const num of fibona(100)) {
    console.log(num)
}