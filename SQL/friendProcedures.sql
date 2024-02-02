DELIMITER //

CREATE PROCEDURE SendFriendRequest(
    IN p_SenderID INT,
    IN p_ReceiverID INT
)
BEGIN
    -- Send friend request
    INSERT INTO Friends(UserID1, UserID2, FriendshipStatus, Timestamp)
    VALUES(p_SenderID, p_ReceiverID, 'Pending', CURRENT_TIMESTAMP);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE AcceptFriendRequest(
    IN p_UserID1 INT,
    IN p_UserID2 INT
)
BEGIN
    -- Accept friend request
    UPDATE Friends
    SET FriendshipStatus = 'Accepted', Timestamp = CURRENT_TIMESTAMP
    WHERE (UserID1 = p_UserID1 AND UserID2 = p_UserID2 AND FriendshipStatus = 'Pending')
       OR (UserID1 = p_UserID2 AND UserID2 = p_UserID1 AND FriendshipStatus = 'Pending');
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE Unfriend(
    IN p_UserID1 INT,
    IN p_UserID2 INT
)
BEGIN
    -- Unfriend
    DELETE FROM Friends
    WHERE (UserID1 = p_UserID1 AND UserID2 = p_UserID2 AND FriendshipStatus = 'Accepted')
       OR (UserID1 = p_UserID2 AND UserID2 = p_UserID1 AND FriendshipStatus = 'Accepted');
END //

DELIMITER ;
