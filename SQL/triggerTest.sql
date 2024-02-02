INSERT INTO Posts (UserID, Content, Timestamp) VALUES ((SELECT UserID FROM Users LIMIT 1), "test post", CURRENT_TIMESTAMP);

SELECT * from Likes WHERE Timestamp = CURRENT_TIMESTAMP