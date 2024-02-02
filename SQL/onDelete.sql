ALTER TABLE Likes
ADD CONSTRAINT FK_Likes_Post
	FOREIGN KEY (PostID)
	REFERENCES Posts(PostID)
	ON DELETE CASCADE
;
ALTER TABLE Comments
ADD CONSTRAINT FK_Comments_PostID
	FOREIGN KEY (PostID)
	REFERENCES Posts(PostID)
	ON DELETE CASCADE