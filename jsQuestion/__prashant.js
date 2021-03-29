const arr = [
    {
        f: function () {
            console.log('f1')
        },
        t: 1000,
    },
    {
        f: function () {
            console.log('f2')

        },
        t: 2000,
    },
    {
        f: function () {
            console.log('f3')
        },
        t: 3000,
    },
    {
        f: function () {
            console.log('f4')

        },
        t: 4000,
    },
    {
        f: function () {
            console.log('f5')

        },
        t: 5000,
    }
];


const promise = ({ f, t }) => {
    console.log('Waitng for', t / 1000, 'sec');
    return new Promise((resolve) => {
        setTimeout(() => {
            f();
            resolve(t)
        }, t);

    })
}

const promise2 = ({f,t}) => {
    setTimeout(() => {
        f();
        // resolve(t)
    }, t);
}

// arr.forEach((data) => {
//     promise2(data);
// });

callNextPromise = (arr, init, len) => {
    promise(arr[init]).then(time => {
        console.log('Executed after', time / 1000, 'sec');
        init++;
        if (init < len) 
            callNextPromise(arr, init, len);
        
        else 
            console.log('Last statement');
    });
}

callNextPromise(arr, 0, arr.length);
