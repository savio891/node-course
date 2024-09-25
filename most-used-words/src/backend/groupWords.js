module.exports = words => {
    //[A, B, B, C]
    // {A: 1, B:2, C:1}
    return new Promise((resolve, reject) => {
        try {
            const groupeddWords = words.reduce((obj, word) => {
                if(obj[word]) {
                    obj[word] = obj[word] + 1
                }else {
                    obj[word] = 1
                }
                return obj;
            }, {})

            const groupedWordsArray = Object.keys(groupeddWords)
                                    .map(key => ({word: key, amount: groupeddWords[key]}))
                                    .sort((w1, w2) => w2.amount-w1.amount)
            resolve(groupedWordsArray)
        }catch(e) {
            reject(e)
        }
    })
}