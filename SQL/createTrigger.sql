CREATE TRIGGER AfterPostInsert
AFTER INSERT ON Posts
FOR EACH ROW
BEGIN
    -- Insert a like for the new post
    INSERT INTO Likes(PostID, UserID, Timestamp)
    Values(NEW.PostID, NEW.UserID, NEW.Timestamp);
END;