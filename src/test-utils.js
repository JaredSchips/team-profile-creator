const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const randomInt = (max=100) => {
    return Math.floor(Math.random() * max)
}

const randomWord = (word_length=10) => {
    let word = ''
    for (let i = 0; i < word_length; i++) {
        word += letters[randomInt(26)]
    }
    return word
}

module.exports = { randomInt, randomWord }