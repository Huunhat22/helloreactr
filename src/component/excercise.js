import React, { Component } from "react";

class Excercise extends Component{
    render(){
        // tạo 1 object student
        var students = [
            {
                id : 1,
                name : 'Võ Hữu Nhật',
                address : 'Gò Vấp',
                sex : 'Male',
                age : 26
            },
            {
                id : 2,
                name : 'Ngô Thị Bình Dương',
                address : 'Quận 7',
                sex : 'Female',
                age : 25
            }
        ];

        var elements = students.map((students, index) => {
            return  <div key={students.id}>
                        <h5>Name : { students.name}</h5>
                        <p>Address : {students.address}</p>
                        <p>sex : {students.sex}</p>
                        <p>age : {students.age}</p>
                    </div>
        });
            

        return(
            <div>
                 { elements }
            </div>
        )    
    }
}

export default Excercise;