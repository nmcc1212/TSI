CREATE TABLE Friends (
    FriendshipID INT PRIMARY KEY AUTO_INCREMENT,
    UserID1 INT,
    UserID2 INT,
    FriendshipStatus ENUM('Pending', 'Accepted') DEFAULT 'Pending',
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID1) REFERENCES Users(UserID),
    FOREIGN KEY (UserID2) REFERENCES Users(UserID),
    CHECK (UserID1 <> UserID2)
);