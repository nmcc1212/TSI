-- Create Users Table
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- Create Posts Table
CREATE TABLE Posts (
    PostID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Content TEXT,
    Timestamp TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create Comments Table
CREATE TABLE Comments (
    CommentID INT AUTO_INCREMENT PRIMARY KEY,
    PostID INT,
    UserID INT,
    CommentText TEXT,
    Timestamp TIMESTAMP,
    FOREIGN KEY (PostID) REFERENCES Posts(PostID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create Likes Table
CREATE TABLE Likes (
    LikeID INT AUTO_INCREMENT PRIMARY KEY,
    PostID INT,
    UserID INT,
    Timestamp TIMESTAMP,
    FOREIGN KEY (PostID) REFERENCES Posts(PostID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
