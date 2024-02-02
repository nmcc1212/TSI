CREATE VIEW PostCountPerUser AS 
SELECT Users.UserID, Users.Username, COUNT(Posts.PostID) AS PostCount 

FROM Users 
LEFT JOIN Posts ON Users.UserID = Posts.UserID 
GROUP BY Users.UserID, Users.Username;


-- CREATE VIEW PostLikesCommentsCount AS
-- Select Posts.PostID, Users.Username, COUNT(Likes.LikeID) AS LikeCount, COUNT(Comments.CommentID) AS CommentCount

-- FROM Posts

-- LEFT JOIN Users ON Posts.UserID = Users.UserID
-- LEFT JOIN Likes ON Posts.PostID = Likes.PostID
-- LEFT JOIN Comments ON Posts.PostID = Comments.PostID
-- GROUP BY Posts.PostID, Users.Username
-- ORDER BY PostID

CREATE OR REPLACE VIEW PostLikesCommentsCount AS
SELECT Posts.PostID, Users.Username, LikeCount , CommentCount
FROM Posts

LEFT JOIN Users ON Posts.UserID = Users.UserID
LEFT JOIN (SELECT COUNT(LikeID) AS LikeCount,PostID FROM Likes GROUP BY PostID) AS Like1 ON Posts.PostID = Like1.PostID
LEFT JOIN (SELECT COUNT(CommentID) AS CommentCount, PostID FROM Comments GROUP BY PostID) AS Comment1 ON Posts.PostID = Comment1.PostID

ORDER BY PostID

--

CREATE OR REPLACE VIEW UserBreakdown AS
SELECT
    Users.Username,
    COUNT(DISTINCT Posts.PostID) AS PostsMade,
    COUNT(DISTINCT Comments.CommentID) AS CommentsMade,
    COUNT(DISTINCT Likes.LikeID) AS LikesGiven,
    COUNT(DISTINCT L.LikeID) AS LikesReceived
FROM
    Users
LEFT JOIN
    Posts ON Users.UserID = Posts.UserID
LEFT JOIN
    Comments ON Users.UserID = Comments.UserID
LEFT JOIN
    Likes ON Users.UserID = Likes.UserID
LEFT JOIN
    Likes L ON Posts.PostID = L.PostID
GROUP BY
    Users.UserID, Users.Username;