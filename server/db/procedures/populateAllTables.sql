/****** Object:  StoredProcedure [dbo].[populateTables]    Script Date: 9/22/2018 10:40:14 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      Level Up
-- Create Date: 9/22/2018
-- Description: execute procedures to populate Chapters, Donations and UsersTable tables
-- =============================================
CREATE PROCEDURE [dbo].[populateTables]

AS
BEGIN

	exec [dbo].[populateChapters];
	exec [dbo].[populateDonations];
	exec [dbo].[populateUsersTable];
	exec [dbo].[populateFeeds];

END
GO

