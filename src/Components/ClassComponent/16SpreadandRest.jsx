import React, { Component } from 'react'

export default class SpreadandRest extends Component {
    render() {

        // Rest

        const addition = (a, ...b) => {
            console.log("const addition value of a : ", a, " value of b ", b);
        }
        addition(50, 60, 80, 90)
        addition(50, 60)

        // Spread

        const additionSpread = (a, b, c, d) => {
            console.log("called addition value of a : ", a, b, c, d);
        }
        additionSpread(50, 60, 80, 90)
        additionSpread(50, 60)
        const numbers = [1, 3, 5, 7]
        additionSpread(numbers[0], numbers[1], numbers[2], numbers[3])
        additionSpread(...numbers)
        additionSpread(numbers)

        // Rest In Object

        var student = {
            name: "Sachin",
            age: 22,
            course: ["wd", "front-end"]
        }
        const { name, ...rest } = student;
        console.log(name, rest);

        // Spread In Object

        var newstudent = {
            ...student,
            name: "Krunal"
        }
        console.log(newstudent);

        return (
            <>
                <div>
                    <h2>check console for better understanding of spread and rest with array & object</h2>
                </div>
            </>
        )
    }
}
