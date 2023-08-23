CREATE DATABASE database_01_tenhocvien

USE database_01_tenhocvien;

CREATE TABLE courses(
    id int NOT NULL,
    name varchar(100) NOT NULL,
    price float,
    detail text,
    teacher_id int NOT NULL,
    active int NOT NULL,
    created_at timestamp,
    updated_at timestamp
);

USE database_01_tenhocvien;
ALTER TABLE courses add description text NULL after price;


ALTER table courses CHANGE COLUMN detail content text NOT NULL;



CREATE TABLE teacher(
    id int NOT NULL,
    name varchar(100) NOT NULL,
    bio text NULL,
    created_at timestamp,
    updated_at timestamp
);


INSERT INTO teacher(id,name,bio,created_at,updated_at)
VALUES(1,"Nguyen Van A","giang vien 1",NOW(),NOW());

INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(1,"JS",1000,"Khoa hoc JS","Hoc ngon ngu JS",1,0,NOW(),NOW());
INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(2,"Python",2000,"Khoa hoc Python","Hoc ngon ngu Python",1,1,NOW(),NOW());
INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(3,"C++",3000,"Khoa hoc C++","Hoc ngon ngu C++",1,1,NOW(),NOW());



INSERT INTO teacher(id,name,bio,created_at,updated_at)
VALUES(2,"Nguyen Van B","giang vien 2",NOW(),NOW());

INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(1,"JS",1000,"Khoa hoc JS","Hoc ngon ngu JS",2,0,NOW(),NOW());
INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(2,"Python",2000,"Khoa hoc Python","Hoc ngon ngu Python",2,1,NOW(),NOW());
INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(3,"C++",3000,"Khoa hoc C++","Hoc ngon ngu C++",2,1,NOW(),NOW());


INSERT INTO teacher(id,name,bio,created_at,updated_at)
VALUES(3,"Tran Thi C","giang vien 3",NOW(),NOW());

INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(1,"JS",1000,"Khoa hoc JS","Hoc ngon ngu JS",3,0,NOW(),NOW());
INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(2,"Python",2000,"Khoa hoc Python","Hoc ngon ngu Python",3,1,NOW(),NOW());
INSERT INTO courses(id,name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES(3,"C++",3000,"Khoa hoc C++","Hoc ngon ngu C++",3,1,NOW(),NOW());



UPDATE courses SET name='Khoa hoc ngon ngu JS', price=4000,updated_at=NOW() WHERE id=1;
UPDATE courses SET name='Khoa hoc ngon ngu Python', price=5000,updated_at=NOW() WHERE id=2;
UPDATE courses SET name='Khoa hoc ngon ngu C++', price=6000,updated_at=NOW() WHERE id=3;


UPDATE teacher SET bio='Giang vien JS',updated_at=NOW() WHERE id=1;
UPDATE teacher SET bio='Giang vien Python',updated_at=NOW() WHERE id=2;
UPDATE teacher SET bio='Giang vien C++',updated_at=NOW() WHERE id=3;


SELECT * FROM teacher;
SELECT * FROM courses;

