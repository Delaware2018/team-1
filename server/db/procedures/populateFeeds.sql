/****** Object:  StoredProcedure [dbo].[populateFeeds]    Script Date: 9/22/2018 10:39:50 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      Level Up
-- Create Date: 9/22/2018
-- Description: populate with sample date Donations Table
-- =============================================
CREATE PROCEDURE [dbo].[populateFeeds]



AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

   insert into feeds
   values('Post', 'Happy little John', 'new', '', 'https://previews.123rf.com/images/dolgachov/dolgachov1601/dolgachov160103220/50907730-babyhood-childhood-and-people-concept-happy-baby-face-over-blue-holidays-lights-background.jpg', '2018-09-22T14:17:58.197Z')

END
GO

