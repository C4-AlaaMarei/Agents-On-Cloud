

DROP DATABASE Book_Club;
CREATE DATABASE Book_Club;
USE Book_Club;

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE permissions (
    id INT AUTO_INCREMENT NOT NULL,
    permission VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role_permission (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role INT NOT NULL,
    permission INT NOT NULL,
    FOREIGN KEY (role) REFERENCES roles (id),
    FOREIGN KEY (permission) REFERENCES permissions (id)
);

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE library(
    id INT AUTO_INCREMENT NOT NULL,
    book_title VARCHAR(100) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE discussion_rooms(
    id INT AUTO_INCREMENT NOT NULL,
    discussion_room VARCHAR(100) NOT NULL,
    book_id INT,
    FOREIGN KEY (book_id) REFERENCES library(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE following_rooms(
    id INT AUTO_INCREMENT NOT NULL,
    discussion_room_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (discussion_room_id) REFERENCES discussion_rooms(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);





-- CREATE TABLE comments (
--     id INT AUTO_INCREMENT NOT NULL,
--     comment VARCHAR(100) NOT NULL,
--     room_id INT NOT NULL,
--     user_id INT NOT NULL,
--     FOREIGN KEY (room_id) REFERENCES discussion_rooms (id),
--     FOREIGN KEY (user_id) REFERENCES users (id),
--     is_deleted TINYINT DEFAULT 0,
--     PRIMARY KEY (id)

-- );

CREATE TABLE reading_list(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (book_id) REFERENCES library (id)

);



CREATE TABLE suggestions(
    id INT AUTO_INCREMENT NOT NULL,
    book_suggest VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);


INSERT INTO
    roles (role)
VALUES
    ('Admin');

INSERT INTO
    roles (role)
VALUES
    ('Fan');


INSERT INTO
    users (user_name,email,password,role_id) VALUE ('alaa','alaa@gmail.com',111,1);

INSERT INTO
    users (user_name,email,password,role_id) VALUE ('ali','ali@gmail.com',111,2);

    INSERT INTO
    library (book_title) VALUE ('coding');
 INSERT INTO
    library (book_title) VALUE ('java');
     INSERT INTO
    library (book_title) VALUE ('python');

      INSERT INTO
    discussion_rooms (discussion_room,book_id) VALUE ('historical',1);
   INSERT INTO
    discussion_rooms (discussion_room,book_id) VALUE ('the auther',2);
       INSERT INTO
    discussion_rooms (discussion_room,book_id) VALUE ('reality',3);


    INSERT INTO
    following_rooms (discussion_room_id, user_id)
VALUES
    (1,1);


    INSERT INTO
    reading_list (user_id, book_id)
VALUES
    (1,1); 


    INSERT INTO
    suggestions (book_suggest,author) VALUE ('Maths','decrt');



-- INSERT INTO
--     permissions (permission)
-- VALUES
--     ('Add');

-- INSERT INTO
--     permissions (permission)
-- VALUES
--     ('Remove');

-- INSERT INTO
--     permissions (permission)
-- VALUES
--     ('Create');

-- INSERT INTO
--     permissions (permission)
-- VALUES
--     ('Delete');

-- INSERT INTO
--     permissions (permission)
-- VALUES
--     ('View');

--   INSERT INTO
--     permissions (permission)
-- VALUES
--     ('Join');

--     INSERT INTO
--     permissions (permission)
-- VALUES
--     ('Unjoin');

--     INSERT INTO
--     permissions (permission)
-- VALUES
--     ('Suggest');

-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (1, 1);

-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (1, 2);
-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (1, 3);

-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (1, 4);
-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (1, 5);

-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (2, 5);

-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (2,6);
-- INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (2,7);
    
--     INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (2,1);
    
--     INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (2,2);
    
--     INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (2,5);

--        INSERT INTO
--     role_permission (role, permission)
-- VALUES
--     (2,8); 

