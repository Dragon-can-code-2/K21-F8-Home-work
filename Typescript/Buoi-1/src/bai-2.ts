interface Student {
    name: string,
    age: number,
    averScore: number,
    phoneNumber?: string
}

const students: Student[] = [
    {
        name: "Vương Mai Linh",
        age: 20,
        averScore: 8.5,
        phoneNumber: "0911111111"
    },
    {
        name: "Hồ Hiểu Tuệ",
        age: 21,
        averScore: 4.5
    },
    {
        name: "Tưởng Vân",
        age: 20,
        averScore: 7.5,
        phoneNumber: "0944444444"
    },
    {
        name: "Hồ Ngọc Phương Trinh",
        age: 22,
        averScore: 6.5,
        phoneNumber: "0977777777"
    },
    {
        name: "Bảo Đại",
        age: 19,
        averScore: 3.5,
        phoneNumber: "0989898989"
    }
];

function printStudent(students: Student): void {
    console.log(`Họ tên: ${students.name} | Tuổi: ${students.age} | Điểm: ${students.averScore} | SĐT: ${students.phoneNumber ?? "Chưa cập nhật"}`)
}

printStudent(students[0])
printStudent(students[1])
printStudent(students[2])
printStudent(students[3])
printStudent(students[4])

function getTopStudent(students: Student[]): Student {
    let topStudent: Student = students[0]
    for (let i: number = 0; i < students.length; i++) {
        if (students[i].averScore > topStudent.averScore) {
            topStudent = students[i];
        }
    }
    console.log(`Học viên điểm cao nhất: ${topStudent.name} (${topStudent.averScore})`)
    return topStudent
}

function getPassedStudents(students: Student[]): Student[] {
    let count: number = 0;
    for (let i: number = 0; i < students.length; i++) {
        if (students[i].averScore >= 5) {
            count++
        }
    }
    console.log(`Học viên đạt: ${count}`)
    for (let i: number = 0; i < students.length; i++) {
        if (students[i].averScore >= 5) {
            console.log(
                `Học viên: ${students[i].name} | Điểm: ${students[i].averScore} | Tuổi: ${students[i].age}`
            );
        }
    }
    return students
}

function countByAge(students: Student[], age: number): number {
    let count: number = 0;
    for (let i: number = 0; i < students.length; i++) {
        if (students[i].age === age) {
            count++
        }
    }
    console.log(`Học viên điểm ${age} tuổi: ${count}`)
    return count
}

getTopStudent(students)

getPassedStudents(students)

countByAge(students, 20)


