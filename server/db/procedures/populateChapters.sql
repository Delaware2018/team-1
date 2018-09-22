/****** Object:  StoredProcedure [dbo].[populateChapters]    Script Date: 9/22/2018 7:37:39 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      Level Up
-- Create Date: 9/22/2018
-- Description: populate with sample date Chapters Table
-- =============================================
CREATE PROCEDURE [dbo].[populateChapters]



AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

   insert into chapters
   values('A1000', 'NYU'),
   ('A2000', 'Penn University'),
   ('A3000', 'Queens College'),
   ('A4000', 'Hunther College')

END
GO

