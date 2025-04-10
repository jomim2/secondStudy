let arr = [];
arr[1] = 1;

const i_like_ameba = (generate, whenDie, howMany) => {
    for (let i = 2; i <= generate; i++) {
        arr[i] = arr[i - 1] * howMany;
    }

    let live = 0;
    let die = 0;
    for (let i = 1; i <= generate; i++) {
        live += arr[i];
        if (i >= whenDie + 1) {
            live -= arr[i - whenDie];
            die += arr[i - whenDie];
        }
    }
    console.log("살은친구:", live);
    console.log("죽은친구:", die);
}
i_like_ameba(19, 2, 3)