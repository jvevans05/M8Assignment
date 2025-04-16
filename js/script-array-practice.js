//STEP 1
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire'
// ]
// console.log(movies[1])



//STEP 2
// let moreMovies = new Array(5)
// for (i=0, moreMovies.length, i++) {
//     moreMovies[i] = 'Redline'
// }
// console.log(moreMovies[0])



//STEP 3
// let moreMovies = new Array(5)
// for (i=0; i<moreMovies.length; i++) {
//     moreMovies[i] = movies[2]
// }
// moreMovies.splice(2, 0, 'Alien')
// console.log(moreMovies.length)



//STEP 4
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire'
// ]
// delete movies[0]
// console.log(movies)



//STEP 5
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// for (const movie in movies) {
//     console.log(movies[movie])
// }




//STEP 6
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// for (let i of movies) {
//     console.log(i)
// }



//STEP 7
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// for (let i of movies.sort()) {
//     console.log(i)
// }



//STEP 8
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// let leastFavMovies = [
//     'Human Centipede',
//     'Vivarium',
//     'Paydirt'
// ]
// console.log('Movies I like: ', '\n')
// console.log('\n')
// for (let i of movies) {
//     console.log(i)
// }
// console.log('\n')
// console.log('Movies I regret watching: ')
// console.log('\n')
// for (let i of leastFavMovies) {
//     console.log(i)
// }



//STEP 9
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// let leastFavMovies = [
//     'Human Centipede',
//     'Vivarium',
//     'Paydirt'
// ]
// console.log('oh god, why...')
// let manyMovies = movies.concat(leastFavMovies)
// console.log(manyMovies.sort().reverse())



//STEP 10
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// let leastFavMovies = [
//     'Human Centipede',
//     'Vivarium',
//     'Paydirt'
// ]
// let manyMovies = movies.concat(leastFavMovies)
// console.log(manyMovies.sort().reverse().pop())



//STEP 11
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// let leastFavMovies = [
//     'Human Centipede',
//     'Vivarium',
//     'Paydirt'
// ]
// let manyMovies = movies.concat(leastFavMovies)
// console.log(manyMovies.sort().reverse().shift())



//STEP 12
// let movies = [
//     'The Road to El Dorado',
//     'The Shawshank Redemption',
//     'Redline',
//     'Princess Mononoke',
//     'Mrs. Doubtfire',
//     'Babe',
//     'Treasure Planet'
// ]
// let leastFavMovies = [
//     'Human Centipede',
//     'Vivarium',
//     'Paydirt'
// ]
// let manyMovies = movies.concat(leastFavMovies)
// for (let i of manyMovies) {
//     for (let j of leastFavMovies) {
//         if (i == j) {
//             //manyMovies[i] = movies[i%movies.length]
//             k = manyMovies.indexOf(i)
//             manyMovies[k] = movies[k%movies.length]
//             console.log(k%movies.length)
//         }
//     }
// }
// console.log(manyMovies)



//STEP 13     nonfunctional
let movies = [
    ['The Road to El Dorado',       1],
    ['The Shawshank Redemption',    2],
    ['Redline',                     3],
    ['Princess Mononoke',           4],
    ['Mrs. Doubtfire',              5],
]
let actualNewMovies = []
for (let i of movies) {
    j = movies.indexOf(i)
    let newMovies = movies[j].filter((movie) => {
        //console.log(movie)
        return typeof movie === 'string'
    })
    console.log(newMovies)
    actualNewMovies[j] = newMovies[j][j]
}


//STEP 14
// let employees = [
//     'ZAK',
//     'JESSICA',
//     'MARK',
//     'FRED',
//     'SALLY'
// ]
// function showEmployees(empArray) {
//     empArray.forEach(element => {
//         console.log(element)
//     });
// }
// showEmployees(employees)



//STEP 15
// data = [58, '', 'abcd', true, null, false, 0]
// console.log(filterValues(data))
// function filterValues(array) {
//     newArray = []
//     i = 0
//     array.forEach((element) => {        
//         if (element != false && element != null &&  element != 0 && element != undefined && element != '') {
//             newArray[i] = element
//             i++
//         }   
//     })   
//     return newArray
// }



//STEP 16
// let numArray = [122,45,2,69,0,-1,222.2]
// console.log(randElem(numArray))
// function randElem(array) {
//     index = Math.round(Math.random() * (array.length -1))
//     console.log(index)
//     return array[index]
// }



//STEP 17
// let numArray = [122,45,2,69,0,-1,222.2]
// console.log(largestNum(numArray))
// function largestNum(array) {
//     let largest = array[0]
//     array.forEach(element => {
//         if (largest < element) {
//             largest = element
//         }
//     });
//     return largest
// }

